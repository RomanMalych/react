import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/maps'>Maps</NavLink></li>
        <li><NavLink to='/authorization'>Authorization</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
