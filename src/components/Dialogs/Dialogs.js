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

  let dialogsElements = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
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
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
      </div>
    </div>
  );
}

export default Dialogs;
