import React from "react";
import Account from "./Account";

import logo from "../../assets/images/logo-bg.png";
import style from "../styles/Nav.module.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className={style.nav}>
        <ul>
          <li>
            <Link to="/" href="index.html" className={style.brand} >
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </Link>
          </li>
        </ul>

        <Account/>


      </nav>
    </div>
  );
};

export default Nav;
