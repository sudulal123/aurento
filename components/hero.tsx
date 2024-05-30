"use client";

import Image from "next/image";
import { Button } from "@components";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title animate-slidein300">
          Lease with ease
        </h1>

        <p className="hero__subtitle animate-slidein500">
          Turning dreams into drives
        </p>

        <Button
          title="Explore more"
          containerStyles="bg-primary-teal text-white rounded-full mt-10 animate-slidein700 hover:bg-green-600"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <motion.div
          animate={{ x: -50 }}
          className="hero__image"
          transition={{ delay: 1 }}
        >
          <Image src="/porsche911.png" alt="hero" fill className="object-contain" />
        </motion.div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
