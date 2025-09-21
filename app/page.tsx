import Image from "next/image";
import Contact from "./components/Pages/Wa";
import Profile from "./components/Pages/Profile";
import Navbar from "./components/Pages/Navbar";
import Footer from "./components/Pages/Footer";
import Lanyard from "./components/Lanyard/Lanyard";
import { BsPersonBoundingBox } from "react-icons/bs";
import BlurText from "./components/BlurText/BlurText";
import LogoLoop from "./components/LogoLoop/LogoLoop";
import Experience from "./components/Pages/Experience";
import Particles from "./components/Particles/Particles";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import GradientText from "./components/GradientText/GradientText";
import RotatingText from "./components/RotatingText/RotatingText";
import { TimelineDemo } from "./components/Timeline/TimelineDemo";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import RollingGallery from "./components/RollingGallery/RollingGallery";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import AnimatedTestimonialsDemo from "./components/ui/animated-testimonials-demo";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiMysql, SiPhp, SiJavascript, SiBootstrap, SiPython, SiWhatsapp, SiInstagram, SiGmail, SiGithub } from "react-icons/si";

const techLogos = [
  { node: <SiLaravel size={48} color="#FF2D20" />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiMysql size={48} color="#4479A1" />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPhp size={48} color="#777BB4" />, title: "PHP", href: "https://www.php.net" },
  { node: <SiJavascript size={48} color="#F7DF1E" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiNextdotjs size={48} color="#FFFFFF" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss size={48} color="#38B2AC" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiBootstrap size={48} color="#7952B3" />, title: "Bootstrap", href: "https://getbootstrap.com" },
  { node: <SiPython size={48} color="#3776AB" />, title: "Python", href: "https://www.python.org" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden items-center">
      {/* <SplashCursor /> */}
      <div className="absolute inset-0 w-screen h-screen bg-[#000]">
        <Particles particleColors={["#7c3aed", "#fff"]} particleCount={200} particleSpread={10} speed={0.1} particleBaseSize={100} moveParticlesOnHover={true} alphaParticles={false} disableRotation={false} />
      </div>
      {/* Navbar */}
      <main>
        <Navbar />
      </main>

      {/* Hero Section */}
      <Profile />

      {/* About Section */}
      <section className="relative w-full h-auto flex flex-col items-center bg-black justify-start pb-50 pt-50 lg:mb-30">
        {/* Background Particles */}
        <div className="absolute inset-0">
          <Particles
            particleColors={["#7c3aed", "#fff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Content */}
        <div id="about" className="relative w-full z-10 px-4 sm:px-8 lg:px-16">
          {/* Title */}
          {/* <div className="max-w-3xl mx-auto text-center mb-1 lg:mb-12">
            <h2 className="text-white font-semibold text-lg mb-2">About Me</h2>
            <h2 className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl">
              My Education & Skill
            </h2>
          </div> */}

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-center text-white flex items-center justify-center gap-3">
            <BsPersonBoundingBox  className="text-[#7c3aed]" />About Me
          </h2>
          {/* Quote */}
          <p className="text-center text-2xl font-semibold mt-4 text-white">
            “Every learning experience brings me closer to technology, and every programming skill is my weapon to conquer new challenges.”
          </p>

          {/* Education + Skills */}
          <div className="flex flex-col items-center mt-0 lg:mt-10">
            {/* Ini full untuk AnimatedTestimonialsDemo */}
            <div className="w-full">
              <AnimatedTestimonialsDemo />
            </div>

            {/* Ini dipisah block baru */}
            <div className="w-full">
            <RollingGallery autoplay pauseOnHover />
            </div>

          </div>

        </div>
      </section>
      
      {/* About Section End*/}

      {/* MyProject*/}
      <TimelineDemo />
      {/* MyProject End*/}

      {/* My Experience */}
      <Experience />
      {/* My Experience end */}

      {/* Contact */}
      <Contact />
      {/* Contact end */}

      {/* Footer */}
      <Footer />
      {/* Footer End*/}
    </div>
  );
}
