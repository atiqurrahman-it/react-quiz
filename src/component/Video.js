import React from "react";
import style from "../component/styles/Video.module.css";

import image from "../assets/images/3.jpg";
const Video = () => {
  return (
    <>
      <a href="quiz.html">
        <div className={style.video}>
          <img src={image} alt="Video Title" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className={style.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Video;
