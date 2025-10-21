import React from "react";
import { NavLink } from "react-router";
// import logo from "/src/assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/"}>Games</NavLink>
              <NavLink to={"/"}>Home</NavLink>
            </ul>
          </div>
          <a class="btn bg-indigo-500 hover:bg-fuchsia-500">
            <h1 className="text-lg font-semibold text-white">GameHub</h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Games</NavLink>
            <NavLink to={"/"}>Home</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
