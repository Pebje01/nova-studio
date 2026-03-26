"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contactContent } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-sage-dark py-[100px] lg:py-[140px]">
      <div className="mx-auto max-w-[1400px] px-[30px] lg:px-[60px]">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <h2
              className="font-serif font-normal text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 68px)",
                lineHeight: 1.1,
                letterSpacing: "-1px",
              }}
            >
              {contactContent.headingStart}{" "}
              <em className="italic">{contactContent.headingAccent}</em>
            </h2>
            <p
              className="mt-6 text-white/70"
              style={{ fontSize: 16, lineHeight: "26px" }}
            >
              {contactContent.subtitle}
            </p>

            <form className="mt-10 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-white/50 outline-none transition-colors focus:border-white/40"
                  style={{ fontSize: 14 }}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-white/50 outline-none transition-colors focus:border-white/40"
                  style={{ fontSize: 14 }}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-white/50 outline-none transition-colors focus:border-white/40"
                style={{ fontSize: 14 }}
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="resize-none rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-white/50 outline-none transition-colors focus:border-white/40"
                style={{ fontSize: 14 }}
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-sage px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-sage/80 md:w-auto md:self-start"
                style={{ fontSize: 15 }}
              >
                Send message
              </button>
            </form>
          </motion.div>

          {/* Circle image */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative hidden lg:block"
            style={{ width: 450, height: 450 }}
          >
            <div className="h-full w-full overflow-hidden rounded-full">
              <Image
                src={contactContent.image}
                alt="Yoga meditation"
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
