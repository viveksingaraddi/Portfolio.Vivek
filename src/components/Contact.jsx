import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const socials = [
  {
    name: "GitHub",
    link: "https://github.com/viveksingaraddi",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vivek-singaraddi/",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vivek._s._s/",
  },
];

export default function Contact() {
  return (
    <SectionReveal>
    <section className="relative pt-36 pb-15 px-20 overflow-hidden">

      {/* Background */}

      <h1 className="absolute right-0 top-0 text-[180px] font-black text-gray-100 opacity-70 pointer-events-none select-none z-0">
        CONTACT
      </h1>

      <div className="grid grid-cols-2 gap-20">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[6px] text-gray-400 mb-6">
            LET'S BUILD
          </p>

          <h2 className="text-7xl font-black leading-none mb-10">
            Have an
            <br />
            Idea?
          </h2>

          <p className="text-2xl text-gray-600 leading-10 max-w-lg">
            I'm always excited to work on startups,
            AI products, scalable web applications
            and innovative ideas.
          </p>

          {/* Availability */}

          <div className="mt-14 space-y-5">

            <div className="flex items-center gap-4">

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="w-4 h-4 rounded-full bg-green-500"
              />

              <p className="text-xl">
                Available for Internships
              </p>

            </div>

            <div className="flex items-center gap-4">

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: 0.2,
                }}
                className="w-4 h-4 rounded-full bg-green-500"
              />

              <p className="text-xl">
                Open for Startup Collaborations
              </p>

            </div>

            <div className="flex items-center gap-4">

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: 0.4,
                }}
                className="w-4 h-4 rounded-full bg-green-500"
              />

              <p className="text-xl">
                Building AI Solutions
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col justify-center">

          {/* CTA */}

          <motion.a
            href="mailto:vivek.singaraddi.dev@gmail.com"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
            inline-flex
            justify-between
            items-center
            border
            rounded-full
            px-10
            py-6
            text-2xl
            z-10
            font-semibold
            hover:bg-black
            hover:text-white
            duration-300
            "
          >

            Let's Talk

            <span className="text-3xl">
              →
            </span>

          </motion.a>

          {/* Divider */}

          <div className="border-b my-14"></div>

          {/* Socials */}

          <div className="space-y-5">

            {socials.map((item, index) => (

              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  x: 10,
                }}
                className="
                flex
                justify-between
                items-center
                border-b
                py-5
                text-2xl
                group
                "
              >

                <span>
                  {item.name}
                </span>

                <span className="group-hover:translate-x-2 duration-300">
                  ↗
                </span>

              </motion.a>

            ))}

          </div>

          {/* Email */}

          <div className="mt-8">

            <p className="uppercase tracking-[4px] text-gray-400 mb-3">
              Email
            </p>

            <p className="text-2xl font-semibold">
              vivek.singaraddi.dev@gmail.com
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Statement */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}
        className="mt-32 text-center"
      >

        <p className="text-gray-500 text-2xl mb-6">
          Technology + Creativity + Entrepreneurship
        </p>

        <h2 className="text-7xl font-black">
          Build.
          <br />
          Ship.
          <br />
          Scale.
        </h2>

      </motion.div>

    </section>
    </SectionReveal>
  );
}