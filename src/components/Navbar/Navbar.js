import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={`${s.item} ${s.active}`}>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news">News</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
      <Friends />
    </nav>
  );
};

export default Navbar;
