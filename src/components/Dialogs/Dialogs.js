import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className="dialogs">
      <div className="dialogs-items">
        <div className="dialog">
          Evgeniy
        </div>
        <div className="dialog">
          Jorick
        </div>
        <div className="dialog">
          Olya
        </div>
        <div className="dialog">
          Lena
        </div>
        <div className="dialog">
          Alecksandr
        </div>
      </div>
      <div className="messages">
        <div className="message">Hi</div>
        <div className="message">Hello</div>
        <div className="message">I'm fine</div>
      </div>
    </div>
  );
}

export default Dialogs;
