import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi Yo', likesCount: 15 },
        { id: 2, message: 'Hello', likesCount: 25 },
        { id: 3, message: 'Welcome', likesCount: 5 },
        { id: 4, message: 'Yo people', likesCount: 12 }
      ],
      newPostText: 'it-kamasutra.com'
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Evgeniy' },
        { id: 2, name: 'Aleksey' },
        { id: 3, name: 'Olya' },
        { id: 4, name: 'Lena' },
        { id: 5, name: 'Alecksandra' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: "I'm fine" },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ],
      newMessageBody: ''
    },

    sidebar: {}
  },

  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
