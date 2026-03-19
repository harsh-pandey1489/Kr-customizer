"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const array = [
    {
        tiltle: "Design your products",
        color: "#26C26B",
        image: "https://res.cloudinary.com/dumjuhrob/image/upload/v1773747770/how_to_start_your_print-on-demand_buisness_in_canada_gfaaql.png",
        Numcolor: "text-[#1D8633]",
        boxHeight: "h-[150px]",
        description: "Upload your art or use our intuitive design tools to make standout products your audience will love."

    },
    {
        tiltle: "Set up your online store",
        color: "#FF6B6B",
        image: "https://res.cloudinary.com/dumjuhrob/image/upload/v1773811032/How_to_Start_Your_Print_on-Demand_Business_in_Canada2_nu1did.png",
        Numcolor: "text-[#D24023]",
        boxHeight: "h-[150px]",
        description: "Connect KR Customizer to Shopify, Etsy, WooCommerce, or your favourite platform, all with seamless integration."

    },
    {
        tiltle: "Add Products & Billings",
        color: "#2C1DFF",
        image: "https://res.cloudinary.com/dumjuhrob/image/upload/v1773747770/how_to_start_your_print-on-demand_buisness_in_canada_gfaaql.png",
        Numcolor: "text-[#8E4EC6]",
        boxHeight: "h-[180px]",
        description: "Once your designs are ready, add the products to your store. Set your prices the way you want. Everything stays simple and clear in Canadian dollars. No complicated steps. No confusion."

    },
    {
        tiltle: "Launch and Sell",
        color: "#E3C901",
        image: "https://res.cloudinary.com/dumjuhrob/image/upload/v1773811032/How_to_Start_Your_Print_on-Demand_Business_in_Canada2_nu1did.png",
        Numcolor: "text-[#655615]",
        boxHeight: "h-[180px]",
        description: "Before going live, you can order samples to check the print and quality yourself. When you’re happy, launch your store. Start selling to your customers. From printing to packing and shipping, KR Customizer handles the fulfillment for you."

    },

]

export default function StepsSection() {

    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const tlRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        const totalSteps = array.length - 1;
        const progress = index / totalSteps;

        gsap.to(tlRef.current, {
            progress: progress,
            duration: 1,
            ease: "power2.out",
        });

        setActiveIndex(index);
    };
    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            cards.forEach((card, i) => {
                gsap.set(card, {
                    scale: i === 0 ? 1 : 0.9,
                    opacity: i === 0 ? 1 : 0.4,
                    zIndex: cards.length - i,
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 15%",
                    end: "+=300%",
                    scrub: true,
                    pin: true,
                },
            });


            tlRef.current = tl;

            cards.forEach((card, i) => {
                if (i !== cards.length - 1) {

                    tl.to(card, {
                        scale: 0.85,
                        opacity: 0.4,
                        duration: 1,
                        onUpdate: function () {
                            if (this.progress() > 0.5) {
                                setActiveIndex(i + 1);
                            } else {
                                setActiveIndex(i);
                            }
                        }
                    });

                    tl.to(
                        cards[i + 1],
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                        },
                        "<"
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);



    return (
        <section ref={sectionRef} className="max-w-[1720px] mx-auto bg-[#FAFAFA] p-10">
            <div className="max-w-7xl mx-auto grid xl:grid-cols-2 md:grid-cols-1 gap-5">


                <div className="flex xl:block flex-col items-center w-full">
                    <h2 className="xl:text-3xl md:text-2xl text-xl xl:text-left text-center  font-[500] mb-4 mt-7 xl:w-[400px] text-[#0B1228] xl:leading-11">
                        How to Start Your Print-on-Demand Business in
                       
                        Canada?
                    </h2>
                    <p className="text-[#0B1228] xl:w-[450px] xl:text-left text-center xl:text-2xl mt-2 ">
                        Everything You Need to Know to Start and Grow Your POD Business in the Canadian Market
                    </p>
                    <Image
                        src={array[activeIndex].image}
                        width={500}
                        height={450}
                        className="xl:w-150 xl:h-120"
                        alt="how_to_start_your_print-on-demand_buisness_in_canada_gfaaql.png"
                    />
                </div>

                <div className="mt-4">
                    {array.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className={`p-6 rounded-xl shadow-md xl:w-[600px] xl:${item.boxHeight} cursor-pointer`}
                            style={{
                                backgroundColor: item.color + "1A",
                                border: `1px solid ${item.color}`,
                            }}
                        >
                            <div className="flex gap-4">
                                <p className={`xl:text-5xl text-2xl font-[500] ${item.Numcolor}`}>
                                    0{index + 1}
                                </p>

                                <div>
                                    <h3 className="xl:text-2xl text-sm  xl:font-[500] mb-2">
                                        {item.tiltle}
                                    </h3>
                                    <p className="text-[#15202E] xl:text-lg ">
                                        {item.description}
                                    </p>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}