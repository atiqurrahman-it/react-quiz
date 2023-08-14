import React from "react";
import Nav from "../component/Nav/Nav";
import style from "../component/styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={style.main}>
        <div className={style.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
