"use client"
import React from 'react';
import Image from "next/image";

const FeatureBoxes = () => {
  return (
    <div className="max-w-[1720px] mx-auto flex-col">
      <div className='w-full mx-auto'>

        {/* SECTION 1 */}
        <div className="bg-[#FAFAFA] w-full py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-20 flex justify-center">
          <div className="w-full max-w-7xl flex flex-col gap-8 lg:gap-20 items-center justify-between lg:flex-row">

            {/* TEXT */}
            <div className="w-full lg:w-[560px] flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#0B1228] mb-4 whitespace-pre-line leading-tight">
                Take Your Products to the Next Level with KR Customizer
              </h2>

              <p className="text-[#20282C] text-sm sm:text-base lg:text-lg xl:text-[20px] leading-relaxed whitespace-pre-line">
                {"Don't limit your ideas. KR Customizer gives you more ways\nto create. From basic prints to embroidery and all-over\ndesigns, you can turn your vision into real products. Try\ndifferent styles. Stand out from the crowd. Build something\nthat feels truly yours."}
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-full lg:w-[612px] flex justify-center lg:justify-end">
              <div className="relative w-full lg:w-[612px] aspect-[612/400]  rounded-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773919865/Group_1171282386_jwgyij.png"
                  alt="Feature 1"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 2 */}
        <div className="bg-[#FFF7FF] w-full py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-20 flex justify-center">
          <div className="w-full max-w-7xl flex flex-col gap-8 lg:gap-20 items-center justify-between lg:flex-row-reverse">

            <div className="w-full lg:w-[560px] flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#0B1228] mb-4 whitespace-pre-line leading-tight">
                {"Your Market, Your Choice:\nLocal or Global"}
              </h2>

              <p className="text-[#20282C] text-sm sm:text-base lg:text-lg xl:text-[20px] leading-relaxed whitespace-pre-line">
                {"You decide where to sell your products. Focus on Canada for fast delivery and no customs fees, so your customers get their orders quickly. Or take your business global and reach buyers all over the world using our reliable fulfillment network. You don't have to take tension about logistics because KR Customizer handles printing, packing, and shipping. You just create, sell, and grow your brand with ease."}
              </p>
            </div>

            <div className="w-full lg:w-[612px] flex justify-center lg:justify-end">
              <div className="relative w-full lg:w-[612px] aspect-[612/400] bg-[#D9D9D9] rounded-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773917755/Gemini_Generated_Image_sazmn6sazmn6sazm_1_ueqecr.png"
                  alt="Feature 2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 3 */}
        <div className="bg-[#FAFAFA] w-full py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-20 flex justify-center">
          <div className="w-full max-w-7xl flex flex-col gap-8 lg:gap-20 items-center justify-between lg:flex-row">

            <div className="w-full lg:w-[624px] flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#0B1228] mb-4 whitespace-pre-line leading-tight">
                Connect Your Store to Shopify, BigCommerce, WooCommerce & More in Canada
              </h2>

              <p className="text-[#20282C] text-sm sm:text-base lg:text-lg xl:text-[20px] leading-relaxed whitespace-pre-line">
                {"KR Customizer makes running your store simple. You can connect it to Shopify, Etsy, WooCommerce, BigCommerce and more. All orders sync automatically. No manual work. No mistakes. Whether you sell in Toronto, Ontario, or nearby cities, your customers get fast, reliable shipping. These interfaces simplify corporate management and save time. You can concentrate on design and sales. Whether your customers are across Canada or worldwide, everything stays organized in one place. Setting up your store is quick. Running it is stress-free. With KR Customizer, managing your online shop has never been this simple."}
              </p>
            </div>

            <div className="w-full lg:w-[518px] flex justify-center lg:justify-end">
              <div className="relative w-full lg:w-[518px] aspect-[412/400]  rounded-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773919864/Group_1171282382_agccba.png"
                  alt="Feature 3"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 4 */}
        <div className="bg-[#FFF7FF] w-full py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-20 flex justify-center">
          <div className="w-full max-w-7xl flex flex-col gap-8 lg:gap-20 items-center justify-between lg:flex-row-reverse">

            <div className="w-full lg:w-[560px] flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#0B1228] mb-4 whitespace-pre-line leading-tight">
                {"Start Selling Custom\nProducts Across Canada"}
              </h2>

              <p className="text-[#20282C] text-sm sm:text-base lg:text-lg xl:text-[20px] leading-relaxed whitespace-pre-line">
                {"Want to start a Canadian print-on-demand business? Not as hard as you think. Our services include shipping, fulfillment, and taxes. Grow your brand with smart pricing and promotion. Focus on product creation. We handle logistics. Selling online has never been easier."}
              </p>
            </div>

            <div className="w-full lg:w-[612px] flex justify-center lg:justify-end">
              <div className="relative w-full lg:w-[612px] aspect-[612/400]  rounded-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773919868/Gemini_Generated_Image_sazmn6sazmn6sazm_1_xfv97y.png"
                  alt="Feature 4"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureBoxes;