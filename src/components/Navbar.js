import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex text-primary justify-between h-24 w-4/5 text-center items-center">
      <Link to="/">
        <img
          alt="logo"
          src={logo}
          className="h-full w-48 rounded hover:border hover:border-gray-200 p-2"
        />
      </Link>
      <div className="hidden  md:flex space-x-1 ">
        <Link to="/">
          <button className="btn p-3 capitalize bg-white border-0 text-primary hover:bg-primary hover:text-secondary ">
            Home
          </button>
        </Link>
        <Link to="/">
          <button className="btn p-3 capitalize bg-white border-0 text-primary hover:bg-primary hover:text-secondary">
            About
          </button>
        </Link>
        <Link to="/">
          <button className="btn p-3 capitalize bg-white border-0 text-primary hover:bg-primary hover:text-secondary">
            Menu
          </button>
        </Link>
        <Link to="/reservations">
          <button className="btn p-3 capitalize bg-white border-0 text-primary hover:bg-primary hover:text-secondary">
            Reservations
          </button>
        </Link>
        <Link to="/">
          <button className="btn p-3 capitalize bg-white border-0 text-primary hover:bg-primary hover:text-secondary">
            Order Online
          </button>
        </Link>
        <Link to="/">
          <button className="btn p-3 capitalize bg-white border-0 text-primary hover:bg-primary hover:text-secondary">
            Login
          </button>
        </Link>
      </div>
      <div className="dropdown dropdown-left flex md:hidden">
        <label
          tabIndex={0}
          className="btn m-1 bg-white text-primary border-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-white text-primary rounded-box w-52"
        >
          <li>
            <button className="btn p-2 bg-white border-0 text-primary hover:bg-primary hover:text-secondary bg-white border-0 text-primary hover:bg-primary hover:text-secondary">
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button className="btn p-2 bg-white border-0 text-primary hover:bg-primary hover:text-secondary">
              <Link to="/">About</Link>
            </button>
          </li>
          <li>
            <button className="btn p-2 bg-white border-0 text-primary hover:bg-primary hover:text-secondary">
              <Link to="/">Menu</Link>
            </button>
          </li>
          <li>
            <button className="btn p-2 bg-white border-0 text-primary hover:bg-primary hover:text-secondary">
              <Link to="/reservations">Reservations</Link>
            </button>
          </li>
          <li>
            <button className="btn p-2 bg-white border-0 text-primary hover:bg-primary hover:text-secondary">
              <Link to="/">Order Online</Link>
            </button>
          </li>
          <li>
            <button className="btn p-2 bg-white border-0 text-primary hover:bg-primary hover:text-secondary">
              <Link to="/">Login</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
