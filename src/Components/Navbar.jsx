import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

import { Link } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power4.inOut" }
    );
  }, []);

  return (
    <header className="navbar">
      <nav className="flex justify-between bg-purple-800 h-14 px-8 items-center text-white">
        <Link className="logo font-semibold text-2xl" to="/">
          <FaHome className="text-white text-3xl" />
        </Link>
        <Link className="appname flex items-center font-semibold" to="/">
          <FaUserTie className="text-white px-3 text-5xl font-semibold" />
          <span className="appname-full">Employee Management</span>
          <span className="appname-short">EM</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
