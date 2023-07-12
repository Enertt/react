import React from 'react';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { addUsersThunkCreator, addMessagesThunkCreator, sendMessageThunkCreator } from '../../redux/messages_reduser';


class MessagesContainer extends React.Component {

    componentDidMount() {
        this.props.addUsersThunkCreator();
    };

    render() {

        return <Messages
                anotherProps = { this.props }
                appState = {this.props.appState}
                usersData_forMessages = {this.props.usersData_forMessages}
                userDialogsData_forMessage = {this.props.userDialogsData_forMessage}
                dialogsCount = {this.props.dialogsCount}
                messagesCount = {this.props.messagesCount}
                isFetching = {this.props.isFetching}
                addMessagesThunkCreator = {this.props.addMessagesThunkCreator}
                sendMessageThunkCreator = {this.props.sendMessageThunkCreator}
                activeDialog = {this.props.activeDialog}
                />
    }
}

let mapStateToProps = (state) => ({

    appState: state,
    usersData_forMessages: state.messagesReduser.usersData,
    userDialogsData_forMessage: state.messagesReduser.userDialogsData,
    dialogsCount: state.messagesReduser.dialogsCount,
    messagesCount: state.messagesReduser.messagesCount,
    activeDialog: state.messagesReduser.activeDialog,
    isFetching: state.messagesReduser.isFetching,
});

let AuthRedirectComponent = withAuthRedirect(MessagesContainer);

export default connect(mapStateToProps, { addUsersThunkCreator, addMessagesThunkCreator, sendMessageThunkCreator }) (AuthRedirectComponent);