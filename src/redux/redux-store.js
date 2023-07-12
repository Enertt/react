import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReduser from "./profile_reduser";
import messagesReduser from "./messages_reduser";
import usersReduser from "./usersReduser";
import authReduser from "./authReduser";
import friendsReduser from "./friendsReduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReduser } from "redux-form";
// import formReduser from "./formReduser";


let redusers = combineReducers({
    profileReduser,
    messagesReduser,
    usersReduser,
    authReduser,
    friendsReduser,
    form: formReduser,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;