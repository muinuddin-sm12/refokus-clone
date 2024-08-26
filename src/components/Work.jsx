const Work = () => {
  var images = [
    {
      url: "https://i.postimg.cc/Px2Rk840/Customized-Polaroid-Prints.jpg",
      top: "56%",
      left: "51%",
      isActive: true,
    },
    {
      url: "https://i.postimg.cc/tJJmRCvJ/Premium-PSD-Portrait-torn-paper-photo-frame-mockup.jpg",
      top: "63%",
      left: "48%",
      isActive: true,
    },
    {
      url: "https://i.postimg.cc/wMr418nV/Premium-PSD-Realistic-Portrait-Paper-Frame-Photo-Mockup.jpg",
      top: "49%",
      left: "52%",
      isActive: true,
    },
    {
      url: "https://i.postimg.cc/ryZPnxzr/Premium-PSD-Vintage-Torn-Paper-Frame-Mockup.jpg",
      top: "51%",
      left: "47%",
      isActive: true,
    },
    {
      url: "https://i.postimg.cc/dt7Sz3TS/Tent-Card-Printing.jpg",
      top: "64%",
      left: "55%",
      isActive: true,
    },
  ];
  return (
    <div className="w-full py-24">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] text-white leading-none font-medium tracking-tight select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (elem) =>
              elem.isActive && (
                <img
                  className="absolute h-52 w-52 object-cover overflow-hidden rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem?.url}
                  style={{ top: elem?.top, left: elem?.left }}
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
