import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto text-white py-20 flex items-center gap-2">
        <Card width={"basis-1/3"} start={false} para={true} hover={"bg-zinc-700"} heading={"Up Next: Culture"} title={"Who we are"}/>
        <Card width={"basis-2/3"} start={true} para={false} hover={"bg-violet-700"} heading={"Get In Touch"} title={"Let's get to it, together."}/>
      </div>
    </div>
  );
};

export default Cards;
