"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroContent.heroImage}
          alt="Yoga class"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-[30px] lg:px-[60px]">
        <div className="flex items-center justify-between">
          <div className="max-w-[680px]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-serif font-normal text-white"
              style={{
                fontSize: "clamp(40px, 6vw, 80px)",
                lineHeight: 1.1,
                letterSpacing: "-1px",
              }}
            >
              {heroContent.headingStart}{" "}
              <em className="italic">{heroContent.headingAccent}</em>{" "}
              {heroContent.headingMiddle}{" "}
              <em className="italic">{heroContent.headingAccent2}</em>{" "}
              {heroContent.headingEnd}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-6 max-w-[480px] font-sans text-white/80"
              style={{ fontSize: 16, lineHeight: "26px" }}
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-10"
            >
              <Link
                href="#memberships"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-medium text-brown-dark transition-all duration-300 hover:bg-cream"
                style={{ fontSize: 15 }}
              >
                {heroContent.ctaLabel}
              </Link>
            </motion.div>
          </div>

          {/* Circle image on right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="relative hidden lg:block"
            style={{ width: 380, height: 380 }}
          >
            <div className="h-full w-full overflow-hidden rounded-full">
              <Image
                src={heroContent.heroCircleImage}
                alt="Yoga pose"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
