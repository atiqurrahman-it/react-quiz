import React from "react";
import style from "../../component/styles/Summary.module.css";

import image from "../../assets/images/success.png";
const Summary = () => {
  return (
    <div className={style.summary}>
      <div className={style.point}>
        {/* progress bar will be placed here */}
        <p className={style.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={style.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
