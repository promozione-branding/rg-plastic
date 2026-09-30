"use client";

export default function CompanyStats() {
  const stats = [
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "500+",
      label: "Machines Supplied",
    },
    {
      number: "100+",
      label: "Happy Clients",
    },
    {
      number: "25+",
      label: "Product Solutions",
    },
  ];

  return (
    <section className="bg-white py-6 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* INTRO */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[17px] leading-[1.55] text-[#222] sm:text-[20px] lg:text-[22px]">
            <span>
              R G Plastics Machinery is one of the leading manufacturers and
              service providers of{" "}
            </span>

            <span className="text-[#1261A0]">
              Plastic Granules Making Machines, Scrap Grinder Machines
            </span>

            <span>
              {" "}and other plastic processing machinery. We have installed
              hi-tech machinery and tools at our production section that
              enables us to manufacture world-class products. Our dedicated
              approach to business has helped us cater to clients in the best
              possible manner.
            </span>
          </p>

          <p className="mt-1 text-[17px] leading-[1.55] text-gray-400 sm:text-[20px] lg:text-[22px]">
            We ensure that the products dispatched from our end are
            faultless and defect-free, offering high strength, durability,
            longer service life and reliable performance at
            budget-friendly prices.
          </p>
        </div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-2 gap-y-10 sm:mt-16 sm:grid-cols-4 sm:gap-y-0">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                index !== 0
                  ? "sm:border-l sm:border-gray-200"
                  : ""
              }`}
            >
              <div className="text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl lg:text-[52px]">
                {stat.number}
              </div>

              <div className="mt-2 text-xs font-medium text-gray-600 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}