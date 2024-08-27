import MarqueeImg from "./MarqueeImg";
import Marquee from "react-fast-marquee";
const Marquees = () => {
  var data = [
    {
      url: "https://i.postimg.cc/K87dDy8Y/666359b5306b05c2b704224d-65b2ca264ed8d89bad9b331c-Logo201.png",
    },
    {
      url: "https://i.postimg.cc/Njv3X0YV/666359b597d53302df1b88f5-660191f0bd52de169c0dbc94-Logo-black.png",
    },
    {
      url: "https://i.postimg.cc/ZqV2XF3t/666359b850995827afaa8db4-633c148b9b819badd7bbcde8-627a8d3e69e23713762e6b34-Vector.png",
    },
    {
      url: "https://i.postimg.cc/N0gZNPKk/666359b8724afca0a36e7e8d-633c148cf63c4467416f9bea-61ee848c05ba9c9caff5fd64-yahoo.png",
    },
    {
      url: "https://i.postimg.cc/4yrrBfcY/666359b9b2d3d56a1d071ef8-633c148a12c2cf0d8c755473-61957d908c68e7c692fe642e-haufe.png",
    },
    {
      url: "https://i.postimg.cc/bJrWPDHG/666359ba3497cf06ff9e8f71-633c14899b819b7aafbbcde1-627a8da607be73fd13e76134-basf.png",
    },
    {
      url: "https://i.postimg.cc/63PSpWYM/666359bafc1c77261cbab22d-633c148a8b25dcfcd2e387b2-61957e512832dbf5efe8cdc6-mural.png",
    },
    {
      url: "https://i.postimg.cc/j5kVnQdQ/6666ed38989e70633b7658b5-Singularity-logo.png",
    },
    {
      url: "https://i.postimg.cc/9fCH6QnT/6694f0ff430a1585cff47451-botify-black.png",
    },
    {
      url: "https://i.postimg.cc/Qx7LV7L1/66979aab7dc661744003a210-logo-black.png",
    },
    {
      url: "https://i.postimg.cc/wMtCXy1K/6697d300a4cce143f24735d3-sevdesk-black.png",
    },
    {
      url: "https://i.postimg.cc/2jMRzwtC/6697d485bb37c8fc880cdfad-bcgp-1.png",
    },
    {
      url: "https://i.postimg.cc/FKpXNXM6/6697d76e013990180ea2be31-jungle-logo-black.png",
    },
    {
      url: "https://i.postimg.cc/bJvcvF8w/6697d8e7a169e0b41018de63-Intesneye-logo-black.png",
    },
  ];
  return (
    <div className="bg-white py-40">
      <Marquee>
        {data.map((elem, index) => (
          <MarqueeImg key={index} value={elem} />
        ))}
      </Marquee>
    </div>
  );
};

export default Marquees;
