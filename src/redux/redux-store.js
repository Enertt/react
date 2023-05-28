import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReduser from "./profile_reduser";
import messagesReduser from "./messages_reduser";
import usersReduser from "./usersReduser";
import usersProfileReduser from "./usersProfileReduser";

let redusers = combineReducers({
    profileReduser,
    messagesReduser,
    usersReduser,
    usersProfileReduser
});

let store = createStore(redusers);

window.store = store;

export default store;