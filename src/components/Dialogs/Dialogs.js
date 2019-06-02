import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ dialogs, messages }) => {
  let dialogsElements = dialogs.map(item => {
    const { id, name } = item;
    return <DialogItem name={name} id={id} />;
  });

  let messagesElements = messages.map(item => (
    <Message message={item.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
