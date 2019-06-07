import React from "react";
import s from "./Message.module.css";

const Message = ({ message }) => <div className={s.dialog}>{message}</div>;

export default Message;
