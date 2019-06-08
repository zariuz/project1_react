import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map(m => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let message = newMessageElement.current.value;
    alert(message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesArea}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.textarea}>
          <textarea ref={newMessageElement} />
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
