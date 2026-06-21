import { motion } from "framer-motion";

import gigmithra from "../assets/gigmithra.png";
import promptspark from "../assets/promptspark.png";
import maakakhana from "../assets/maakakhana.png";
import SectionReveal from "./SectionReveal";

const projects = [

{
id:"01",
title:"GigMitra",
subtitle:"Connecting event organizers with skilled workers.",
stack:["React","Node","MongoDB"],
category:"Startup",
status:"LIVE",
image:gigmithra,
github:"https://github.com/viveksingaraddi",
live:"https://gigmithra.vercel.app/"
},

{
id:"02",
title:"Prompt Spark Hub",
subtitle:"AI tools platform for creators.",
stack:["React","Tailwind"],
category:"AI",
status:"BUILDING",
image:promptspark,
github:"https://github.com/viveksingaraddi",
live:"https://prompt-spark-hub.vercel.app/"
},

{
id:"03",
title:"Maa Ka Khana",
subtitle:"Affordable home food subscription.",
stack:["Automation","Startup"],
category:"FoodTech",
status:"CONCEPT",
image:maakakhana,
github:"https://github.com/viveksingaraddi",
live:"https://maa-ka-khana-order.vercel.app/"
}

];

export default function Projects(){

return(
  <SectionReveal>

<section className="py-32 px-20">

<p className="uppercase tracking-[5px] text-gray-400">

FEATURED WORK

</p>

<h2 className="text-7xl font-bold mt-4">

Real products.

<br/>

Real impact.

</h2>

<div className="mt-20 space-y-12">

{projects.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:80}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.7}}

className="group border-b pb-12"

>

<div className="grid grid-cols-2 gap-16 items-center">

<div>

<p className="text-gray-400 mb-4">

{item.id}

</p>

<h3 className="text-5xl font-bold group-hover:translate-x-2 duration-300">

{item.title}

</h3>

<p className="text-gray-500 mt-5 text-lg leading-relaxed">

{item.subtitle}

</p>

<div className="flex gap-3 mt-6 flex-wrap">

{item.stack.map((tech)=>(

<span

key={tech}

className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white duration-300"

>

{tech}

</span>

))}

</div>

<div className="flex gap-4 mt-8">

<a

href={item.github}

target="_blank"

className="border px-6 py-3 rounded-full hover:bg-black hover:text-white duration-300"

>

Github →

</a>

<a

href={item.live}

target="_blank"

className="border px-6 py-3 rounded-full hover:bg-black hover:text-white duration-300"

>

Live →

</a>

</div>

</div>

<div>

<div className="relative overflow-hidden rounded-3xl">

<img

src={item.image}

className="rounded-3xl group-hover:scale-105 duration-500"

/>

<div className="absolute top-5 left-5">

<span className="bg-white px-4 py-2 rounded-full text-sm shadow">

{item.status}

</span>

</div>

<div className="absolute bottom-5 right-5">

<span className="bg-black text-white px-4 py-2 rounded-full">

{item.category}

</span>

</div>

</div>

</div>

</div>

</motion.div>

))}

</div>

</section>
</SectionReveal>
)

}