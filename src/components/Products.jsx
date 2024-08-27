import Product from "./Product";

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
  return (
    <div className="mt-32">
      {products.map((elem, index) => <Product key={index} data={elem}/>)}
    </div>
  );
};

export default Products;
