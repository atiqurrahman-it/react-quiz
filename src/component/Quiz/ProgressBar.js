import React from "react";
import style from "../../component/styles/ProgressBar.module.css";
import Button from "../Button";
import { Link } from "react-router-dom";
const ProgressBar = () => {
  return (
    <div className={style.progressBar}>
      <div className={style.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={style.rangeArea}>
        <div className={style.tooltip}>24% Complete!</div>
        <div className={style.rangeBody}>
          <div className={style.progress} style={{width: '20%'}}></div>
        </div>
      </div>
      <Link to="/result">
        <Button className={style.next}>
           <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
};

export default ProgressBar;
