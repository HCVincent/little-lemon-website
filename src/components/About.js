import React from "react";
import chefA from "../assets/Mario and Adrian a.jpg";
import chefB from "../assets/Mario and Adrian b.jpg";

export default function About() {
  return (
    <div className="flex bg-white w-full text-primary justify-center py-20">
      <div className="flex w-4/5 justify-between  ">
        <div className="flex flex-col w-2/5">
          <h1 className="text-4xl">Little Lemon</h1>
          <h2 className="mt-2">Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.{" "}
          </p>
        </div>
        <div className="flex relative justify-end w-1/2">
          <img
            src={chefA}
            alt="chefa"
            className="object-cover overflow-hidden h-2/3"
          />
          <img
            src={chefB}
            alt="chefb"
            className="absolute object-cover overflow-hidden h-2/3 bottom-0 left-8"
          />
        </div>
      </div>
    </div>
  );
}
