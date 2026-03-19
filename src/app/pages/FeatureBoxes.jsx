"use client"
import React from 'react';
import Image from "next/image";
const FeatureBoxes = () => {
  const features = [
    {
      id: 1,
      title: "Take Your Products to the Next Level with KR Customizer",
      text: "Don't limit your ideas. KR Customizer gives you more ways\nto create. From basic prints to embroidery and all-over\ndesigns, you can turn your vision into real products. Try\ndifferent styles. Stand out from the crowd. Build something\nthat feels truly yours.",
      imagePosition: "right",
      bgColor: "#FAFAFA",
      image:"https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773919865/Group_1171282386_jwgyij.png"
   
      
      
    },
    {
      id: 2,
      title: "Your Market, Your Choice:\nLocal or Global",
      text: "You decide where to sell your products. Focus on Canada for fast delivery and no customs fees, so your customers get their orders quickly. Or take your business global and reach buyers all over the world using our reliable fulfillment network. You don't have to take tension about logistics because KR Customizer handles printing, packing, and shipping. You just create, sell, and grow your brand with ease.",
      imagePosition: "left",
      bgColor: "bg-[#FFF7FF]",
       image:"https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773917755/Gemini_Generated_Image_sazmn6sazmn6sazm_1_ueqecr.png"
    },
    {
      id: 3,
      title: "Connect Your Store to Shopify,  BigCommerce, WooCommerce & More in Canada",
      text: "KR Customizer makes running your store simple. You can connect it to Shopify, Etsy, WooCommerce, BigCommerce and more. All orders sync automatically. No manual work. No mistakes. Whether you sell in Toronto, Ontario, or nearby cities, your customers get fast, reliable shipping. These interfaces simplify corporate management and save time. You can concentrate on design and sales. Whether your customers are across Canada or worldwide, everything stays organized in one place. Setting up your store is quick. Running it is stress-free. With KR Customizer, managing your online shop has never been this simple.",
      imagePosition: "right",
      bgColor: "#FAFAFA",
       image:"https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773919864/Group_1171282382_agccba.png"
    },
    {
      id: 4,
      title: "Start Selling Custom\nProducts Across Canada",
      text: "Want to start a Canadian print-on-demand business? Not as hard as you think. Our services include shipping, fulfillment, and taxes. Grow your brand with smart pricing and promotion. Focus on product creation. We handle logistics. Selling online has never been easier.",
      imagePosition: "left",
      bgColor: "bg-[#FFF7FF]",
       image:"https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773919868/Gemini_Generated_Image_sazmn6sazmn6sazm_1_xfv97y.png"
    
    }
  ];

  return (
    <div className="max-w-[1720px] mx-auto flex-col ">
      <div className='max-w-8xl mx-auto'>
        {features.map((feature, index) => (
          <div key={feature.id} className={`${feature.bgColor} w-full py-6 md:py-10 lg:py-14 px-4 md:px-8 lg:px-24 flex justify-center`}>
            <div className={`w-full max-w-7xl flex flex-col gap-10 lg:gap-20 items-center justify-between ${feature.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>


              <div className="w-full lg:w-1/2 flex flex-col justify-center ">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0B1228] ml-12   mb-4 mt-[-5px] whitespace-pre-line leading-tight" >
                  {feature.title}
                </h2>
                <p className={`text-[#20282C] ${index==2?"h-[446px] w-[625px] ":"max-w-[800px]"} mb-8 text-sm md:text-base lg:text-[20.1px] ml-12 leading-relaxed whitespace-pre-line ml-5`}>
                  {feature.text}
                </p>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className={`relative ${index == 2 ? "w-[550px] h-[400px]" : "w-[600px] h-[350px] bg-white"} bg-[#D9D9D9] rounded-xl flex items-center justify-center`}>
                <Image
                src={feature.image}
                alt={feature.title}
                fill
                />
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
