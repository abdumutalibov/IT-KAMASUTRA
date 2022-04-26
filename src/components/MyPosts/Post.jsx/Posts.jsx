import React from "react";
import style from "./Posts.module.css";
const Posts = (props) => {
  return (
    <>

    <div className={style.item}>
      <img alt="d" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIpMOJLoePpjfIPemZz1PlThgBD_oU7N8zw&usqp=CAU" />
      <div>post 1 </div>
      <div>
{props.message}
{props.likesCount}
      <span> like</span>
      </div>
    </div> 
    {/* <input value='8'/>  */}
       </>
  );
};

export default Posts;
