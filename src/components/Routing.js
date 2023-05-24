import React from "react";
import { Routes, Route } from "react-router-dom";
import Reservations from "../pages/Reservations";
import HomePage from "../pages/HomePage";

export default function Routing() {
  return (
    <div className="flex min-h-[800px] w-full bg-primary justify-center">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/about" element={<About />} /> */}

        <Route path="/Reservations" element={<Reservations />} />

        {/* <Route path="/order" element={<Order />} />

      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} /> */}
      </Routes>
    </div>
  );
}
