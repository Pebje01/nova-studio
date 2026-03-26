"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { instructorsCTAContent } from "@/lib/content";

export default function InstructorsCTA() {
  return (
    <section className="bg-cream py-[100px] lg:py-[140px]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-16 px-[30px] lg:flex-row lg:px-[60px]">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          style={{ flex: 1 }}
        >
          <h2
            className="font-serif font-normal text-brown-dark"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            {instructorsCTAContent.headingStart}{" "}
            <em className="italic">{instructorsCTAContent.headingAccent}</em>
          </h2>
          <p
            className="mt-6 max-w-[460px] text-brown-medium"
            style={{ fontSize: 16, lineHeight: "26px" }}
          >
            {instructorsCTAContent.subtitle}
          </p>
          <Link
            href="#memberships"
            className="mt-8 inline-flex items-center rounded-full bg-sage px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-sage-dark"
            style={{ fontSize: 15 }}
          >
            {instructorsCTAContent.ctaLabel}
          </Link>
        </motion.div>

        {/* Right circle image */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative"
          style={{
            width: "clamp(300px, 40vw, 500px)",
            height: "clamp(300px, 40vw, 500px)",
          }}
        >
          <div className="h-full w-full overflow-hidden rounded-full">
            <Image
              src={instructorsCTAContent.image}
              alt="Yoga instructor"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
