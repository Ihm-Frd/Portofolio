// app/components/Footer.tsx
"use client";

import React from "react";
import {
  FaChevronCircleRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#000] text-gray-100 py-8">
      <div className="w-screen mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 pb-22"
        >
          {/* Box 1 */}
          <div className="flex-1 min-w-[18rem] max-w-[30rem]">
            <h3 className="text-2xl md:text-3xl font-normal text-white pb-4">ihm_frd Portfolio</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
              <br />
              <br />
              Keep Rising 🚀. Connect with me over live chat!
            </p>
          </div>

          {/* Box 2 - Quick Links */}
          <div className="flex-1 min-w-[16rem] max-w-[22rem] lg:mr-50">
            <h3 className="text-2xl md:text-3xl font-normal text-white pb-4">quick links</h3>
            <nav className="flex flex-col gap-2 text-lg">
              <a href="/#home" className="inline-flex items-center gap-3 text-gray-200 hover:text-amber-400 transition">
                <FaChevronCircleRight aria-hidden /> <span>Home</span>
              </a>
              <a href="/#about" className="inline-flex items-center gap-3 text-gray-200 hover:text-amber-400 transition">
                <FaChevronCircleRight aria-hidden /> <span>About</span>
              </a>
              <a href="/#project" className="inline-flex items-center gap-3 text-gray-200 hover:text-amber-400 transition">
                <FaChevronCircleRight aria-hidden /> <span>Project</span>
              </a>
              <a href="/#experience" className="inline-flex items-center gap-3 text-gray-200 hover:text-amber-400 transition">
                <FaChevronCircleRight aria-hidden /> <span>Experience</span>
              </a>
              <a href="/#Contact" className="inline-flex items-center gap-3 text-gray-200 hover:text-amber-400 transition">
                <FaChevronCircleRight aria-hidden /> <span>Contact</span>
              </a>
            </nav>
          </div>

          {/* Box 3 - Contact & Socials */}
          <div className="flex-1 min-w-[18rem] max-w-[28rem] lg:ml-50">
            <h3 className="text-2xl md:text-3xl font-normal text-white pb-4">Contact Info</h3>

            <div className="space-y-2 text-gray-300">
              <p className="inline-flex items-center gap-3">
                <FaPhone className="text-amber-400" aria-hidden /> <span>+62 851 5773 9045</span>
              </p>
              <br />
              <p className="inline-flex items-center gap-3">
                <FaEnvelope className="text-amber-400" aria-hidden /> <span>ilhamfirdaus677@gmail.com</span>
              </p>
              <p className="inline-flex items-center gap-3">
                <FaMapMarkedAlt className="text-amber-400" aria-hidden /> <span>Bekasi, Indonesia-17530</span>
              </p>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-3">
                {/* Social buttons - animated hover */}
                <motion.a
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-[#021033] hover:text-amber-400 transition-shadow shadow-sm"
                  href="https://www.linkedin.com/in/in/mohammad-ilham-firdaus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-[#021033] hover:text-amber-400 transition-shadow shadow-sm"
                  href="https://github.com/ihm-frd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-[#021033] hover:text-amber-400 transition-shadow shadow-sm"
                  href="mailto:ilhamfirdaus677@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-[#021033] hover:text-amber-400 transition-shadow shadow-sm"
                  href="https://instagram.com/ihm_frd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram "
                >
                  <FaInstagram  />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Credit line with pulse heart */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-sm md:text-base text-gray-200">
            Designed with{" "}
            <span className="inline-flex items-center gap-2">
              <FaHeart className="heart text-[#E90606] ml-1" aria-hidden />
            </span>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/mohammad-ilham-firdaus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-semibold hover:underline"
            >
              Ilham Firdaus
            </a>
          </p>
        </motion.div>
      </div>

      {/* Inline styles for pulse + small responsive tweaks (no global file changes) */}
      <style jsx>{`
        .heart {
          display: inline-block;
          animation: pound 0.35s infinite alternate;
        }
        @keyframes pound {
          to {
            transform: scale(1.1);
          }
        }
        @media (max-width: 450px) {
          footer {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          .heart {
            font-size: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}
