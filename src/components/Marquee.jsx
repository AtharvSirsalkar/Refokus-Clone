import { motion } from "framer-motion";
import React from "react";

function Marquee({ url, direction }) {
  return (
    <div className="flex w-full  overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex py-10 flex-shrink-0 gap-40 pr-40"
      >
        {url.map((url, index) => (
          <img key={index} src={url} alt="" className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex gap-40 py-10 flex-shrink-0 pr-40"
      >
        {url.map((url, index) => (
          <img key={index} src={url} alt="" className="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
