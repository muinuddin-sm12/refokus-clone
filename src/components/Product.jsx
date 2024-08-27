/* eslint-disable react/prop-types */
import Button from "./Button"

const Product = ({data}) => {
  return (
    <div className="w-full py-16 text-white hover:bg-blue-900">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
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