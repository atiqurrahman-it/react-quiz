import React from "react";
import style from "../component/styles/Video.module.css";

const Video = ({title,noq,id}) => {
  return (
    <>
      <div className={style.video}>
        <img 
         src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title} />
        <p>{title}</p>
        <div className={style.qmeta}>
          <p>{noq} Questions</p>
          <p>Total point : {noq*5}</p>
        </div>
      </div>
    </>
  );
};

export default Video;
