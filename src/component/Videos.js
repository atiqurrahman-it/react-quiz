import React from "react";
import style from "../component/styles/Videos.module.css";
import Video from "./Video";
import { Link } from "react-router-dom";
const Videos = () => {
  return (
    <div className={style.videos}>
      <Link to="/quiz"> <Video/> </Link>
      <Link to="/quiz"> <Video/> </Link>
      <Link to="/quiz"> <Video/> </Link>
      <Link to="/quiz"> <Video/> </Link>
      <Link to="/quiz"> <Video/> </Link>
      <Link to="/quiz"> <Video/> </Link>
      <Link to="/quiz"> <Video/> </Link>
        
    </div>
  );
};

export default Videos;
