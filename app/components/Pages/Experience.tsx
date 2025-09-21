"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaArrowLeft, FaAngleUp,  } from "react-icons/fa";
import Particles from "../Particles/Particles";
import ScrollReveal from "scrollreveal";


type ExperienceItem = {
  title: string;
  role: string;
  period: string;
};

ScrollReveal().reveal('.box', {
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: true
});

const experiences: ExperienceItem[] = [
  { title: "Self Employed", role: "Entry Level Full Stack Simple Web Developer", period: "Jun 2024 - To Day" },
  { title: "PT Pro Gemilang", role: "Marketing | IT Staff Network", period: "Feb 2024 - Aug 2024" },
  { title: "Mobile Credit Agent", role: "Administartor | Server Manajemen", period: "Jan 2023 - Aug 2023" },
  { title: "PT Grand Surya Techno", role: "Car Carpet Production Operator", period: "Oct 2021 - Nov 2022" },
];

export default function Experience() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const toggleScroll = () => {
      setShowScroll(window.scrollY > 60);
    };
    window.addEventListener("scroll", toggleScroll);
    return () => window.removeEventListener("scroll", toggleScroll);
  }, []);

  return (
    <section id="experience" className="relative overflow-hidden min-h-screen px-6 md:px-16 py-12">
    <div className="">
    
     <div className="absolute inset-0 z-0 w-screen pointer-events-none h-[screen] bg-[#000] ">
        <Particles particleColors={["#7c3aed", "#fff"]} particleCount={200} particleSpread={10} speed={0.1} particleBaseSize={100} moveParticlesOnHover={true} alphaParticles={false} disableRotation={false} />
    </div>

    <div className="relative z-10 pt-27 h-[screen]">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center text-white flex items-center justify-center gap-3">
        <FaBriefcase className="text-[#7c3aed]" />Experience
      </h2>

      {/* Quote */}
      <p className="text-center text-2xl font-semibold mt-4 text-white">
        “Every experience in your life is being orchestrated to teach you something you need to know to move forward.”
      </p>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto mt-12 pt-27">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[6px] bg-[#7c3aed] -translate-x-1/2 z-0 hover:animate-bounce"></div>

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative w-full md:w-1/2 px-6 py-4 ${isLeft ? "md:pr-12 md:left-0" : "md:pl-12 md:left-1/2"}`}
            >
              {/* Circle */}
              <div
                className={`absolute top-5 w-6 h-6 rounded-full border-4 border-white bg-white z-10 flex items-center justify-center text-indigo-900 font-bold text-sm
                ${isLeft ? "-right-3" : "-left-3"}`}
              >
                <FaBriefcase />
              </div>

              {/* Content box */}
              <div className="hover:font-extrabold bg-[#170d27] rounded-lg shadow-md p-5 border-[1px] border-[#27272a] text-white shadow-[5px] shadow-[#7c3aed]">
                <h3 className="hover:font-extrabold text-xl font-bold">{exp.title}</h3>
                <p className="hover:font-extrabold mt-1 text-lg font-semibold">{exp.role}</p>
                <p className="text-sm">{exp.period}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-6 bg-[#7c3aed] text-white p-3 rounded-full shadow-lg text-2xl animate-bounce"
        >
          <FaAngleUp />
        </button>
      )}
      </div>
      </div>  
    </section>
  );
}
