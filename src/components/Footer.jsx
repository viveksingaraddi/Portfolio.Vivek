import SectionReveal from "./SectionReveal";

export default function Footer() {

  const socials = [

    {
      name: "GitHub",
      link: "https://github.com/viveksingaraddi"
    },

    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/vivek-singaraddi"
    },

    {
      name: "Instagram",
      link: "#"
    }

  ];

  return (
    <SectionReveal>
<section>
    <footer className="px-20 pt-20 pb-10">

      <div className="border-t"></div>

      <div className="grid grid-cols-2 gap-20 py-16">

        {/* Left */}

        <div>

          <p className="text-6xl font-black leading-none">

            VIVEK

            <br />

            SINGARADDI

          </p>

          <p className="mt-8 text-gray-500 text-xl leading-9 max-w-md">

            Building AI products,
            startup solutions and scalable web applications.

          </p>

        </div>

        {/* Right */}

        <div className="flex flex-col justify-between">

          {/* Socials */}

          <div>

            <p className="uppercase tracking-[6px] text-gray-400 mb-8">

              Connect

            </p>

            <div className="space-y-5">

              {

                socials.map(item => (

                  <a

                    key={item.name}

                    href={item.link}

                    target="_blank"
                    rel="noreferrer"

                    className="
                    flex
                    justify-between
                    border-b
                    pb-3
                    text-xl
                    group
                    "

                  >

                    <span>

                      {item.name}

                    </span>

                    <span className="group-hover:translate-x-2 duration-300">

                      →

                    </span>

                  </a>

                ))

              }

            </div>

          </div>

          {/* Signature */}

          

        </div>

      </div>
<div className="border-t my-12"></div>

<div className="text-center py-12">

<p className="uppercase tracking-[8px] text-gray-400 mb-8">

MANIFESTO

</p>

<h2 className="text-5xl md:text-6xl font-black leading-tight">

Turning ideas into products,

<br/>

and products into impact.

</h2>

<p className="mt-8 text-2xl text-gray-500">

— Vivek Singaraddi

</p>

</div>

<div className="my-12"></div>

      {/* Bottom */}

      <div className="border-t pt-8 flex justify-between text-gray-400">

        <p>

          © 2026 Vivek Singaraddi

        </p>

        <p>

          Designed & Built with BRAIN

        </p>

        <p>

          Bangalore, India

        </p>

      </div>

    </footer>
</section>
</SectionReveal>
  );

}