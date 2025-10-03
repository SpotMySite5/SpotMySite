"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Logo2 from "@/public/images/logo-dark.png";

export default function Service({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div animate={{}} className="navigation">
          <motion.a
            animate={{ translateX: "-5rem" }}
            transition={{ delay: 2, duration: 0.5 }}
            className="navigation__button"
            href="/#services"
          >
            <span className="navigation__icon">&nbsp;</span>
          </motion.a>
          <motion.div
            initial={{ translateX: "100vw", scale: 1, opacity: 1, skewX: 20 }}
            animate={{ translateX: "-100vw", scale: 1, opacity: 1, skewX: 0 }}
            exit={{
              translateX: "-100vw",
              scale: 1,
              opacity: 0,
              display: "none",
            }}
            transition={{
              duration: 2,
              skewX: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 1.75,
              },
            }}
            className="navigation__background3"
          >
            &nbsp;
          </motion.div>
          <motion.div
            animate={{ display: "block" }}
            transition={{ delay: 2, duration: 0.2 }}
            className="navigation__nav service_letter p-36 max-lg:p-24 max-md:px-6 pt-0 max-lg:pt-0"
          >
            <div className="flex justify-center items-center py-7">
              <Image
                className="relative"
                height={80}
                src={Logo2}
                alt="Logo 01"
              />
            </div>
            <div className="letter space-bottom--xxx-large space-top--x-large">
              <div className="letter__container">
                <div className="letter__article">{children}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
