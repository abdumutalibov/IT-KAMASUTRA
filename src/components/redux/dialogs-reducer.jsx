const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  dialogs: [
    { name: "Radriges", id: 1 },
    { name: "Radriges", id: 2 },
    { name: "Radriges", id: 3 },
    { name: "Radriges", id: 4 },
  ],
  messages: [
    { message: "Hello yopta", id: 1 },
    { message: "Hello yopta", id: 2 },
    { message: "Hello yopta", id: 3 },
    { message: "Hello yopta", id: 4 },
  ],
  newMessageBody: "",
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 5, message: body }],
      }

    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;
