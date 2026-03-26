"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryContent } from "@/lib/content";

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) =>
      c === 0 ? galleryContent.images.length - 1 : c - 1
    );
  const next = () =>
    setCurrent((c) =>
      c === galleryContent.images.length - 1 ? 0 : c + 1
    );

  return (
    <section className="bg-white py-[100px] lg:py-[140px]">
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
          {galleryContent.headingStart}{" "}
          <em className="italic">{galleryContent.headingAccent}</em>{" "}
          {galleryContent.headingEnd}
        </motion.h2>
      </div>

      {/* Slider */}
      <div className="relative mt-16">
        <div
          className="relative mx-auto overflow-hidden"
          style={{
            maxWidth: 1400,
            height: "clamp(300px, 45vw, 620px)",
            borderRadius: 20,
            marginLeft: 60,
            marginRight: 60,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={galleryContent.images[current]}
                alt={`Gallery image ${current + 1}`}
                fill
                className="object-cover"
                style={{ borderRadius: 20 }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 lg:left-4"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M13 4l-6 6 6 6"
              stroke="#221e20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 lg:right-4"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 4l6 6-6 6"
              stroke="#221e20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
