import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const products = [
    {
      title: "Arqitel",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      case: false,
      color: "#5355EE",
    },
    {
      title: "TTR",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      case: false,
      color: "#3E4365",
    },
    {
      title: "YIR 2022",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      case: true,
      color: "#5D4EFF",
    },
    {
      title: "Yahoo!",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      case: true,
      color: "#24014F",
    },
    {
      title: "Cula",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      case: false,
      color: "#414C5E",
    },
    {
      title: "Layout Land",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      case: false,
      color: "#1626F3",
    },
    {
      title: "Showcase",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      case: false,
      color: "#FE9F2E",
    },
    {
      title: "Rainfall",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      case: true,
      color: "#3E45E5",
    },
    {
      title: "Silvr",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      case: false,
      color: "#FF7548",
    },
    {
      title: "Signularity",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      color: "#4C20CF",
      case: false,
    },
    {
      title: "Maniv",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      color: "#2DCB76",
      case: false,
    },
    {
      title: "Like Magic",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      color: "#4730C6",
      case: true,
    },
    {
      title: "Intenseye",
      description:
        "Aqru Executive and its employees continue to receive orders for products that are available for sale and that are already in stock",
      live: true,
      color: "#FF501A",
      case: false,
    },
  ];
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 18.8);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} count={index} mover={mover} />
      ))}
      <div className="absolute top-[-0.3%] pointer-events-none w-full h-full">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.4 }}
          className="window w-[25rem] h-[18.8rem] overflow-hidden  rounded-[5%] absolute left-[44%]  "
        >
          <motion.div
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full  "
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm"
            ></video>
          </motion.div>
          <motion.div
            className="w-full h-full"
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/website/2022/videos/yahoo.webm"
            ></video>
          </motion.div>
          <motion.div
            className="w-full h-full"
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4"
            ></video>
          </motion.div>
          <motion.div
            className="w-full h-full"
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/website/2022/videos/yearinreview.webm"
            ></video>
          </motion.div>
          <motion.div
            className="w-full h-full"
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4"
            ></video>
          </motion.div>
          <motion.div
            className="w-full h-full"
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/website/2022/videos/rainfall.webm"
            ></video>
          </motion.div>
          <motion.div
            className="w-full h-full"
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/website/2022/videos/Silvr.webm"
            ></video>
          </motion.div>
          <motion.div
            className="w-full h-full"
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/Singularity%20Promo%204_3%202024.webm"
            ></video>
          </motion.div>
          <motion.div
            className="w-full h-full"
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/website/Maniv-Compressed.mp4"
            ></video>
          </motion.div>
          <motion.div
            className="w-full h-full"
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/website/2022/videos/weglotlikemagic.webm"
            ></video>
          </motion.div>
          <motion.div
            className="w-full h-full"
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
          >
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.refokus.com/website/Intenseye_project_video_4_3.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
