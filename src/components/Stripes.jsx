import Stripe from "./Stripe";

const Stripes = () => {
  var data = [
    {
      url: "https://i.postimg.cc/Njv3X0YV/666359b597d53302df1b88f5-660191f0bd52de169c0dbc94-Logo-black.png", number: '48',
    },
    {
      url: "https://i.postimg.cc/4yrrBfcY/666359b9b2d3d56a1d071ef8-633c148a12c2cf0d8c755473-61957d908c68e7c692fe642e-haufe.png", number: '2',
    },
    {
      url: "https://i.postimg.cc/63PSpWYM/666359bafc1c77261cbab22d-633c148a8b25dcfcd2e387b2-61957e512832dbf5efe8cdc6-mural.png", number: '11',
    },
    {
      url: "https://i.postimg.cc/j5kVnQdQ/6666ed38989e70633b7658b5-Singularity-logo.png", number: '2',
    },
    {
      url: "https://i.postimg.cc/wMtCXy1K/6697d300a4cce143f24735d3-sevdesk-black.png", number: '11',
    },
    {
      url: "https://i.postimg.cc/bJvcvF8w/6697d8e7a169e0b41018de63-Intesneye-logo-black.png", number: '48',
    },
  ];
  return (
    <div className="flex items-center bg-white mt-20">
      {data.map((elem, index) => (
        <Stripe key={index} data={elem} />
      ))}
    </div>
  );
};

export default Stripes;
