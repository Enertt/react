import React from 'react';
import messagesStyle from './messages.module.css';
import User from './UsersList/User.js';
import UserDialog from './UsersList/UsersDialogs/UserDialog.js';

const Messages = (props) => {
  

  let sendNewMessage = React.createRef();

  let addNewMessage = () => {
    let myMessage = sendNewMessage.current.value;
    props.sendMessage({type: 'SEND-MESSAGE', property: myMessage});
    sendNewMessage.current.value = '';
  };

  let userArray = props.usersData_forMessages.map((element) => {
      return (
        <User linkTo={`/messages/dialogs/${element.id}`} name={element.name} lastName={element.lastName} />
      )
    });
  

  let userDialogsArray = props.userDialogsData_forMessage.map((element) => {

      return (
        <UserDialog message={element.message} isMyMessage={element.id} />
      )
    });

  return (
    <div className={messagesStyle.dialogsBlock}>

      <div className={messagesStyle.dialogs}>
        {userArray}
      </div>

      <div className={messagesStyle.messages}>
        {userDialogsArray}
      </div>

      <div className={messagesStyle.textArea}>
        <textarea placeholder='New message' ref={sendNewMessage} /*onChange={messageChange} value={props.appState.newMessageBody}*/></textarea>
        <button onClick={addNewMessage}>Send</button>
      </div>

    </div>
  );
}

export default Messages;