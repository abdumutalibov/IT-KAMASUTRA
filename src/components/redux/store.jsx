import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, messages: "Hi, how are you? ", likesCount: 12 },
        { id: 2, messages: "It's my first post  ", likesCount: 43 },
        { id: 3, messages: "How old are you  ", likesCount: 34 },
        { id: 4, messages: "It's my first post  ", likesCount: 23 },
        { id: 5, messages: "It's my first post  ", likesCount: 65 },
      ],
      newPostText: "it-kamasutra",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubcriber() {
    console.log("State change");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubcriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubcriber(this._state);
  },
};

export default store;
window.state = store;
