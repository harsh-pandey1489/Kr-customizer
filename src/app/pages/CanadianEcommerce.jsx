"use client";
import Image from "next/image";

export default function CanadianEcommerce() {
  return (
    <section className="max-w-[1720px] mx-auto bg-[#FAFAFA] py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <h3 className="text-xl md:text-3xl md:w-[500px] font-[500] text-center  leading-relaxed text-[#101010]">
          Rule the Canadian eCommerce Market with KRCustomizer
        </h3>
        <div className="bg-[#FFFFFF] max-w-[1200px] rounded-4xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 ">

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="https://res.cloudinary.com/dumjuhrob/image/upload/v1773814749/Rule_the_Canadian_eCommerce_Market_with_KRCustomizer_puppeh.png" // put inside public folder
              alt="Rule_the_Canadian_eCommerce_Market_with_KRCustomizer_puppeh"
              width={540}
              height={400}
              className="object-contain"
            />
          </div>


          <div className="w-full md:w-1/2 flex flex-col gap-4 ">

            <h3 className="text-xl md:text-[32px]  font-[500] leading-snug text-[#101010]">
              Big Ideas. Small Ideas. We Handle Them All.
            </h3>

            <p className=" xl:text-[24px] text-sm md:text-base text-[#180F4F] leading-8 mt-2 pr-2">
              KR Customizer helps you sell custom clothing and products without the hassle. You design. We print. We ship. Quality stays high. Every time. No matter the size of your business. Ready to sell custom products across Canada? You’re in the right place.
            </p>

          </div>
        </div>


     <div className="bg-[#FFFFFF] w-full max-w-[1200px] mx-auto rounded-4xl p-6 md:p-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10">

          <div className="w-full md:w-1/2 flex flex-col gap-3  ">

            <h3 className="text-xl md:text-[32px] font-[500] leading-snug text-[#101010] md:mb-3">
              Made in Canada. Built for Canada.
            </h3>

            <p className="xl:text-[24px] md:text-base text-[#180F4F] leading-8 tracking-tight  max-w-[500px] ">
              Serving Ontario, Toronto, and beyond. Our fulfillment centre in Ontario keeps things fast and smooth. Orders reach customers across Canada quickly — including Toronto and nearby cities. No surprise customs. No hidden duty fees. Just clean, reliable delivery. Every product goes through a strict quality check before shipping. So what your customers receive? Always top-notch.
            </p>

          </div>


          <div className="w-full md:w-1/2 flex justify-center md:mt-0">
            <Image
              src="https://res.cloudinary.com/dumjuhrob/image/upload/v1773814815/Made_in_Canada._Built_for_Canada._txqha6.png"
              alt="Made_in_Canada._Built_for_Canada"
              width={540}
              height={400}
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}