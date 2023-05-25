import React from "react";
import bike from "../assets/bike.png";

export default function SpecialsCard({ props }) {
  return (
    <div className="flex flex-col justify-between w-[300px]">
      <div className="flex flex-col">
        <img
          src={props.image}
          alt={props.name}
          className="h-[200px] object-cover bg-primary"
        />
        <div className="flex mt-5 justify-between">
          <span>{props.name}</span>
          <span>{props.price}</span>
        </div>
        <p className="text-gray-400 font-secondary">{props.des}</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="btn w-2/3 p-0 text-[8pt] capitalize bg-secondary border-0 text-primary hover:bg-primary hover:text-secondary ">
          Order a delivery
        </button>
        <img alt="bike" src={bike} className="h-[20px] ml-5" />
      </div>
    </div>
  );
}
