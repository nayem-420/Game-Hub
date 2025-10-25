import { Link, NavLink } from "react-router";
import person from "../assets/person.png";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return isActive
      ? "border-b-2 border-indigo-500 pb-1"
      : "hover:text-indigo-500 pb-1";
  };
  
  return (
    <div>
      {/* <div className="bg-red-600">{user && user.email}</div> */}
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
              <li>
                <NavLink className={navLinkStyle} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkStyle} to="/games">
                  Games
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkStyle} to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn bg-indigo-500 hover:bg-fuchsia-500">
            <h1 className="text-lg font-semibold text-white">GameHub</h1>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <NavLink className={navLinkStyle} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkStyle} to={"/games"}>
                Games
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkStyle} to={"/about"}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={person} />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <NavLink
              to="/login"
              className="btn btn-primary w-24 md:w-auto"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;