"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science,</span> I started working
        as a <span className="font-medium">Front-End Developer</span>. My
        favorite part of programming is the problem-solving aspect; I love the
        feeling of finally figuring out a solution to a problem. My core stack
        includes{" "}
        <span className="font-medium">
          {" "}
          HTML, CSS, JavaScript, SCSS, and React
        </span>
        . I am also familiar with{" "}
        <span className="font-medium">
          TypeScript, Next.js, and MongoDB.{" "}
        </span>{" "}
        I am currently looking for a{" "}
        <span className="font-medium">full-time position </span>as a Web
        Developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies and playing football.
      </p>
    </motion.section>
  );
}
