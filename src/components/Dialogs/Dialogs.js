import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Evgeniy</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Aleksey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Olya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Lena</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/5'>Alecksandra</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hello</div>
        <div className={s.message}>I'm fine</div>
      </div>
    </div>
  );
}

export default Dialogs;
