import React from 'react';
import Messages from './Messages';
import { connect } from 'react-redux';

// const MessagesContainer = (props) => {
//     //appState={props.appState} dispatch={props.dispatch} usersData_forMessages={props.appState.messagesReduser.usersData} userDialogsData_forMessage={props.appState.messagesReduser.userDialogsData}
//     return(
//         <Messages appState={props.appState} dispatch={props.dispatch} usersData_forMessages={props.appState.messagesReduser.usersData} userDialogsData_forMessage={props.appState.messagesReduser.userDialogsData} />
//     );
// };

let mapStateToProps = (state) => {
    return {
        appState: state,
        usersData_forMessages: state.messagesReduser.usersData,
        userDialogsData_forMessage: state.messagesReduser.userDialogsData,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (action) => dispatch(action),
    };
};

const MessagesContainerRR = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainerRR;