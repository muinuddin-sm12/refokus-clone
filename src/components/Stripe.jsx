/* eslint-disable react/prop-types */

const Stripe = ({data}) => {
  return (
    <div className="w-[16.66%] px-6 py-3 border border-l-zinc-300 flex items-center justify-between">
        <img className="w-36 h-6 object-contain" src={data?.url} alt="" />
        <span className="font-semibold">{data?.number}</span>
    </div>
  )
}
export default Stripe