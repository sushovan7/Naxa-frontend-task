import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center p-4 justify-between  max-w-7xl mx-auto bg-[#f4f4f4]">
      <Link to="/">
        <img
          src="https://naxa.com.np/792f5bf2487bd27628a54fe64a712630.png"
          alt=""
          width={120}
        />
      </Link>
      <div className="flex items-center gap-6">
        <NavLink
          to="/map"
          className={({ isActive }) =>
            isActive ? "text-[#124BF4]" : "text-[#333132]"
          }
        >
          Map
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive }) =>
            isActive ? "text-[#124BF4]" : "text-[#333132]"
          }
        >
          Form
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
