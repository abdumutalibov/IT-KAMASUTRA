const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const initialState = {
  posts: [
    { id: 1, messages: "Hi, how are you? ", likesCount: 12 },
    { id: 2, messages: "It's my first post  ", likesCount: 43 },
    { id: 3, messages: "How old are you  ", likesCount: 34 },
    { id: 4, messages: "It's my first post  ", likesCount: 23 },
    { id: 5, messages: "It's my first post  ", likesCount: 65 },
  ],
  newPostText: "it- kamasutra.com",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        messages: state.newPostText,
        likesCount: 0,
      };
      return  {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { 
        ...state ,
        newPostText:action.newText,
      };
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
