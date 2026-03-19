"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

const steps = [
    {
        number: "01",
        title: "Design your products",
        description: "Upload your art or use our intuitive design tools to make standout products your audience will love.",
        from: "#d1fae5", to: "#ecfdf5", border: "#6ee7b7", num: "#10b981",
        image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1773900943/ChatGPT_Image_Mar_9_2026_09_18_09_PM_1_njjmm3.png",
    },
    {
        number: "02",
        title: "Set up your online store",
        description: "Connect KR Customizer to Shopify, Etsy, WooCommerce, or your favourite platform, all with seamless integration.",
        from: "#fee2e2", to: "#fff1f2", border: "#fca5a5", num: "#ef4444",
        image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1773900943/ChatGPT_Image_Mar_9_2026_09_22_03_PM_1_bahbax.png",
    },
    {
        number: "03",
        title: "Add Products & Billings",
        description: "Once your designs are ready, add products to your store. Set prices the way you want — simple and clear in Canadian dollars.",
        from: "#ede9fe", to: "#f5f3ff", border: "#c4b5fd", num: "#8b5cf6",
        image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1773900943/ChatGPT_Image_Mar_9_2026_09_18_09_PM_1_njjmm3.png",
    },
    {
        number: "04",
        title: "Launch and Sell",
        description: "Order samples, check quality, then go live. From printing to shipping — KR Customizer handles all fulfillment for you.",
        from: "#fef9c3", to: "#fffbeb", border: "#fde68a", num: "#d97706",
        image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1773900943/ChatGPT_Image_Mar_9_2026_09_22_03_PM_1_bahbax.png",
    },
];

const N = steps.length;
const CARD_H = 126;
const GAP = 14;
const STRIDE = CARD_H + GAP;
const slotY = (slot) => slot * STRIDE;

const cardAtSlot = (slot, off) => (slot + off) % N;
const slotOfCard = (idx, off) => ((idx - off) % N + N) % N;

