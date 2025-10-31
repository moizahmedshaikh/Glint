"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CenterHeading from "./CenterHeading";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { label: "Awards Received", value: 127 },
    { label: "Cups of Coffee", value: 1505 },
    { label: "Projects Completed", value: 109 },
    { label: "Happy Clients", value: 102 },
  ];

  return (
    <section
      ref={ref}
      className="bg-[#39B54A] text-white py-20 px-6 md:px-20 text-center"
    >
      <CenterHeading
        title="Hello There"
        heading="We Are Glint"
        titleColour="text-black"
        headingColour="text-white"
      />

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto border-t border-green-400 my-6 origin-left"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-4xl Text mx-auto text-black leading-relaxed mb-12 text-base md:text-lg"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
      </motion.p>

      {/* Stats with Counting */}
      <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-10 max-w-4xl mx-auto ">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <CountUp
              value={stat.value}
              isInView={isInView}
              className="text-5xl font-extrabold "
            />
            <p className="text-sm font-semibold mt-2  text-black">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ✅ CountUp component (framer-motion safe)
function CountUp({
  value,
  isInView,
  className,
}: {
  value: number;
  isInView: boolean;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return <h2 className={className}>{count}</h2>;
}
