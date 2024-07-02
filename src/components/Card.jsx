import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover === "true" ? "#7443FF" : "#3E3E46" }}
      className={` w-1/2 bg-zinc-800 p-5 rounded-xl hover:px-8 ease-out duration-200 ${width} min-h-[30rem] flex flex-col justify-between `}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Insights and behind</h1>
        <h1 className="text-3xl font-medium mt-5">the scenes</h1>
      </div>
      <div className="down w-full mt-60">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] mt-5">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
