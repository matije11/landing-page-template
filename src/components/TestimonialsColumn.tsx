"use client";
import React from "react";
import Image from "next/image";
import { type testimonials } from "@/sections/Testimonials";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  testimonials: typeof testimonials;
  className?: string;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map((testemonial: any) => (
              <div key={testemonial.text} className="card">
                <div>
                  {testemonial.text}
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      src={testemonial.imageSrc}
                      alt={testemonial.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {testemonial.name}
                      </div>
                      <div className="leading-5 tracking-tight">
                        {testemonial.username}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
