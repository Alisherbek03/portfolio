import React, { useState } from "react";

import "./navbar.scss";
import { Link } from "react-router-dom";

import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="top">
      <div className="container navbar-container">
        <nav>
          <h1>Alisher Abdurahimov</h1>
          <ul className={isOpen ? "nav-link active" : "nav-link"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="icon">
            <CiMenuBurger onClick={toggleMenu} className="menu-btn" />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
