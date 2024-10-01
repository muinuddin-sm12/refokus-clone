/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, heading, title, hover = "false" }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover === "true" ? "#7443ff" : "#3F3F46" }}
      className={`bg-zinc-800 rounded-xl hover:px-6 min-h-[30rem] p-5 ${width} flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>{heading}</h3>
          <IoIosArrowRoundForward className="text-2xl" />
        </div>
        <div>
          <h1 className="text-2xl font-medium mt-5">{title}</h1>
        </div>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl leading-none tracking-tight font-semibold">
              Start a project
            </h1>
            {/* <button className="py-3 px-5 rounded-full font-medium border-2 mt-5 border-zinc-300 leading-none">
              Contact us
            </button> */}
            <button className="px-4 py-[6px] rounded-full font-medium border-2 group relative mt-3">
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                  Contact us
                </div>
                <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Contact us
                </div>
              </span>
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500">Explore what drive our team.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
