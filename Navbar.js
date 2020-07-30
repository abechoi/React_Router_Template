import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav>
      <div className="logo">LOGO</div>
      <ul className="navlinks">
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/blogs">BLOGS</NavLink></li>
        <li><NavLink to="/projects">PROJECTS</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar;