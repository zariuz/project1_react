const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default dialogsReducer;
