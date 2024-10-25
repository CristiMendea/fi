"use client";
import Image from "next/image";
import React from "react";
import myImage from "@/public/myImage.jpg";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",

              duration: 0.2,
            }}
          >
            <Image
              src={myImage}
              alt="My image"
              width={190}
              height={190}
              quality="95"
              priority={true}
              className=" rounded-full object-cover border-[0.35rem] border-white shadow-xl h-[190px] w-[190px"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-[20px] right-[20px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffnessL: 260,
              //   damping: 10,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>
      <motion.h1
        className=" mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello I'm Cristian.</span> I'm a
        <span className="text-bold"> Frontend Developer</span> and I enjoy
        building sites & apps.{" "}
        <span>
          My focus is <span className="underline"> React (next.js)</span>
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center  gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group:hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CVCristian_Mendea.pdf"
          download
          className=" bg-white   px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV <HiDownload className="opacity-60 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/mendea-cristian-a89683134/"
          target="_blank"
          className=" bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105  cursor-pointer border border-black/10 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/CristiMendea"
          target="_blank"
          className=" bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-110 hover:scale-110  active:scale-105  cursor-pointer transition border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
