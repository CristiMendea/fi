import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import placeholder from "@/public/placeholder.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Craiova, Romania",
    description:
      "I completed my Bachelor of Science in Computer Science after four years of study. Immediately after graduation, I secured a position as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2011 - 2015",
  },
  {
    title: "Front-End Developer",
    location: "Craiova",
    description:
      "I worked for 6 years at Inside Media Communication, where I was responsible for delivering designs into pixel-perfect HTML/CSS code. I ensured that all web pages were fully responsive and cross-browser compatible, optimizing user experience across a variety of devices and platforms. My role also involved collaborating with design and development teams to ensure that all projects met high-quality standards.",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I was contracted to IBM, where I worked on a significant project for Discount Tire involving the process of A/B Testing in Adobe Target",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Todo",
    description: "LoremIpsum",
    tags: ["React", "Next.js", "test", "Tailwind"],
    imageUrl: placeholder,
  },
  {
    title: "test",
    description: "LoremIpsum",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: placeholder,
  },
  {
    title: "test",
    description: "LoremIpsum",
    tags: ["React", "Next.js", "test", "test", "Framer"],
    imageUrl: placeholder,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Framer Motion",
] as const;
