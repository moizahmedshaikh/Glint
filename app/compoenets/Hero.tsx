"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // ✅ Parallax Background
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // ✅ Hero fade & scale
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // ✅ Shutter reveal (only for transition between Hero → About)
  const shutterY = useTransform(scrollYProgress, [0.85, 1], ["100%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center lg:justify-start xl:px-64 lg:px-40 py-40 text-white px-6 sm:px-12"
    >
      {/* ✅ Background Parallax */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full min-h-[170vh] sm:min-h-[200vh] md:min-h-[200vh]  xl:min-h-[210vh] will-change-transform"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>

      {/* ✅ Permanent dark overlay for readability (no scroll animation) */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>

      {/* ✅ Foreground Content */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-20 max-w-4xl text-left flex flex-col lg:items-start items-center justify-center lg:justify-start"
      >
        <motion.p
          className="text-gray-300 text-sm sm:text-base tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Glint
        </motion.p>

        <motion.h1
          className="font-bold lg:text-start text-center text-2xl sm:text-4xl md:text-6xl leading-snug mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We are a creative group <br />
          of people who design <br />
          influential brands and <br />
          digital experiences.
        </motion.h1>

        <motion.div
          className="w-full gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex lg:flex-row flex-col justify-center lg:justify-start lg:items-center gap-4">
            <button className="border border-white py-3 px-6 text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300">
              START A PROJECT
            </button>
            <button className="border border-white py-3 px-6 text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300">
              MORE ABOUT US
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* ✅ Social Icons (Right Side) */}
      <div className="absolute hidden right-6 top-1/2 -translate-y-1/2 lg:flex flex-col items-center gap-4 z-20">
        {[FaFacebookF, FaTwitter, FaInstagram, FaBehance].map((Icon, i) => (
          <motion.a
            key={i}
            href="#"
            whileHover={{ scale: 1.2 }}
            className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>

      {/* ✅ Shutter / Fold Reveal (only appears at bottom, cleanly covers hero on scroll end) */}
      <motion.div
        style={{ y: shutterY }}
        className="absolute bottom-0 left-0 w-full h-full bg-black/70 z-30"
      />
    </section>
  );
};

export default Hero;
