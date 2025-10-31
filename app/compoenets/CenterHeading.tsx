import { motion } from "framer-motion";
import React from "react";

type HeadingType = {
    title: string,
    heading: string,
    titleColour: string,
    headingColour: string,
}

const CenterHeading = ({title, heading, titleColour, headingColour}: HeadingType) => {
  return (
    <div className="text-center">
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`uppercase font-bold tracking-widest text-sm mb-2 ${titleColour}`}
      >
        {title}
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`text-2xl max-w-[1000px] mx-auto md:text-5xl font-bold mb-6 ${headingColour}`}
      >
        {heading}
      </motion.h1>
    </div>
  );
};

export default CenterHeading;
