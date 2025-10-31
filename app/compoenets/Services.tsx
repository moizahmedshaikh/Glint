"use client";
import { motion } from "framer-motion";
import { Paintbrush, Grid, Megaphone, Globe, Box, Code } from "lucide-react";
import CenterHeading from "./CenterHeading";

export default function ServicesSection() {
  const services = [
    {
      icon: <Paintbrush className="text-green-600 w-8 h-8" />,
      title: "Brand Identity",
      description:
        "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.",
    },
    {
      icon: <Grid className="text-green-600 w-8 h-8" />,
      title: "Illustration",
      description:
        "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.",
    },
    {
      icon: <Megaphone className="text-green-600 w-8 h-8" />,
      title: "Marketing",
      description:
        "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.",
    },
    {
      icon: <Globe className="text-green-600 w-8 h-8" />,
      title: "Web Design",
      description:
        "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.",
    },
    {
      icon: <Box className="text-green-600 w-8 h-8" />,
      title: "Packaging Design",
      description:
        "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.",
    },
    {
      icon: <Code className="text-green-600 w-8 h-8" />,
      title: "Web Development",
      description:
        "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <CenterHeading
          title="What We Do"
          heading="We’ve got everything you need to
          launch and grow your business"
          titleColour="text-[#39B54A]"
          headingColour="text-black"
        />
        <div className="w-24 h-[1px] bg-gray-200 mx-auto mt-4"></div>
      </div>

      <div className="grid text-3 grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div>{service.icon}</div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-500 Text leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