export default function HowItWorks() {
    const cardRefs = useRef([]);
    const sectionRef = useRef(null);
    const busy = useRef(false);
    const offset = useRef(0);
    // These track sequence boundaries so we know when to release scroll to page
    const atStart = useRef(true);
    const atEnd = useRef(false);

    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        cardRefs.current.forEach((el, i) => {
            gsap.set(el, { y: slotY(slotOfCard(i, 0)) });
        });
    }, []);

   const rotateTo = useCallback((newOff, dir) => {
  if (busy.current) return;
  busy.current = true;

  const tl = gsap.timeline({
    onComplete: () => {
      busy.current = false;
      offset.current = newOff;
      atStart.current = newOff === 0;
      atEnd.current = newOff === N - 1;
    },
  });

  cardRefs.current.forEach((el, cardIdx) => {
    if (!el) return;

    const fromSlot = slotOfCard(cardIdx, offset.current);
    const toSlot = slotOfCard(cardIdx, newOff);

    if (fromSlot === toSlot) return;

    const toY = slotY(toSlot);

    const wrapsDown = dir > 0 && fromSlot === 0 && toSlot === N - 1;
    const wrapsUp = dir < 0 && fromSlot === N - 1 && toSlot === 0;

    if (wrapsDown) {
      // top → goes up → comes from bottom
      tl.to(el, { y: -STRIDE, duration: 0.25, ease: "power2.in" }, 0)
        .set(el, { y: slotY(N) })
        .to(el, { y: toY, duration: 0.35, ease: "power3.out" }, 0.25);

    } else if (wrapsUp) {
      // bottom → goes down → comes from top
      tl.to(el, { y: slotY(N), duration: 0.25, ease: "power2.in" }, 0)
        .set(el, { y: -STRIDE })
        .to(el, { y: toY, duration: 0.35, ease: "power3.out" }, 0.25);

    } else {
      // normal movement
      tl.to(el, {
        y: toY,
        duration: 0.42,
        ease: "power3.inOut",
      }, 0);
    }
  });

  setActiveCard(cardAtSlot(0, newOff));
}, []);

    // ── Wheel: attached to window (non-passive) so preventDefault always works ──
    useEffect(() => {
        const THROTTLE = 650; // slightly longer than animation so it feels intentional
        let lastFire = 0;

        const isInView = () => {
            const rect = sectionRef.current?.getBoundingClientRect();
            return rect && rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
        };

        const onWheel = (e) => {
            if (!isInView()) return; // section not centred — let page scroll freely

            const dir = e.deltaY >= 0 ? 1 : -1;

            // Already at boundary in that direction → release scroll to page
            if (dir < 0 && atStart.current) return;
            if (dir > 0 && atEnd.current) return;

            // Mid-sequence: block native scroll unconditionally
            e.preventDefault();

            if (busy.current) return;
            const now = Date.now();
            if (now - lastFire < THROTTLE) return;
            lastFire = now;

            const next = ((offset.current + dir) % N + N) % N;
            rotateTo(next, dir);
        };

        // window-level + non-passive so preventDefault is honoured in all browsers
        window.addEventListener("wheel", onWheel, { passive: false });
        return () => window.removeEventListener("wheel", onWheel);
    }, [rotateTo]);

    // ── Touch ────────────────────────────────────────────────────────────────
    useEffect(() => {
        let startY = 0;
        let blocked = false;

        const onStart = (e) => {
            startY = e.touches[0].clientY;
            blocked = false;
        };

        const onMove = (e) => {
            const dy = startY - e.touches[0].clientY;
            const dir = dy > 0 ? 1 : -1;
            if (Math.abs(dy) > 8) {
                const midSequence = (dir > 0 && !atEnd.current) || (dir < 0 && !atStart.current);
                if (midSequence) { e.preventDefault(); blocked = true; }
            }
        };

        const onEnd = (e) => {
            if (!blocked) return;
            const dy = startY - e.changedTouches[0].clientY;
            if (Math.abs(dy) < 40) return;
            const dir = dy > 0 ? 1 : -1;
            const next = ((offset.current + dir) % N + N) % N;
            rotateTo(next, dir);
        };

        const el = sectionRef.current;
        el?.addEventListener("touchstart", onStart, { passive: true });
        el?.addEventListener("touchmove", onMove, { passive: false });
        el?.addEventListener("touchend", onEnd, { passive: true });
        return () => {
            el?.removeEventListener("touchstart", onStart);
            el?.removeEventListener("touchmove", onMove);
            el?.removeEventListener("touchend", onEnd);
        };
    }, [rotateTo]);

    const goTo = (target) => {
        if (target === offset.current || busy.current) return;
        const dir = ((target - offset.current + N) % N) <= N / 2 ? 1 : -1;
        rotateTo(target, dir);
    };

    const active = steps[activeCard];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        .hiw * { font-family: 'Plus Jakarta Sans', sans-serif; }
        .card-el { box-shadow: 0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04); }
        .img-layer { transition: opacity 0.6s cubic-bezier(.4,0,.2,1); }
        .pill { transition: width 0.3s ease, background 0.3s ease; }
      `}</style>

            <section ref={sectionRef} className="hiw w-full bg-[#F6F5F2] flex items-center">
                <div className="max-w-5xl mx-auto w-full px-5 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT */}
                    <div className="flex flex-col gap-6">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: active.num }}>
                            <span className="w-5 h-px" style={{ background: active.num }} />
                            Getting Started
                        </span>

                        <div>
                            <h2 className="text-3xl md:text-[2.25rem] font-black text-[#111827] leading-tight">
                                How to Start Your{" "}
                                <span style={{ color: "#10b981" }}>Print-on-Demand</span>
                                {" "}Business in Canada?
                            </h2>
                            <p className="mt-3 text-[#6b7280] text-sm leading-relaxed max-w-xs">
                                Everything you need to know to start and grow your POD business in the Canadian market.
                            </p>
                        </div>

                        <div
                            className="relative w-full max-w-[340px] aspect-square rounded-[28px] overflow-hidden"
                            style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.14)" }}
                        >
                            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                                <svg viewBox="0 0 100 80" className="w-[80%] opacity-[0.06]" fill="#ef4444">
                                    <path d="M50 4 L57 28 L80 18 L68 38 L95 43 L72 53 L79 78 L55 63 L50 92 L45 63 L21 78 L28 53 L5 43 L32 38 L20 18 L43 28 Z" />
                                </svg>
                            </div>

                            {steps.map((s, i) => (
                                <img key={i} src={s.image} alt={s.title}
                                    className="img-layer absolute inset-0 w-full h-full object-cover"
                                    style={{ opacity: activeCard === i ? 1 : 0 }}
                                />
                            ))}

                            <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-lg">
                                <span className="text-2xl font-black" style={{ color: active.num }}>{active.number}</span>
                                <span className="text-[11px] font-semibold text-[#374151] leading-tight max-w-[110px]">{active.title}</span>
                            </div>
                            <div className="absolute top-0 left-0 right-0 h-1 z-20" style={{ background: active.num, transition: "background 0.5s" }} />
                        </div>

                        <div className="flex items-center gap-2.5">
                            {steps.map((s, i) => (
                                <button key={i} onClick={() => goTo(i)}
                                    className="pill rounded-full h-2.5 cursor-pointer border-0 p-0"
                                    style={{ width: activeCard === i ? 26 : 10, background: activeCard === i ? s.num : "#d1d5db" }}
                                />
                            ))}
                            <span className="ml-1 text-[11px] font-medium text-[#9ca3af] flex items-center gap-1">
                                Scroll to explore
                                <svg className="w-3 h-3 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative select-none" style={{ height: STRIDE * N - GAP }}>
                        {steps.map((step, i) => (
                            <div key={i}
                                ref={(el) => (cardRefs.current[i] = el)}
                                onClick={() => goTo(i)}
                                className="card-el absolute left-0 w-full rounded-2xl px-5 py-4 flex gap-4 items-start cursor-pointer"
                                style={{
                                    height: CARD_H, top: 0,
                                    background: `linear-gradient(135deg, ${step.from}, ${step.to})`,
                                    border: `1.5px solid ${step.border}`,
                                    willChange: "transform, opacity",
                                }}
                            >
                                <span className="text-[3rem] font-black leading-none shrink-0" style={{ color: step.num }}>
                                    {step.number}
                                </span>
                                <div className="overflow-hidden pt-0.5">
                                    <h3 className="font-bold text-[#111827] text-[14.5px] mb-1 leading-snug">{step.title}</h3>
                                    <p className="text-[#4b5563] text-[12.5px] leading-snug line-clamp-3">{step.description}</p>
                                </div>
                                <div className="absolute top-3.5 right-4 w-2 h-2 rounded-full opacity-50" style={{ background: step.num }} />
                            </div>
                        ))}

                        <div className="absolute -right-5 top-0 bottom-0 flex flex-col items-center justify-center gap-1.5 opacity-30 pointer-events-none">
                            {[8, 14, 22, 14, 8].map((h, i) => (
                                <div key={i} className="w-0.5 rounded-full bg-gray-500" style={{ height: h }} />
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}