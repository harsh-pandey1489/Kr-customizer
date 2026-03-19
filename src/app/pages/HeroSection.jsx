import Image from 'next/image';

const HeroSection = () => {
    const mainCapUrl = "https://res.cloudinary.com/daup99ghe/image/upload/v1773751572/Print_on_Demand_in_Canada_-_your_store_your_way_with_KR_Customizer_n85e8z.png";
    const starIconUrl = "https://res.cloudinary.com/daup99ghe/image/upload/v1773752359/star_1_3_fpsple.png";
    const arrow = "https://res.cloudinary.com/daup99ghe/image/upload/v1773829787/arrow_riqbyp.png";
    const circlebg = "https://res.cloudinary.com/daup99ghe/image/upload/v1773819165/Ellipse_2609_3_pibmsd.png";
    return (
        <section className="relative max-w-[1720px] mx-auto bg-[#FFF7FF] overflow-hidden font-walsheim flex items-center">



            <div className="relative z-10 w-full  px-6 md:px-16 lg:px-[100px] grid grid-cols-1 lg:grid-cols-2  items-center py-10 ">

                
                <div className="flex flex-col ">
                    <h1 className="text-[30px] md:text-[30px] lg:text-[30px] font-[500] text-[#1A1A1A] leading-[1.2] md:leading-[1.45] tracking-tight mb-6">
                        Print on Demand in Canada - your store, <br className="hidden lg:block" />
                        your way with KR Customizer
                    </h1>

                    <p className="text-[16px] md:text-[19px] lg:text-[25px] text-[#180F4F] font-[400] leading-[1.5] mb-10 max-w-[520px]">
                        Create and sell custom products shipped fast and duty-free from right here in Canada
                    </p>

                    <ul className="flex flex-col gap-5 mb-10">
                        {['Trusted by thousands of sellers', 'Fast delivery across provinces', 'No inventory, no risk'].map((text, i) => (
                            <li key={i} className="flex items-center gap-4 text-[14px] md:text-[17px] lg:text-[21px] font-[400] text-[#180F4F]">
                                <div className="w-8 h-8 ">
                                    <Image src={starIconUrl} alt="star" width={35} height={35} className="object-contain" />
                                </div>
                                {text}
                            </li>
                        ))}
                    </ul>

                    <button className="flex items-center text-[11px] md:text-[13px] lg:text-[19px] bg-[#FDE105] hover:bg-[#fff]  border-[#fde105] border hover:border-[#655615] transition-transform active:scale-95 text-black font-[500] py-4 px-7 rounded-[4px] text-[18px] w-fit gap-6 md:mb-5">
                        Start Your Custom Store in Canada
                       <Image src={arrow} alt="arrow" width={28} height={28} className="object-contain" />
                    </button>
                </div>


                <div className="relative flex justify-center items-center mt-20 md:mt-0">

  {/* Background circle */}
  <div className="relative w-[260px] md:w-[410px] lg:w-[520px] aspect-square">
    <Image
      src={circlebg}
      alt="Circle Background"
      fill
      className="object-contain"
    />
  </div>

  {/* Cap image */}
  <div className="absolute w-[220px] md:w-[380px] lg:w-[480px] aspect-square">
    <Image
      src={mainCapUrl}
      alt="cap"
      fill
      priority
      className="object-contain"
    />
  </div>

</div>
            </div>

        </section>
    );
};

export default HeroSection;