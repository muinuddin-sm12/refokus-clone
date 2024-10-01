/* eslint-disable react/prop-types */
import Button from "./Button"

const Product = ({data, mover, count}) => {
  return (
    <div className="w-full text-white">
        <div onMouseEnter={()=> {mover(count)}} className="max-w-screen-xl h-[15rem] mx-auto flex items-center justify-between border-b border-t border-zinc-800">
            <h1 className="text-5xl capitalize font-medium">{data?.title}</h1>
            <div className="w-1/3">
                <p className="mb-6">{data?.description}</p>
                <div className="flex items-center gap-4">
                {data?.live && <Button />}
                {data?.case && <Button title={"Case Study"}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product