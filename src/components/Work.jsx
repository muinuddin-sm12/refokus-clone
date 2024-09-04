import { useScroll } from "framer-motion";
import { useState } from "react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://i.postimg.cc/Px2Rk840/Customized-Polaroid-Prints.jpg",
      top: "56%",
      left: "51%",
      isActive: false,
    },
    {
      url: "https://i.postimg.cc/tJJmRCvJ/Premium-PSD-Portrait-torn-paper-photo-frame-mockup.jpg",
      top: "63%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://i.postimg.cc/wMr418nV/Premium-PSD-Realistic-Portrait-Paper-Frame-Photo-Mockup.jpg",
      top: "49%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://i.postimg.cc/ryZPnxzr/Premium-PSD-Vintage-Torn-Paper-Frame-Mockup.jpg",
      top: "51%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://i.postimg.cc/dt7Sz3TS/Tent-Card-Printing.jpg",
      top: "64%",
      left: "53%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setImages(prev =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 3:
        imageShow([0]);
        break;
      case 4:
        imageShow([0, 1]);
        break;
      case 5:
        imageShow([0, 1, 2]);
        break;
      case 6:
        imageShow([0, 1, 2, 3]);
        break;
      case 8:
        imageShow([0, 1, 2, 3, 4]);
        break;
    }
  });
  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] text-white leading-none font-medium tracking-tight select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (elem) =>
              elem.isActive && (
                <img
                  className="absolute h-60 w-60 object-cover overflow-hidden rounded-md -translate-x-[50%] -translate-y-[50%]"
                  src={elem?.url}
                  style={{ top: elem.top, left: elem.left }}
                  key={elem.url}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
