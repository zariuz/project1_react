import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from '../../redux/dialogs-reducer';

const Dialogs = props => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map(m => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesArea}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.textarea}>
          <textarea
            value={newMessageBody}
            placeholder='Enter your message'
            onChange={onNewMessageChange}
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
