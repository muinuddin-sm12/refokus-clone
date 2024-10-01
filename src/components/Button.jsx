/* eslint-disable react/prop-types */
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title}) => {
  return (
<button className="rounded-full w-40 px-4 py-2  bg-zinc-100 text-black font-medium border group relative">
<span className="relative inline-flex overflow-hidden">
  <div className="flex items-center gap-2 translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
  <span className="text-sm font-medium">{title? title: "Get Started"}</span>
  <IoIosReturnRight/>
  </div>
  <div className="absolute flex items-center gap-2 translate-y-[120%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
  <span className="text-sm font-medium">{title? title: "Get Started"}</span>
  <IoIosReturnRight/>
  </div>
</span>
</button>
  )
}

export default Button