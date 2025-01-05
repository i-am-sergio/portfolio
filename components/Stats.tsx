"use client";

import Countup from "react-countup";

const stats = [
  {
    num: 5,
    text: "Years of Experience",
  },
  {
    num: 30,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 3000,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6 max-w-[80vw] mx-auto xl:max-w-none xl:flex xl:flex-wrap">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <Countup
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 text-sm xl:text-lg`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
