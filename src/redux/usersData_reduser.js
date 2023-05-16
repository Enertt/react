import { Route } from "react-router-dom";
import Messages from "../components/Messages/Messages";

let usersData_reduser = (state, action) => {   

    if (action.type === 'MESSAGES-RC') {
        state.usersData.map((arrElement) => {
            return (
                <Route path={`/messages/dialogs/${arrElement.id}`} element={<Messages usersData_forMessages={state.usersData} userDialogsData_forMessage={state.userDialogsData} />} />
            )
        })
    }
    return state;
};

export default usersData_reduser;

//==================== dont use this reduser =========================