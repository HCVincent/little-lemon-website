import React from "react";
import logoFooter from "../assets/logo-footer.jpg";

export default function Footer() {
  return (
    <div className="flex  bg-primary w-full text-white py-10  justify-center items-center text-start">
      <div className="flex w-4/5 justify-between">
        <img src={logoFooter} alt="logo-footer" className=" w-1/5" />
        <div className="flex w-3/5 justify-evenly">
          <div className="flex  flex-col">
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              Home
            </button>
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              About
            </button>
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              Menu
            </button>
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              Reservations
            </button>
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              Order Online
            </button>
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              Login
            </button>
          </div>
          <div className="flex flex-col">
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              Adress
            </button>
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              Phone Number
            </button>
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              Email
            </button>
          </div>
          <div className="flex flex-col">
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              Instagram
            </button>
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              Facebook
            </button>
            <button className="btn p-0 capitalize bg-primary border-0 text-white hover:bg-primary hover:text-secondary justify-start">
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
