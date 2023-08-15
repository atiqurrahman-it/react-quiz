import React from "react";
import style from "../styles/Account.module.css";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
const Account = () => {
  const { user,logOutUser } = useAuth();
  return (
    <>
      <div className={style.account}>
        {user ? (
          <>
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            <span> {user.displayName} </span>
            <span className="material-icons-outlined" title="Logout" onClick={logOutUser}>
              logout
            </span>
          </>
        ) : (
          <>
            <Link to="/singUp">Signup</Link>
            <Link to="/login">login</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Account;
