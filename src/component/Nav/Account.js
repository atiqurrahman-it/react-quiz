import React from "react";
import style from "../styles/Account.module.css";
import { Link } from "react-router-dom";
const Account = () => {
  return (
    <>
      <div className={style.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="/singUp">Signup</Link>
        {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
      </div>
    </>
  );
};

export default Account;
