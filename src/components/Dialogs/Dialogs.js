import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Evgeniy
        </div>
        <div className={s.dialog}>
          Jorick
        </div>
        <div className={s.dialog}>
          Olya
        </div>
        <div className={s.dialog}>
          Lena
        </div>
        <div className={s.dialog}>
          Alecksandr
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
