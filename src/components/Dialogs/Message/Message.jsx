import React from "react";
import style from "./../Dialogs.module.css";
                    
const Message = (props) => {
  return <div className={style.messages}>
    {props.message}
    {props.hello}
    </div>;
};

export default Message;
