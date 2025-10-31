"use client"

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WorkCard = ({ image, title, link }: {image: string, title: string, link: string}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative overflow-hidden rounded-sm cursor-pointer group shadow-lg"
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 overflow-hidden"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500"></div>

      {/* ✅ Content Slide-up Animation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute bottom-[-60px] left-0 w-full px-6 text-white flex justify-between items-center group-hover:bottom-6 group-hover:opacity-100 transition-all duration-700 ease-out"
      >
        <h3 className="text-sm font-semibold uppercase">{title}</h3>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ExternalLink className="w-5 h-5" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default WorkCard;
