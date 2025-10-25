import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const Navbar = () => {
  const [user, setUser] = useState(null);

  // ✅ check user state when app loads
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfully");
        setUser(null);
      })
      .catch((e) => toast.error(e.message));
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "border-b-2 border-indigo-500 pb-1"
      : "hover:text-indigo-500 pb-1";

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <NavLink to="/" className="btn bg-indigo-500 hover:bg-fuchsia-500">
          <h1 className="text-lg font-semibold text-white">GameHub</h1>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          <li>
            <NavLink className={navLinkStyle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            {user && <NavLink className={navLinkStyle} to="/games">
              Games
            </NavLink>}
          </li>
          <li>
            <NavLink className={navLinkStyle} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt={user.displayName || "User"}
                  src={
                    user.photoURL ||
                    `https://via.placeholder.com//88?name=${encodeURIComponent(
                      user.displayName || user.email
                    )}`
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="menu-title px-4 py-2">
                <span className="font-bold">{user.displayName || "User"}</span>
                <span className="text-xs text-gray-500">{user.email}</span>
              </li>
              <div className="divider my-0"></div>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/login" className="btn btn-primary">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;