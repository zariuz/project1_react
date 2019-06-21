const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi Yo", likesCount: 15 },
    { id: 2, message: "Hello", likesCount: 25 },
    { id: 3, message: "Welcome", likesCount: 5 },
    { id: 4, message: "Yo people", likesCount: 12 }
  ],
  newPostText: "it-kamasutra.com"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }

  // if (action.type === ADD_POST) {
  //   let newPost = {
  //     id: 5,
  //     message: state.newPostText,
  //     likesCount: 0
  //   };
  //   state.posts.push(newPost);
  //   state.newPostText = '';
  // } else if (action.type === UPDATE_NEW_POST_TEXT) {
  //   state.newPostText = action.newText;
  // }

  // return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
