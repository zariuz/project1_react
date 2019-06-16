import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ id, name }) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="user" />
      <NavLink to={"/dialogs/" + id}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
