import React from "react";
import header from "../assets/header.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex bg-primary w-full text-white justify-center">
      <div className="flex w-4/5 justify-between py-10">
        <div className="flex flex-col w-1/2 justify-between">
          <div>
            <h1 className="text-secondary text-6xl">Little Lemon</h1>
            <h2 className="mt-2">Chicago</h2>
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="btn  bg-secondary border-0 text-primary hover:bg-white hover:text-secondary ">
            <Link to="/reservations">Reserve a table</Link>
          </button>
        </div>
        <img
          src={header}
          alt="header"
          className="h-[400px] object-cover overflow-hidden"
        />
      </div>
    </div>
  );
}
