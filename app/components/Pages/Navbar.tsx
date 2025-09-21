"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SmoothLink from "../SmoothLink/SmoothLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // untuk hamburger menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // untuk dropdown
  const [darkMode, setDarkMode] = useState(false);

  // Jalankan saat pertama kali render (cek localStorage)
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // SmoothScroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  


  // Handler darkmode toggle
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <header
    className="fixed  top-0 left-0 w-full flex items-center z-[9999] bg-transparent backdrop-blur-sm shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.2)] 
               dark:bg-gelap/50 lg:pl-70 sm:item-start">
      <div className="w-full  flex items-center justify-between px-4 py-3  sm:px-1 sm:w-full">
        {/* Logo / Title */}
        <div className="px-4 flex-shrink-0 sm:pr-20">
          <Link
            href="#home"
            className="text-white font-extrabold text-2xl block items-start "
          >
            My Portfolio
          </Link>
        </div>
  
        {/* Tombol & Menu */}
        <div className="flex items-center px-4 pr-40 text-2xl">
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="block absolute right-4 lg:hidden"
          >
            <span
              className={`my-2 block h-[2px] w-[30px] bg-black dark:bg-white transition duration-300 origin-top-left ${
                isOpen ? "rotate-45" : ""
              }`}
            />
            <span
              className={`my-2 block h-[2px] w-[30px] bg-black dark:bg-white ${
                isOpen ? "scale-0" : "scale-100"
              }`}
            />
            <span
              className={`my-2 block h-[2px] w-[30px] bg-black dark:bg-white transition duration-300 origin-bottom-left ${
                isOpen ? "-rotate-45" : ""
              }`}
            />
          </button>
  
          {/* Menu */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            }  absolute py-5 bg-[#170d27] shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full
            lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none 
            shadow-[#7c3aed] lg:dark:bg-transparent
            backdrop-blur-md`}
          >
            <ul className="block lg:flex">
              <li>
                <Link 
                  href="#home"
                  className="text-xl py-2 mx-5 flex dark:text-white  px-6 py-3 rounded-lg font-semibold text-white 
                  transition duration-300
                  hover:shadow-[0_0_30px_#7c3aed] hover:font-extrabold"
                >
                  Home
                </Link>
{/* 
<Link
  href="#home"
  onClick={(e) => handleSmoothScroll(e, "#home")}
  className="text-xl py-2 mx-5 flex dark:text-white px-6 py-3 rounded-lg font-semibold text-white 
             transition duration-300 hover:shadow-[0_0_30px_#7c3aed] hover:font-extrabold"
>
  Home
</Link> */}
              </li>
  
              {/* Dropdown */}
              <li className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-xl py-2 mx-5 flex dark:text-white  px-6 py-3 rounded-lg font-semibold text-white 
                  transition duration-300
                  hover:shadow-[0_0_30px_#7c3aed] hover:font-extrabold"
                >
                  About Me
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
  
                {dropdownOpen && (
                  <div className="text-4xl absolute top-full text-black left-40 z-10 border border-white rounded-md shadow bg-transparent">
                    <ul className="py-2 text-xl text-black dark:text-white">
                      <li>
                        <Link
                          href="#about"
                          className="block px-4 py-2 px-6 py-3 rounded-lg font-semibold text-white 
                          transition duration-300
                          hover:shadow-[0_0_20px_#7c3aed] hover:font-bold"
                        >
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#project"
                          className="block px-4 py-2 px-6 py-3 rounded-lg font-semibold text-white 
                          transition duration-300
                          hover:shadow-[0_0_20px_#7c3aed] hover:font-bold"
                        >
                          Project
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
  
              <li>
                <Link 
                  href="#experience"
                  className="text-xl py-2 mx-5 flex dark:text-white  px-6 py-3 rounded-lg font-semibold text-white 
                  transition duration-300
                  hover:shadow-[0_0_30px_#7c3aed] hover:font-extrabold"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact"
                  className="text-xl py-2 mx-5 flex dark:text-white  px-6 py-3 rounded-lg font-semibold text-white 
                  transition duration-300
                  hover:shadow-[0_0_30px_#7c3aed] hover:font-extrabold"
                >
                  Contact
                </Link>
              </li>
  
              {/* Dark Mode */}
              {/* <li className="flex items-center pl-8 mt-3 lg:mt-0">
                <div className="flex items-center">
                  <span className="mr-2 text-bold text-amber-400 dark:text-slate-500">
                    <i className="bi bi-brightness-high-fill"></i>
                  </span>
                  <label>
                    <div
                      onClick={toggleDarkMode}
                      className="flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-400 p-1 dark:bg-slate-700 dark:shadow-slate-200 shadow-sm"
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-white transition duration-500 ease-in-out ${
                          darkMode ? "translate-x-4" : ""
                        }`}
                      />
                    </div>
                  </label>
                  <span className="ml-2 text-bold text-slate-400 dark:text-amber-300">
                    <i className="bi bi-moon-stars-fill"></i>
                  </span>
                </div>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    {/* </div> */}
  </header>
  
  );
}
