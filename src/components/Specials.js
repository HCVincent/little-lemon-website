import React from "react";
import salad from "../assets/foods/greek-salad.png";
import bruccheta from "../assets/foods/bruccheta.png";
import pasta from "../assets/foods/italy-noodle.png";
import fish from "../assets/foods/fish.png";
import SpecialsCard from "./SpecialsCard";

const specialMenuData = [
  {
    name: "Greek Salad",
    image: salad,
    price: "$12.99",
    des: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruccheta",
    image: bruccheta,
    price: "$ 5.99",
    des: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Pasta",
    image: pasta,
    price: "$14.99",
    des: "Pasta is made from unleavened dough consisting of ground durum wheat and water or eggs.",
  },
  {
    name: "Fish",
    image: fish,
    price: "$14.99",
    des: "Fish tacos made with mahi-mahi, cabbage slaw and crema from Petco Park, home of MLB’s San Diego Padres.",
  },
];

export default function Specials() {
  return (
    <div className="flex bg-white w-full text-primary justify-center py-20">
      <div className="flex flex-col w-4/5 ">
        <div className="flex justify-between ">
          <span className="text-4xl">Specials</span>
          <button className="btn lg:w-[400px] capitalize bg-secondary border-0 text-primary hover:bg-primary hover:text-secondary ">
            Online Menu
          </button>
        </div>
        <div className="flex flex-row mt-10 w-[80vw] md:scale-[0.80] lg:scale-[0.80] xl:transform-none min-h-[450px] overflow-y-hidden mx-auto space-x-[80px]">
          {specialMenuData.map((item) => (
            <SpecialsCard key={item.name} props={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
