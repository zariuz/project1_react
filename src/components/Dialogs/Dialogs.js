import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Evgeniy" id="1" />
        <DialogItem name="Aleksey" id="2" />
        <DialogItem name="Olya" id="3" />
        <DialogItem name="Lena" id="4" />
        <DialogItem name="Alecksandra" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi"/>
        <Message message="Hello"/>
        <Message message="I'm fine"/>
      </div>
    </div>
  );
}

export default Dialogs;
