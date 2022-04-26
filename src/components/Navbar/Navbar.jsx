import React from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item }>
        <NavLink to='/profile' activeclassname={style.activeLink}>Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/dialogs' href="./dialogs">Message</NavLink>
      </div><div className={style.item}>
        <NavLink to='/users' href="./dialogs">User</NavLink>
      </div>
      <div className={style.item}>
        <div>Music</div>
      </div>
      <div className={style.item}>
        <div>Settings</div>
      </div>
    </nav>
  );
};

export default Navbar;
