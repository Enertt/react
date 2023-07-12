import React from 'react';
import userDialogStyle from './userDialog.module.css';

const UserDialog = (props) => {
  if (props.isMyMessage === true) {
    debugger
    return (
      <div className={userDialogStyle.messageBlock}>
        <div className={userDialogStyle.myMessage}>
          <span>{props.message}</span>
        </div>
      </div>
    )
  }else{
    return (
      <div className={userDialogStyle.messageBlock}>
        <div className={userDialogStyle.personsMessage}>
          <span>{props.message}</span>
        </div>
      </div>
      );
  }

  
}

export default UserDialog;