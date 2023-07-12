import React from 'react';
import messagesStyle from './messages.module.css';
import User from './UsersList/User.js';
import UserDialog from './UsersList/UsersDialogs/UserDialog.js';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import Preloader from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';

const length = 1000;
const maxLength = maxLengthCreator(length);
let newMessageValue = React.createRef();

const NewMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} autoComplete='off'>

      <div className={props.valid ? messagesStyle.new_post_span : messagesStyle.new_post_span_active}>
        <span>{`Max length is ${length} symbols`}</span>
      </div>

      <div className={messagesStyle.textArea}>

        <Field
          placeholder='New message'
          name='newMessage'
          component={'input'}
          validate={[maxLength]}
          ref={newMessageValue}
        />

        <button>Send</button>

      </div>
    </form>
  )
}


const NewMessageReduxForm = reduxForm({ form: 'newMessageForm' })(NewMessageForm);


const Messages = (props) => {

  let activeDialog = props.activeDialog;

  const addNewMessage = (values) => {
    if (newMessageValue.current.value !== undefined) {
      props.sendMessageThunkCreator(activeDialog, newMessageValue.current.value);
      values.newMessage = undefined;
    }
  }

  let userArray = props.usersData_forMessages.map((element) => {

    return (
    <NavLink onClick={() => { 
        props.addMessagesThunkCreator(element.id);
    }}>
      <User userName={element.userName} photo={element.photo_small} addMessagesThunkCreator={props.addMessagesThunkCreator}/>
    </NavLink>
    )
  });


  let userDialogsArray = props.userDialogsData_forMessage.map((element) => {
    debugger
    return (
    <div className={messagesStyle.userDialogBlock}>
      <UserDialog message={element.message} isMyMessage={element.isMyMessage} />
    </div>
    )
  });


  return (

    <div className={messagesStyle.dialogsBlock}>

      {
        props.isFetching ? <Preloader isFetching={props.isFetching} /> : null
      }

      <div className={messagesStyle.dialogs}>
        {userArray}
      </div>

      <div className={messagesStyle.messagesBlock}>
        <div className={messagesStyle.messages}>
          {userDialogsArray}
        </div>
      </div>

      {(()=>{
        if(props.activeDialog !== null){
          return <NewMessageReduxForm onSubmit={addNewMessage} />;
        }
      })()}
      

    </div>
  );
}

export default Messages;