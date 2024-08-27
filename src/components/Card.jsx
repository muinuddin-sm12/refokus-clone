/* eslint-disable react/prop-types */
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover }) => {
  return (
    <div className={`bg-zinc-800 rounded-xl hover:${hover} hover:px-8 transition-all min-h-[30rem] p-5 ${width} flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>heading</h3>
          <IoIosArrowRoundForward className="text-2xl" />
        </div>
        <div>
          <h1 className="text-2xl font-medium mt-5">whatever heading</h1>
        </div>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl leading-none tracking-tight font-semibold">
              Start a project
            </h1>
            <button className="py-3 px-5 rounded-full border mt-5 border-zinc-50 leading-none">
              button
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
