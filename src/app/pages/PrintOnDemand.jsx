import React from 'react';



const cardData = [
	{
		icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773767678/blog_1_bolmcq.png",
		title: 'For Creators',
		description:
			'Creators can turn their ideas into real products. No need to take tension about printing or shipping. Just create and sell. The rest is handled for you.',
		button: 'START SELLING YOUR DESIGNS',
	},
	{
		icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773767677/briefcase_4_lkmtch.png",
		title: 'For Small & Medium Businesses',
		description:
			"Small and medium businesses can grow without pressure. You don't have to store products or manage stock. Custom items are made only when someone orders. It keeps things simple and stress-free.",
		button: 'START YOUR STORE TODAY',
	},
	{
		icon: 'https://res.cloudinary.com/dlzxiy0tl/image/upload/v1773767678/brand_1_1_qhzncn.png',
		title: 'For Large Brands',
		description:
			'Large brands can expand their product range easily. Quality stays consistent. Orders are handled smoothly. You can scale your business without slowing down.',
		button: 'SCALE YOUR BUSINESS NOW',
	},
];

const PrintOnDemand = () => {
	return (
		<div className="bg-[#FAFAFA] py-16 px-4 md:px-8 lg:px-12 min-h-screen flex flex-col justify-center items-center w-full">
			<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-12 text-[#0B1228]">
				Print-on-Demand for Creators,<br /> Businesses & Brands
			</h2>
			<div className="w-full max-w-7xl h-auto flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch bg-transparent mx-auto">
				{cardData.map((card, idx) => (
					<div
						key={idx}
						className="bg-[#FFFFFF] rounded-2xl shadow-md border border-gray-100 flex flex-col items-start p-6 md:p-8 w-full md:w-1/3 max-w-sm md:max-w-none shadow-md"
					>
						<img src={card.icon} alt={card.title} className="w-16 h-16 mb-6" />
						<h3 className="text-xl md:text-2xl font-medium tracking-[0.6px] mb-4 text-[#101010] w-full break-words">
							{card.title}
						</h3>
						<p className="text-[#180F4F] text-sm sm:text-base md:text-[17px] lg:text-[19.4px] leading-relaxed tracking-[0.8px] mb-8 flex-grow">
							{card.description}
						</p>
						<div className="w-full flex justify-center sm:justify-start">
							<button className="bg-[#FDE105] hover:bg-[#FFFFFF] text-[#180F4F] hover:text-[#000000]  font-bold w-full max-w-[260px] h-[50px] sm:h-[54px] flex items-center justify-center rounded-md text-xs sm:text-sm tracking-wide transition-colors">
								{card.button}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PrintOnDemand;