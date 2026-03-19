"use client"
import React from 'react'

import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <section className="max-w-[1720px] mx-auto bg-[#FFF7FF] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-2xl md:text-4xl max-w-[550px] font-[500] text-[#0B1228] leading-snug mb-6">
            Why Choose KR Customizer for 
            Print on Demand in Canada?
          </h2>

          <p className="text-[#20282C] text-sm md:text-[20px] leading-relaxed mb-4">
            Starting a print-on-demand business in Canada can feel confusing. KR Customizer makes it easier. You don’t have to buy products in advance. There’s no inventory sitting around. Items are made only after someone places an order. That means less risk and less stress.
            We focus on serving Canadian sellers. Orders are fulfilled locally, so customers get their products faster. No long waits. No unnecessary delays. Pricing is simple, too. There are no setup fees and no monthly plans. You pay only when you actually sell something.
          </p>

          <p className="text-[#20282C] text-sm md:text-[20px] leading-relaxed">
          With reliable print quality and smooth shipping, KR Customizer lets you focus on your designs and marketing. We handle the rest, quietly in the background.
          </p>
        </div>


        <div className="relative flex justify-center items-center xl:ml-20">


          <Image
            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1773813536/Ellipse_2610_drid65.png"
            width={500}
            height={500}
            className='object-contain absolute' />

          <Image
            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1773768309/Why_Choose_KR_Customizer_for_Print_on_Demand_in_Canada_dqd4e0.png" // 🔥 replace with your image
            alt="product"
            width={400}
            height={550}
            className="object-contain relative"
          />




        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
