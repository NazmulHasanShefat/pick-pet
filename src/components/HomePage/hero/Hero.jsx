"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="items-center md:mt-15 mt-5 flex flex-col-reverse md:flex-row justify-between px-5 w-full max-w-[1340px] mx-auto">
      <div className="left_aria md:w-1/2 w-full  px-10">
        {/* <motion.div
          className="box"
          // Animate when this value changes:
          animate={{ scale: 2 }}
          // Fade in when the element enters the viewport:
          whileInView={{ opacity: 1 }}
          // Animate the component when its layout changes:
          layout
          // Style now supports indepedent transforms:
          style={{ x: 100 }}
        /> */}
        <motion.h1
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          className="md:text-7xl font-bold text-2xl"
        >
          Connecting Loving Homes{" "}
          <span className="primary-color">With Happy Pets</span>
        </motion.h1>
        <motion.p
          initial={{ translateX: 20 }}
          animate={{ translateX: 0 }}
          className="text-lg mt-5"
        >
          Our platform helps homeless pets find caring families through a
          simple, safe, and heartwarming adoption experience
        </motion.p>
        <div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <Link
            href={"/all-pets"}
            className="bg-emerald-700 w-max flex items-center gap-3 hover:scale-110 transition-scale duration-200 px-4 py-2 rounded-xl mt-5 cursor-pointer text-white"
          >
            Adapt Now
            <span>
              <FaArrowUpRightFromSquare />
            </span>
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="right_aria md:w-1/2 w-full "
      >
        <Image
          src={`/bannerImage.webp`}
          width={600}
          height={700}
          alt="heroImage"
          className="rounded-2xl"
        />
      </motion.div>
    </section>
  );
}
