import Image from "next/image";

const PodSection = () => {
  const personImg =
    "https://res.cloudinary.com/daup99ghe/image/upload/v1773751574/What_is_Print_on_Demand_shtoqz.png";
  const circlebg =
    "https://res.cloudinary.com/daup99ghe/image/upload/v1773819165/Ellipse_2609_2_bguaqg.png";

  return (
    <section className="max-w-[1720px] mx-auto bg-[#FEFEFE]  rounded-t-[30px] lg:rounded-t-[40px] overflow-hidden">
      <div className="max-w-8xl mx-auto md:px-20 grid grid-cols-1 lg:grid-cols-2 justify-centre items-center ">
        {/* LEFT CONTENT */}
        <div className="max-w-[90%] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[620px] mx-auto lg:mx-0">
          <h2 className="text-[25px] md:text-[32px] lg:text-[38px] leading-[1.2] tracking-[-0.02em] font-[500] text-[#0B1228] mb-4">
            What is Print on Demand?
          </h2>

          <h3 className="text-[16px] md:text-[20px] lg:text-[22px] leading-[1.4] font-[400] text-[#655615] mb-5 md:mb-6">
            Your <span className="font-[550]">Brand</span>, Your{" "}
            <span className="font-[550]">Designs</span>, Zero{" "}
            <span className="font-[550]">Inventory</span>
          </h3>

          <p className=" text-[14px] md:text-[22px] lg:text-[22px] lg:max-w-[580px] leading-[1.5] tracking-wide text-[#180F4F] mb-8">
            Print on Demand is a smart e-commerce model where you sell
            custom-designed products, from t-shirts to mugs, and KR Customizer
            prints and ships them only after someone orders. That means no stock
            to manage, no high upfront costs, and full control over<br/>your brand.
          </p>

          <button className="bg-[#FDE105] hover:bg-[#fff] border-[#fde105] border hover:border-[#655615]  text-[#180F4F] font-semibold px-6 md:px-8 py-3 md:py-4 rounded-md text-[14px] md:text-[16px]">
            GET STARTED FREE
          </button>
        </div>

        <div className="flex justify-center items-center relative">

  <div className=" relative w-full max-w-[260px] md:max-w-[380px] lg:max-w-[500px] aspect-square">

    {/* Background circle */}
    <Image
      src={circlebg}
      alt="Circle Background"
      fill
      className="object-contain"
    />

    {/* Person image */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[85%] h-[85%]">
        <Image
          src={personImg}
          alt="What is Print on Demand?"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>

  </div>

</div>
        </div>
      
    </section>
  );
};

export default PodSection;