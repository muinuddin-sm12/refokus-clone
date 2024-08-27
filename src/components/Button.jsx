/* eslint-disable react/prop-types */
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title}) => {
  return (
    <div className="flex items-center justify-between w-40 px-4 py-2 bg-zinc-100 text-black rounded-full">
        <span className="text-sm font-medium">{title? title: "Get Started"}</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button