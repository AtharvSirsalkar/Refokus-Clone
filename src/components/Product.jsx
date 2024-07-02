import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

function Product({ val, mover, count }) {
  return (
    <div className={`w-full pb-5 pt-5 h-[18.8rem] text-white `}>
      <motion.div
        whileHover={{ backgroundColor: val.color, height: "15rem" }}
        onMouseEnter={() => {
          mover(count);
        }}
        className={`w-full px-32 ease-out duration-200 hover:h-[14rem] h-[12rem] flex items-center justify-between`}
      >
        <h1 className="text-5xl capitalize font-medium">{val.title}</h1>
        <div className="detl w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex gap-5 items-center">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Product;
