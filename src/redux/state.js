let rerenderEntireTree = () => {
  console.log("State changed");
};

let state = {
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
    ]
  },

  sidebar: {}
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
};

export default state;
