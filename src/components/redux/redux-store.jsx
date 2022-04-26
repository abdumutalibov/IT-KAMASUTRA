import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer'
const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarReducer:sidebarReducer,
    usersPage: usersReducer,
});

const store = createStore(reducers);

window.store= store

export default store;