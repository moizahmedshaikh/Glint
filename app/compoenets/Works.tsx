"use client";
import React from "react";
import WorkCard from "./WorkCard";
import CenterHeading from "./CenterHeading";

const Works = () => {
  const worksData = [
    {
      image: "/images/gallery/g-woodcraft.jpg",
      title: "woodcraft",
      link: "#",
    },
    {
      image: "/images/gallery/g-shutterbug.jpg",
      title: "shutterbug",
      link: "#",
    },
    {
      image: "/images/gallery/g-beetle.jpg",
      title: "beetle",
      link: "#",
    },
    {
      image: "/images/gallery/g-grow-green.jpg",
      title: "grow green",
      link: "#",
    },
    {
      image: "/images/gallery/g-guitarist.jpg",
      title: "guitarist",
      link: "#",
    },
    {
      image: "/images/gallery/g-palmeira.jpg",
      title: "palmeira",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <CenterHeading
          title="Recent Works"
          heading="We love what we do, check out some of our latest works"
          titleColour="text-[#39B54A]"
          headingColour="text-white"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 pt-4">
          {worksData.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
