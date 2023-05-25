import React from "react";
import TestemionialsCard from "./TestemionialsCard";

const testemionialsData = [
  {
    name: "Emily",
    stars: 5,
    des: "Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment.",
  },
  {
    name: "Vincent",
    stars: 4,
    des: "The food here really refreshed me after a late night shift at the local supply depot.",
  },
  {
    name: "Hector",
    stars: 4,
    des: "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
  },
  {
    name: "Jack",
    stars: 4,
    des: "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.",
  },
];

export default function Testemionials() {
  return (
    <div className="flex flex-col bg-primary w-full text-white py-10  justify-center items-center text-center">
      <div className="flex flex-col w-4/5">
        <span className="text-4xl text-secondary">Testemionials</span>
        <div className="flex flex-wrap space-y-[10px] sm:space-y-0 md:space-y-[2px] justify-around">
          {testemionialsData.map((item) => (
            <TestemionialsCard key={item.name} props={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
