"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { trainersContent } from "@/lib/content";

export default function Trainers() {
  return (
    <section id="trainers" className="bg-white py-[100px] lg:py-[140px]">
      <div className="mx-auto max-w-[1400px] px-[30px] lg:px-[60px]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3 }}
          className="text-center font-serif font-normal text-brown-dark"
          style={{
            fontSize: "clamp(36px, 5vw, 68px)",
            lineHeight: 1.1,
            letterSpacing: "-1px",
          }}
        >
          {trainersContent.headingStart}{" "}
          <em className="italic">{trainersContent.headingAccent}</em>
          {trainersContent.headingEnd}
        </motion.h2>

        {/* Trainer grid */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 lg:gap-14">
          {trainersContent.trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.08 * i }}
              className="flex flex-col items-center"
            >
              <div
                className="relative overflow-hidden rounded-full"
                style={{
                  width: "clamp(180px, 20vw, 280px)",
                  height: "clamp(180px, 20vw, 280px)",
                }}
              >
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className="mt-5 text-center font-serif font-normal text-brown-dark"
                style={{ fontSize: 24, lineHeight: "30px" }}
              >
                {trainer.name}
              </h3>
              <p
                className="mt-1 text-center text-gray-light"
                style={{ fontSize: 14 }}
              >
                Experience: {trainer.experience}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
