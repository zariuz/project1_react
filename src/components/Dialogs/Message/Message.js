import React from "react";
import s from "./../Dialogs.module.css";

const Message = ({ message }) => <div className={s.dialog}>{message}</div>;

export default Message;
