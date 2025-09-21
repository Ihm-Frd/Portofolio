"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import RollingGallery from "../RollingGallery/RollingGallery";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="w-full h-auto font-sans antialiased items-start">
      <div className=" grid grid-cols md:grid-cols-2 p-0 m-0">
        <div className="flex justify-center">
          <div className="relative h-70 w-70 item center mt-15 lg:mt-30 lg:ml-20">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col h-auto items-center px-auto lg:mr-53 pt-15">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-4xl font-bold dark:text-white text-center lg:text-start">
              {testimonials[active].name}
            </h3>
            <p className="text-3xl font-semibold text-gray-100 dark:text-neutral-300 text-center lg:text-start">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-xl lg:text-3xl text-justify text-gray-500 dark:text-neutral-300 mb-10 lg:pl-0 pl-4">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <h1 className="text-white items-center p-2 text-2xl text-bold text-xl">Next ⏩</h1>
          <div className="flex gap-4 md:pt-0 z-50">
            <button
              onClick={handlePrev}
              className="group/button text-white flex h-7 w-7 items-center justify-center rounded-full bg-[#7c3aed] dark:bg-[#7c3aed]"
            >
              <IconArrowLeft className="h-10 w-10 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="group/button text-white flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-[#7c3aed]"
            >
              <IconArrowRight className="h-10 w-10 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
