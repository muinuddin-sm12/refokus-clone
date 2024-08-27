/* eslint-disable react/prop-types */
const MarqueeImg = ({ value }) => {
  return (
    <div className="w-full px-6 py-3">
      <img className="w-36 h-6 object-contain" src={value?.url} alt="" />
    </div>
  );
};

export default MarqueeImg;
