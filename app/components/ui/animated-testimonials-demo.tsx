'use client';
import { AnimatedTestimonials } from "./animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
        quote: `My Final Project is Creating an administration management website for a boarding house manager with 1250 residents, using the Laravel framework & MySQL database.`,
      name: "Universitas Pelita Bangsa Bekasi",
      designation: "Informatics Engineering, GPA 3.54",

      src: "./assets/img/UPB.png",
    },
    {
      quote:
        "During my school years, I was actively involved in various organizations and extracurricular activities. I served as the Chairperson of KAPA (Anti-Drug Student Association) from 2017 to 2018 and as the Chairperson of the School Basketball Organization from 2017 to 2019. In addition, I participated in Scouting up to the Laksana level in 2018 and pursued Pencak Silat up to the Instructor level in 2019. These experiences strengthened my leadership, discipline, and teamwork skills.",
      name: "MA Al-Hikmah 01 Brebes",
      designation: "Religious, My Average Value is 86,9",
      src: "./assets/img/MA.png",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
