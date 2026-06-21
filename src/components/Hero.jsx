import heroimg from "../assets/Hero1.png";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function Hero() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const [rotate, setRotate] = useState({
  x: 0,
  y: 0,
});

const roles = [
  "Full Stack Developer",
  "AI Engineer",
  "Problem Solver",
  "Startup Builder",
];

const [roleIndex, setRoleIndex] = useState(0);

useState(() => {
  const interval = setInterval(() => {
    setRoleIndex((prev) => (prev + 1) % roles.length);
  }, 2500);

  return () => clearInterval(interval);
});

  return (
    <SectionReveal>
    <section className="relative min-h-screen h-200 overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-gray-300 opacity-20 blur-[120px] rounded-full left-1/2 top-1/3 -translate-x-1/2"></div>
      {/* BIG NAME */}
      <motion.h1
  initial={{
    opacity: 0,
    y: -50,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
  }}
  className="absolute text-center w-full top-10
  text-[120px] font-black tracking-tight text-gray-200 uppercase"
>
  VIVEK SINGARADDI
</motion.h1>

      {/* CONTENT */}
      <div className="relative h-150 z-10 flex justify-between items-center px-20 pt-52">

        {/* LEFT */}
        <div className="max-w-sm mt-30">

<div className="
inline-flex
items-center
gap-2
border
rounded-full
px-4
py-2
mb-6
">

<div className="
w-3
h-3
bg-green-500
rounded-full
animate-pulse
"></div>

<span>

Available for Opportunities

</span>

</div>
          <div className="space-y-4 mb-8">



{/* ROW 3 */}

<div className="overflow-hidden">

<motion.div

className="flex gap-10 whitespace-nowrap text-4xl font-bold"

animate={{
x:["0%","-400%"]
}}

transition={{
duration:15,
repeat:Infinity,
ease:"linear"
}}

>

{[
"STARTUP FOUNDER",
"PROBLEM SOLVER",
"AI ENGINEER",
"OPEN SOURCE CONTRIBUTOR",
"BUILDER",
].map((item,index)=>(

<span key={index}>

{item}    •

</span>

))}

</motion.div>

</div>

</div>

          <motion.p
  initial={{
    opacity: 0,
    x: -50,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    delay: 0.6,
    duration: 1,
  }}
  className="text-gray-500 leading-relaxed mb-8"
>
            Building scalable web applications,
AI-powered products and startup
solutions that create real-world
impact.
          </motion.p>

          <div className="flex gap-4 mb-10">

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="bg-black text-white px-6 py-3 rounded-full"
onClick={()=>{
document
.getElementById("work")
?.scrollIntoView({
behavior:"smooth"
})
}}
>

View Work

</motion.button>

<motion.a

href="/resume.pdf"

download

whileHover={{scale:1.05}}

whileTap={{scale:0.95}}

className="border px-6 py-3 rounded-full"

>

Resume

</motion.a>



</div>
<div className="grid grid-cols-3 gap-8 mt-12">

{

[

{

number:"10+",

label:"PROJECTS"

},

{

number:"3",

label:"STARTUPS"

},

{

number:"1000+",

label:"HOURS"

}

].map((item,index)=>(

<motion.div

key={index}

whileHover={{

y:-5

}}

className="

border-t

pt-4

"

>

<h2 className="

text-5xl

font-black

">

{item.number}

</h2>

<p className="

text-xs

tracking-[4px]

text-gray-500

mt-2

">

{item.label}

</p>

</motion.div>

))

}

</div>
        </div>

        {/* CENTER IMAGE */}

<div
  className="relative w-[580px] h-[400px] overflow-visible flex  translate-y-18 translate-x-[-10px]"
  onMouseMove={(e) => {

  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;

  const y = e.clientY - rect.top;

  setPosition({
    x,
    y: y + 120,
  });

  setRotate({
    x: (y - rect.height / 2) / 30,
    y: -(x - rect.width / 2) / 30,
  });

}}
>
  <div

className="absolute bottom-[-28px] left-10 w-[400px] h-[60px] bg-black opacity-10 blur-3xl rounded-full"

/>
  {/* GRAYSCALE IMAGE */}
  <img
    src={heroimg}
    className="absolute bottom-[-28px] w-full h-auto translate-x-10 object-cover  grayscale scale-[1.0] style={{ clipPath: 'inset(0px 0px 28px 0px)' }} "
  />

  {/* COLOR REVEAL */}
  <motion.img
  src={heroimg}
  className="absolute bottom-[-28px] w-full h-auto translate-x-10 object-cover scale-[1.0] style={{ clipPath: 'inset(0px 0px 28px 0px)' }}"
  animate={{
    y:[0,0,0],
    rotateX: rotate.x,
    rotateY: rotate.y,
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    maskImage: `radial-gradient(
      circle 120px at ${position.x}px ${position.y}px,
      black 0%,
      transparent 100%
    )`,
    WebkitMaskImage: `radial-gradient(
      circle 120px at ${position.x}px ${position.y}px,
      black 0%,
      transparent 100%
    )`,
  }}
/>
</div>

        {/* RIGHT SOCIALS */}
        <div className="flex flex-col gap-5">
          {[
{
name:"GitHub",
link:"https://github.com/viveksingaraddi"
},

{
name:"LinkedIn",
link:"https://www.linkedin.com/in/vivek-singaraddi/"
},

{
name:"Instagram",
link:"https://www.instagram.com/vivek._s._s/"
}

].map((item) => (
            <motion.a

href={item.link}

target="_blank"
  key={item}
  whileHover={{
    x: -10,
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.95,
  }}
  className="

border

border-gray-200

px-7

py-4

rounded-full

bg-white

shadow-sm

hover:bg-black

hover:text-white

transition-all

duration-300

"
>
              <div className="flex items-center gap-3">

<span>

{item.name}

</span>

<motion.span

animate={{

x:[0,5,0]

}}

transition={{

repeat:Infinity,

duration:1.5

}}

>

→

</motion.span>

</div>
            </motion.a>
          ))}
        </div>

      </div>

<motion.div

animate={{

y:[0,8,0]

}}

transition={{

repeat:Infinity,

duration:1.5

}}

className="

absolute

bottom-8

left-1/2

-translate-x-1/2

flex

flex-col

items-center

gap-2

"

>

<p

className="

text-xs

tracking-[6px]

text-gray-400

"

>

SCROLL

</p>

<div

className="

w-[1px]

h-8

bg-gray-300

"

/>

</motion.div>
<div

className="

absolute

right-20

top-40

w-[300px]

h-[300px]

bg-purple-200

opacity-20

blur-[120px]

rounded-full

"

/>

    </section>
    </SectionReveal>
  )
}