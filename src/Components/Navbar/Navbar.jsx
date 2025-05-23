import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import '../Navbar/Navbar.css'

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/exploreGardening">Explore Gardeners</NavLink>
      </li>
      <li>
        <NavLink to="/browserTips">Browse Tips </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/gardenTips"> Garden Tip</NavLink>
          </li>
          <li>
            <NavLink to="/myTips">My Tips</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 sticky top-0 z-50">
      {/* Logo and Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          <h2 className="text-2xl font-bold flex items-center gap-1">
            <span className="text-black">Gardening</span>
            <span className="text-orange-500">AREA</span>
          </h2>
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Login/Logout */}
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogOut} className="btn btn-outline btn-sm">
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="btn btn-outline btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
