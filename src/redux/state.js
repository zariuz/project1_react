const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi Yo", likesCount: 15 },
        { id: 2, message: "Hello", likesCount: 25 },
        { id: 3, message: "Welcome", likesCount: 5 },
        { id: 4, message: "Yo people", likesCount: 12 }
      ],
      newPostText: "it-kamasutra.com"
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Evgeniy" },
        { id: 2, name: "Aleksey" },
        { id: 3, name: "Olya" },
        { id: 4, name: "Lena" },
        { id: 5, name: "Alecksandra" }
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "I'm fine" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" }
      ],
      newMessageBody: ""
    },

    sidebar: {}
  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default store;
window.store = store;
