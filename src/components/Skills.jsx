import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const skills = [
  {
    name: "React",
    level: "Advanced",
    projects: 5,
  },
  {
    name: "Node.js",
    level: "Advanced",
    projects: 4,
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    projects: 4,
  },
  {
    name: "Python",
    level: "Advanced",
    projects: 8,
  },
  {
    name: "Java",
    level: "Intermediate",
    projects: 3,
  },
  {
    name: "Tailwind",
    level: "Advanced",
    projects: 5,
  },
  {
    name: "Express",
    level: "Intermediate",
    projects: 4,
  },
  {
    name: "Git",
    level: "Advanced",
    projects: 20,
  },
  {
    name: "Firebase",
    level: "Intermediate",
    projects: 2,
  },
  {
    name: "AI",
    level: "Advanced",
    projects: 10,
  },
];

export default function Skills() {
  return (
    <SectionReveal>
    <section className="py-32 px-20 relative overflow-hidden">

      {/* Background Text */}

      <h1 className="absolute right-10 top-35 text-[140px] font-black text-gray-100 select-none pointer-events-none">
        SKILLS
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="uppercase tracking-[5px] text-gray-400"
      >
        WHAT I BUILD WITH
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        className="text-7xl font-bold mt-4"
      >
        Technology.
        <br />
        Creativity.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .2 }}
        viewport={{ once: true }}
        className="text-gray-500 text-xl mt-8 max-w-xl leading-relaxed"
      >
        I enjoy building full stack applications,
        AI automations and startup products
        that solve real world problems.
      </motion.p>

      {/* Skills */}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

        {skills.map((item, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 60,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: index * .08,
            }}

            whileHover={{
              y: -10,
              scale: 1.03,
            }}

            className="group border rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl duration-300 cursor-pointer"
          >

            <div className="flex justify-between items-center">

              <h3 className="text-3xl font-bold group-hover:translate-x-1 duration-300">
                {item.name}
              </h3>

              <div className="text-3xl">
                →
              </div>

            </div>

            <div className="mt-8">

              <p className="text-gray-400 uppercase tracking-[3px] text-sm">
                LEVEL
              </p>

              <p className="text-xl font-semibold mt-2">
                {item.level}
              </p>

            </div>

            <div className="mt-8">

              <p className="text-gray-400 uppercase tracking-[3px] text-sm">
                PROJECTS
              </p>

              <p className="text-xl font-semibold mt-2">
                {item.projects}+
              </p>

            </div>

            <motion.div
              className="mt-8 h-[3px] bg-black origin-left"
              initial={{
                scaleX: 0,
              }}

              whileHover={{
                scaleX: 1,
              }}

              transition={{
                duration: .4,
              }}
            />

          </motion.div>

        ))}

      </div>

      {/* Bottom */}

      <motion.div

        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        viewport={{
          once: true,
        }}

        className="mt-20 text-center"
      >

        <p className="text-gray-500 text-xl">

          I don't chase technologies.

        </p>

        <h3 className="text-5xl font-bold mt-4">

          I build solutions.

        </h3>

      </motion.div>

    </section>
    </SectionReveal>
  );
}