/* eslint-disable react/prop-types */

const Stripe = ({data}) => {
  return (
    <div className="max-w-72 px-4 py-3 ">
        <img className="w-36 h-6 object-contain" src={data?.url} alt="" />
    </div>
  )
}

export default Stripe