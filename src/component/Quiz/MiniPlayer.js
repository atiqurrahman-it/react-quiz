import React from "react";
import style from "../../component/styles/MiniPlayer.module.css"
import image from "../../assets/images/3.jpg"
const MiniPlayer = () => {
  return (
    <div className={`${style.miniPlayer} ${style.floatingBtn}`}>
      <span className={` material-icons-outlined ${style.open}`}> play_circle_filled </span>
      <span className={`material-icons-outlined ${style.close}`}> close </span>
      <img src={image} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
