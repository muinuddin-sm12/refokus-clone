import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";
const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D, we showcase Arqitel approach and show how migratio data translated into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with out thinking about Ai, insudtry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards adn amazing people - so we made anoter showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes adn custom code that ultimately allows their team to update content regularly and with case.",
      live: true,
      case: false,
    },
  ];

  const [position, setPosition] = useState(0);
  const mover = (value) => {
    setPosition(value * 15);
  };

  return (
    <div className="relative mt-32 pt-10 pb-20">
      {products.map((elem, index) => (
        <Product key={index} data={elem} count={index} mover={mover} />
      ))}
      <div className="absolute top-10 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[20rem] h-[15rem] left-[45%] rounded-lg overflow-hidden"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100 p-8 "
          >
            <img
              src="https://i.postimg.cc/Px2Rk840/Customized-Polaroid-Prints.jpg"
              className="rounded-lg h-full w-full object-cover"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200 p-8"
          >
            <img
              src="https://i.postimg.cc/tJJmRCvJ/Premium-PSD-Portrait-torn-paper-photo-frame-mockup.jpg"
              className="rounded-lg h-full w-full object-cover"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300 p-8"
          >
            <img
              src="https://i.postimg.cc/wMr418nV/Premium-PSD-Realistic-Portrait-Paper-Frame-Photo-Mockup.jpg"
              className="rounded-lg h-full w-full object-cover"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400 p-8"
          >
            <img
              src="https://i.postimg.cc/ryZPnxzr/Premium-PSD-Vintage-Torn-Paper-Frame-Mockup.jpg"
              className="rounded-lg h-full w-full object-cover"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500 p-8"
          >
            <img
              src="https://i.postimg.cc/dt7Sz3TS/Tent-Card-Printing.jpg"
              className="rounded-lg h-full w-full object-cover"
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
