import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  return (
    <div className="bg-[#efefef] p-5">

      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">

        
<Navbar/>

<section id="home">
  <Hero/>
</section>

<section id="projects">
  <Projects/>
</section>

<section id="about">
  <About/>
</section>

<section id="skills">
  <Skills/>
</section>

<section id="journey">
  <Journey/>
</section>

<section id="contact">
  <Contact/>
</section>

<Footer/>



      </div>

    </div>
  );
}