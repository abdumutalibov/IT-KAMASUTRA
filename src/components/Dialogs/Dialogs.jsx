import React from "react";

import DialogsItem from "./DialogItem/DialogsItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
const Dialogs = (props) => {

  let state = props.dialogsPage
  let dialogsElements = state.dialogs.map((d) => (<DialogsItem name={d.name} id={d.id} key={d.id} />));
  let messagesElement = state.messages.map((m) => (<Message message={m.message} key={m.id} id={m.id}/>));
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElements}</div>
      <div className={style.message}>
        {messagesElement}
        <div>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
