"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmeLogo} alt="Acme" className="logo-ticker-img" />
            <Image
              src={quantumLogo}
              alt="Quantum"
              className="logo-ticker-img"
            />
            <Image src={echoLogo} alt="Echo" className="logo-ticker-img" />
            <Image
              src={celestialLogo}
              alt="Celestial"
              className="logo-ticker-img"
            />
            <Image src={pulseLogo} alt="Pulse" className="logo-ticker-img" />
            <Image src={apexLogo} alt="Apex" className="logo-ticker-img" />
            <Image src={acmeLogo} alt="Acme" className="logo-ticker-img" />
            <Image
              src={quantumLogo}
              alt="Quantum"
              className="logo-ticker-img"
            />
            <Image src={echoLogo} alt="Echo" className="logo-ticker-img" />
            <Image
              src={celestialLogo}
              alt="Celestial"
              className="logo-ticker-img"
            />
            <Image src={pulseLogo} alt="Pulse" className="logo-ticker-img" />
            <Image src={apexLogo} alt="Apex" className="logo-ticker-img" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};