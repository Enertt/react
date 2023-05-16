import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReduser from "./profile_reduser";
import messagesReduser from "./messages_reduser";

let redusers = combineReducers({
    profileReduser,
    messagesReduser
});

let store = createStore(redusers);

window.store = store;

export default store;