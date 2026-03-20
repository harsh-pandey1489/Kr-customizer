"use client"
import React from 'react';

const FeatureBoxes = () => {
  const features = [
    {
      id: 1,
      title: "Take Your Products to the Next Level with KR Customizer",
      text: "Don't limit your ideas. KR Customizer gives you more ways\nto create. From basic prints to embroidery and all-over\ndesigns, you can turn your vision into real products. Try\ndifferent styles. Stand out from the crowd. Build something\nthat feels truly yours.",
      imagePosition: "right",
      bgColor: "#FAFAFA",
      textClass: "w-full lg:w-[560px] h-auto lg:h-[264px]"
    },
    {
      id: 2,
      title: "Your Market, Your Choice:\nLocal or Global",
      text: "You decide where to sell your products. Focus on Canada for fast delivery and no customs fees, so your customers get their orders quickly. Or take your business global and reach buyers all over the world using our reliable fulfillment network. You don't have to take tension about logistics because KR Customizer handles printing, packing, and shipping. You just create, sell, and grow your brand with ease.",
      imagePosition: "left",
      bgColor: "bg-[#FFF7FF]",
      textClass: "w-full min-h-[180px] lg:w-[580px] h-auto lg:h-[324px] px-2 lg:px-0"
    },
    {
      id: 3,
      title: "Connect Your Store to Shopify, WooCommerce, BigCommerce & More in Canada",
      text: "KR Customizer makes running your store simple. You can connect it to Shopify, Etsy, WooCommerce, BigCommerce and more. All orders sync automatically. No manual work. No mistakes. Whether you sell in Toronto, Ontario, or nearby cities, your customers get fast, reliable shipping. These interfaces simplify corporate management and save time. You can concentrate on design and sales. Whether your customers are across Canada or worldwide, everything stays organized in one place. Setting up your store is quick. Running it is stress-free. With KR Customizer, managing your online shop has never been this simple.",
      imagePosition: "right",
      bgColor: "#FAFAFA",
      textClass: "w-full lg:w-[734px] h-auto lg:h-[446px] mt-7"
    },
    {
      id: 4,
      title: "Start Selling Custom\nProducts Across Canada",
      text: "Want to start a Canadian print-on-demand business? Not as hard as you think. Our services include shipping, fulfillment, and taxes. Grow your brand with smart pricing and promotion. Focus on product creation. We handle logistics. Selling online has never been easier.",
      imagePosition: "left",
      bgColor: "bg-[#FFF7FF]",
      textClass: "w-full lg:w-[560px] h-auto lg:h-[274px] lg:mt-20 "
    }
  ];

  return (
    <div className="max-w-8xl mx-auto flex-col ">
      <div className='max-w-8xl mx-auto '>
        {features.map((feature, index) => (
          <div key={feature.id} className={`${feature.bgColor.startsWith('bg-') ? feature.bgColor : `bg-[${feature.bgColor}]`} ${index === 0 ? 'w-full h-[430px]' : 'w-full'} py-6 md:py-10 lg:py-14 px-4 md:px-8 lg:px-24 flex items-center justify-center overflow-hidden`}>

            <div className={`w-full max-w-7xl flex flex-col gap-10 lg:gap-30 items-start justify-between ${feature.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

           
              <div className={`flex flex-col justify-center ${feature.textClass} break-words`}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-medium text-[#0B1228] whitespace-pre-line leading-tight break-all w-full">
                  {feature.title}
                </h2>
                <p className="text-[#20282C] text-sm md:text-base lg:text-[20.1px] mb-6 leading-relaxed whitespace-pre-line break-words">
                  {feature.text}
                </p>
              </div>

              
              <div className={`w-full lg:w-1/2 flex justify-center lg:justify-end ${index === 0 || index === 2 ? 'lg:mt-0' : ''}`}>
                <div className={` ${index === 0 ? "w-full max-w-[518px] h-auto lg:h-[302px] min-h-[302px] rounded-[16px] mt-[-20px] " : index === 1 ? "w-full max-w-[518px] h-auto lg:h-[302px] min-h-[302px] rounded-[16px] mr-28 mt-8" : index === 2 ? "w-full max-w-[518px] h-auto lg:h-[460px] min-h-[460px] rounded-[16px] " : "w-full max-w-[540px] h-auto lg:h-[290px] min-h-[290px] rounded-xl mr-17 mt-19"} bg-[#D9D9D9] flex items-center justify-center`}>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBoxes;