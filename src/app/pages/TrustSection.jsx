import React from 'react';

const TrustSection = () => {


  const features = [
    {
      id: 1,
      title: "High-Quality Products",
      desc: "We focus on quality from the start. Products are made using good materials and reliable print methods. Your designs look clean, sharp, and professional.",
      svg: (
        <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773819897/Group_1171280763_qxtatm.png" alt="High-Quality Products" className="w-12 h-12 mb-4 object-contain" />
      )
    },
    {
      id: 2,
      title: "Fast, Local Shipping",
      desc: "Orders are shipped from within Canada. This means faster delivery and happier customers. No long waits or delays.",
      svg: (
        <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773819897/icon-2.8247c78f_1_ky6run.png" alt="Fast, Local Shipping" className="w-12 h-12 mb-4 object-contain" />
      )
    },
    {
      id: 3,
      title: "Less Waste, No Extra Stock",
      desc: "Products are made only after a sale happens. Nothing sits in storage. Nothing goes to waste.",
      svg: (
        <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773819897/Group_1171280766_hzmfkq.png" alt="Less Waste, No Extra Stock" className="w-12 h-12 mb-4 object-contain" />
      )
    },
    {
      id: 4,
      title: "No Minimum Orders",
      desc: "Sell one item or sell in bulk. There are no limits. You can start small with zero risk.",
      svg: (
        <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773819897/Group_1171280763_qxtatm.png" alt="No Minimum Orders" className="w-12 h-12 mb-4 object-contain" />
      )
    },
    {
      id: 5,
      title: "No Setup Fees",
      desc: "Signing up is free. Designing products is free. Connecting your store is free. You pay only when you make a sale.",
      svg: (
        <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773819897/icon-2.8247c78f_1_ky6run.png" alt="No Setup Fees" className="w-12 h-12 mb-4 object-contain" />
      )
    }
  ];

  return (
    <div className="bg-[#FFF7FF] py-12 md:py-20 px-4 md:px-12 lg:px-24 xl:px-32 w-full flex justify-center">
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-8 md:mb-16 text-[#0B1228]">
          Why More Canadian Brands Trust KR Customizer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col items-start px-2 sm:px-6
                 lg:px-10
                ${index !== 2 ? 'lg:border-r border-[#655615]' : ''}
                ${index === 0 ? 'md:border-r border-[#655615]' : ''}
              `}
            >
              {feature.svg}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3 text-[#15202E]">
                {feature.title}
              </h3>
              <p className="text-[#15202E] text-sm md:text-base lg:text-[23px] leading-relaxed mt-3">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 mt-12 lg:mt-16 lg:w-2/3 mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col items-start px-2 sm:px-6 lg:px-10
                
   ${index !== 2 ? 'lg:border-r border-[#655615]' : ''}
                ${index === 0 ? 'md:border-r border-[#655615]' : ''}
              `}
            >
              {feature.svg}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3 text-[#15202E]">
                {feature.title}
              </h3>
              <p className="text-[#15202E] text-sm md:text-base lg:text-[23px] leading-relaxed mt-3">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
