import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const journey = [
  {
    year: "2025",
    title: "Started Engineering",
    desc: "Began Computer Science journey and explored programming.",
    status: "Foundation",
  },

  {
    year: "2026",
    title: "Built Startup Projects",
    desc: "Created GigMitra, Prompt Spark Hub and Maa Ka Khana.",
    status: "Building",
  },

  {
    year: "2027",
    title: "AI & Full Stack Development",
    desc: "Focused on scalable products, AI automation and web apps.",
    status: "Current",
  },

  {
    year: "Next",
    title: "Software Engineer & Founder",
    desc: "Building impactful products used by thousands.",
    status: "Future",
  },
];

export default function Journey() {
  return (
    <SectionReveal>
    <section className="relative py-32 px-20 overflow-hidden">

      {/* Background Text */}

      <h1 className="absolute right-0 top-0 text-[160px] font-black text-gray-100 pointer-events-none select-none">
        JOURNEY
      </h1>

      <p className="uppercase tracking-[6px] text-gray-400 mb-4 mt-6">
        My Path
      </p>

      <h2 className="text-7xl font-bold mb-15">
        Building one step at a time.
      </h2>

      <div>

        {journey.map((item, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="group border-b py-7"
          >

            <div className="grid grid-cols-12 items-center">

              {/* YEAR */}

              <div className="col-span-2">

                <p className="text-3xl font-bold text-gray-300 group-hover:text-black duration-300">
                  {item.year}
                </p>

              </div>

              {/* CONTENT */}

              <div className="col-span-7">

                <h3 className="text-3xl font-bold group-hover:translate-x-3 duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-3 max-w-xl">
                  {item.desc}
                </p>

              </div>

              {/* RIGHT */}

              <div className="col-span-3 flex justify-end items-center gap-5">

                <span
                  className="
                  border
                  rounded-full
                  px-5
                  py-2
                  text-sm
                  uppercase
                  tracking-widest
                  group-hover:bg-black
                  group-hover:text-white
                  duration-300
                  "
                >
                  {item.status}
                </span>

                <motion.span
                  animate={{
                    x: [0, 8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="text-3xl"
                >
                  →
                </motion.span>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Bottom Quote */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
        className="mt-28 text-center"
      >

        <p className="text-gray-500 text-2xl mb-5">
          Every project teaches something new.
        </p>

        <h2 className="text-7xl font-black">
          Build.
          <br />
          Learn.
          <br />
          Repeat.
        </h2>

      </motion.div>

    </section>
    </SectionReveal>
  );
}