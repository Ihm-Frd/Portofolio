// app/components/About.tsx
"use client";

import React, { useState } from "react";
import { ReactElement } from "react";
import { FaChevronRight } from "react-icons/fa";
import ProfileCard from "../ProfileCard/ProfileCard";
import RotatingText from "../RotatingText/RotatingText";
import BlurText from "../BlurText/BlurText";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

import {SiWhatsapp, SiInstagram, SiGmail, SiGithub, SiLinkedin } from "react-icons/si";


const socialLinks = [
  { node: <SiWhatsapp size={42} color="#25D366" />, title: "WhatsApp", href: "https://wa.me/6285157739045" },
  { node: <SiInstagram size={42} color="#ED9121" />, title: "Instagram", href: "https://www.instagram.com/ihm_frd" },
  { node: <SiGmail size={42} color="#FF2D20" />, title: "Email", href: "mailto:ilhamfirdaus677@gmail.com" },
  { node: <SiGithub size={42} color="#fff" />, title: "GitHub", href: "https://github.com/Ihm-Frd" },
  { node: <SiLinkedin size={42} color="#0A66C2" />, title: "GitHub", href: "https://www.linkedin.com/in/mohammad-ilham-firdaus-217625207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " },
];

export default function About(): ReactElement {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <section id="about" className="max-w-screen h-auto bg-[#000] lg:pt-30 pt-20 z-[888] lg:ml-50 pr-7">
      <div className="w-full flex flex-col md:flex-row justify-between md:p-16">
          {/* Image column */}
          <div className="flex-1 flex lg:justify-end justify-center items-center lg:pr-50">
            <div className="group relative pl-14 pt-10" onMouseEnter={() => setImgHovered(true)} onMouseLeave={() => setImgHovered(false)}>
              <ProfileCard
                name="M.Ilham Firdaus"
                title="FullStack Developer"
                handle="My Profile"
                status="Review my CV here"
                contactText="Review"
                avatarUrl="/assets/ProfileCard/foto2.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGradient={undefined}   // biar fallback jalan
                innerGradient={undefined}    // biar fallback jalan
                miniAvatarUrl={undefined} 
              />
              <img
              />
              {/* subtle scale on hover to mimic interactive feel */}
              <style jsx>{`
                .group:hover img {
                  transform: translateY(-6px) scale(1.01);
                }
              `}</style>
            </div>
          </div>

          <div className="w-full flex-2 flex flex-col justify-center z-[888] pt-10 sm:px-6">
            {/* Heading + RotatingText sejajar */}
            <div className="flex items-center lg:items-start flex-wrap gap-3 text-2xl justify-center lg:justify-start lg:px-0 lg:ml-0 px-10 ml-16">
              <h1 className="font-bold text-white text-center text-3xl sm:text-4xl lg:text-5xl text-white leading-snug">
                I'm Ready For Job
              </h1>
              <RotatingText
                texts={["Web Developer", "SoftWare Enginer", "AI Automation", "Data Analytic", "Digital Marketing"]}
                mainClassName="px-2 py-1 rounded-md bg-[#7c3aed] text-white font-bold text-white text-3xl sm:text-4xl lg:text-5xl"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

              <BlurText
                delay={150}
                animateBy="words"
                direction="top"
                className="py-6 lg:pl-0 pl-9 lg:pr-14 text-center leading-relaxed lg:text-2xl font-bold text-xl text-white"
                text="I am a Entry Level Full-Stack Developer with 3 years of experience using Laravel. I am very passionate about improving my coding skills & developing applications & websites. Working for myself to improve my skills, love to build Full-Stack simple web. Let's build a scalable web-based business or application with me, contact now :"
              />

            {/* Social icons tengah */}
            <div className="mt-6 flex items-center gap-16 ml-12 lg:ml-50">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-210 transition-transform duration-300"
                  aria-label={item.title}
                >
                  {item.node}
                </a>
              ))}
            </div>
          </div>
  

        {/* </div> */}
      </div>
    </section>
  );
}
