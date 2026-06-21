import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <SectionReveal>
    <section className="relative py-30 px-20 overflow-hidden">

<h1 className="absolute right-12 top-0 text-[180px] font-black text-gray-100 pointer-events-none select-none">
        ABOUT
      </h1>
      <div className="relative z-10 grid grid-cols-2 gap-14">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[6px] text-gray-400">
            About Me
          </p>

          <h2 className="text-6xl font-black leading-tight mt-6">

            Building
            <br />

            products with
            <br />

            code and
            <br />

            creativity.

          </h2>

          {/* DETAILS */}

          <div className="mt-14 space-y-7">

            <div className="flex justify-between border-b pb-3">

              <span className="text-gray-400 uppercase tracking-[4px]">
                Education
              </span>

              <span className="font-semibold">
                2nd Year CSE
              </span>

            </div>

            <div className="flex justify-between border-b pb-3">

              <span className="text-gray-400 uppercase tracking-[4px]">
                Role
              </span>

              <span className="font-semibold">
                Full Stack Developer
              </span>

            </div>

            <div className="flex justify-between border-b pb-3">

              <span className="text-gray-400 uppercase tracking-[4px]">
                Focus
              </span>

              <span className="font-semibold">
                AI + Startups
              </span>

            </div>

            <div className="flex justify-between border-b pb-3">

              <span className="text-gray-400 uppercase tracking-[4px]">
                Location
              </span>

              <span className="font-semibold">
                Bangalore, India
              </span>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-2xl text-gray-600 pt-24 leading-[28px]">

            I'm Vivek Singaraddi, a Computer Science
            Engineering student and product-focused
            full stack developer.
            <br /><br />

            I enjoy building startups, AI automations,
            scalable web applications and digital
            products that solve practical problems.

            <br /><br />

            My goal is to combine technology,
            creativity and entrepreneurship to create
            impactful solutions used by real people.

          </p>

          {/* Philosophy */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-5"
          >

            <div className="w-20 h-[2px] bg-black mb-10"></div>

            <p className="uppercase tracking-[5px] text-gray-400">
              My Philosophy
            </p>

            <h3 className="text-4xl font-black mt-5 leading-[1.1]">

              Build.

              <br />

              Learn.

              <br />

              Ship.

              <br />

              Repeat.

            </h3>

          </motion.div>

        </motion.div>

      </div>

    </section>
    </SectionReveal>
  );
}