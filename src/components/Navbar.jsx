import { useEffect, useState } from "react";

export default function Navbar() {

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      // Navbar appearance

      setScrolled(window.scrollY > 80);

      // Active section

      const ids = [
        "home",
        "projects",
        "about",
        "skills",
        "journey",
        "contact",
      ];

      const scrollPosition = window.scrollY + 150;

      ids.forEach((id) => {

        const section = document.getElementById(id);

        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition <
          section.offsetTop + section.offsetHeight
        ) {

          setActive(id);

        }

      });

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const scrollTo = (id) => {

    const section =
      document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({

      behavior: "smooth",

      block: "start",

    });

  };

  return (

<div
className={`
fixed
top-4
left-1/2
-translate-x-1/2
z-[999]
transition-all
duration-500

${scrolled
? "w-[94%]"
: "w-[98%]"
}

`}
>

<nav

className={`

transition-all
duration-500

rounded-full

px-8
py-4

flex
justify-between
items-center

${scrolled

?

`
bg-white/75
backdrop-blur-xl
shadow-xl
`

:

`
bg-transparent
backdrop-blur-none
shadow-none
`

}

`}

>

{/* Left */}

<div

className="

inline-flex
items-center
gap-2

bg-white/90

px-5
py-3

rounded-full

text-sm
font-medium

transition-all
duration-300

"

>

<div

className="

w-3
h-3

bg-green-500

rounded-full

animate-pulse

"

></div>

<span>

Available for Projects

</span>

</div>

{/* Center */}

<ul

className="

flex
gap-10

"

>

{[

["home","Home"],
["projects","Work"],
["about","About"],
["skills","Skills"],
["journey","Journey"],
["contact","Contact"]

].map(([id,label])=>(

<button

key={id}

type="button"

onClick={()=>scrollTo(id)}

className={`

relative

font-medium

transition-all

duration-300

hover:-translate-y-1

${

active===id

?

"text-black"

:

"text-gray-500 hover:text-black"

}

`}

>

{label}

<div

className={`

absolute

left-0

bottom-[-8px]

h-[2px]

bg-black

transition-all

duration-300

${

active===id

?

"w-full"

:

"w-0"

}

`}

/>

</button>

))}

</ul>

{/* Right */}

<button

type="button"

onClick={()=>scrollTo("contact")}

className="

bg-black

text-white

px-7
py-3

rounded-full

hover:scale-105

hover:-translate-y-1

hover:shadow-xl

transition-all

duration-300

"

>

Let's Talk →

</button>

</nav>

</div>

  );

}