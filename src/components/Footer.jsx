const Footer = () => {
  return (
    <div className="w-full text-white">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
          <div className="flex items-center gap-10 mt-8">
            {["privacy policy", "cookie policy", "impressum", "terms"].map(
              (item, index) => (
                <a
                  href="#"
                  className="block text-zinc-600 mt-2 capitalize"
                  key={index}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
        <div className="basis-1/2 flex gap-3">
          <div className="basis-1/3">
            <h4 className="mb-6 text-zinc-600 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a
                href="#"
                className="block text-zinc-600 mt-2 capitalize"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-6 text-zinc-600 capitalize">sitemap</h4>
            {["home", "work", "career", "contact"].map((item, index) => (
              <a
                href="#"
                className="block text-zinc-400 mt-2 capitalize"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end mt-10 gap-6">
            <p className="text-right">
              Refokus is a pioneering digital agency driven by desing and
              empowered by technology.
            </p>
            <div className="flex gap-3 items-center">
              <span className="text-[20px] font-bold italic">W</span>
              <p className="text-[14px]">Enterprise Partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
