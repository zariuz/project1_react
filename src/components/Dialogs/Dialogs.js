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

  let dialogsData = [
    {id: 1, name: "Evgeniy"},
    {id: 2, name: "Aleksey"},
    {id: 3, name: "Olya"},
    {id: 4, name: "Lena"},
    {id: 5, name: "Alecksandra"},
  ]

  let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "I'm fine"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name="Aleksey" id="2" />
        <DialogItem name="Olya" id="3" />
        <DialogItem name="Lena" id="4" />
        <DialogItem name="Alecksandra" id="5" />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message="Hello"/>
        <Message message="I'm fine"/>
        <Message message="Yo"/>
        <Message message="Yo"/>
      </div>
    </div>
  );
}

export default Dialogs;
