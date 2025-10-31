"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeBtnRef = useRef(null);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect((): (() => void) => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  const MENU = [
    { name: "Home", link: "#" },
    { name: "About Us", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Work Consultation", link: "#work" },
    { name: "Client", link: "#clients" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/10 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center py-3 lg:px-20 px-8 text-white">
          {/* Logo */}
          <div>
            <Link href="#">
              <Image
                width={500}
                height={500}
                src="/images/logo.png"
                alt="Logo"
                className="w-20 sm:w-24"
              />
            </Link>
          </div>

          {/* MENU Button */}
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2 font-bold">
              <h2 className="uppercase text-sm tracking-widest lg:flex hidden text-[#39B54A]">
                Menu
              </h2>
              <button
                onClick={openMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-sheet"
                className="p-2 rounded-md hover:bg-white/10 transition"
              >
                <HiOutlineMenuAlt4
                  size={26}
                  className={`transition-all duration-300 ${isScrolled ? "text-black" : "text-white"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Animated Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />

            {/* Sliding Sheet */}
            <motion.aside
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-full md:max-w-[620px] bg-white shadow-2xl z-50"
            >
              <div className="p-8 h-full overflow-y-auto relative">
                <div className="flex justify-end items-center">
                  <button
                    ref={closeBtnRef}
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="p-2 rounded-md transition-transform duration-300 ease-in-out hover:rotate-[90deg] cursor-pointer"
                  >
                    <HiX size={28} />
                  </button>
                </div>

                {/* Menu Links */}
                <div className="pt-8 pb-28">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    Menu
                  </span>
                  <ul className="mt-6 space-y-4 text-2xl font-medium">
                    {MENU.map(({ name, link }) => (
                      <li key={name}>
                        <Link
                          href={link}
                          className="group inline-block relative hover:text-green-700 transition"
                        >
                          <span className="relative z-10">{name}</span>
                          <span
                            className="absolute left-0 -bottom-1 h-[2px] w-full bg-gray-800 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-green-700 transition-transform duration-300 origin-left"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Icons */}
                <div className="absolute bottom-6 left-8">
                  <div className="text-sm text-gray-500 tracking-wide mb-2">
                    Follow Us
                  </div>
                  <div className="flex gap-4">
                    <RiInstagramFill
                      size={24}
                      className="cursor-pointer hover:text-green-700 transition"
                    />
                    <FaFacebookF
                      size={24}
                      className="cursor-pointer hover:text-green-700 transition"
                    />
                    <TbBrandLinkedinFilled
                      size={24}
                      className="cursor-pointer hover:text-green-700 transition"
                    />
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
