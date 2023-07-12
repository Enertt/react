import React from 'react';
import loginPageStyle from "./loginPage.module.css";
import { Field, reduxForm } from 'redux-form';
import { RenderField } from './LoginPageInputs';
import { required, validateEmail, minLengthCreator } from '../../utils/validators/validators';
import { Navigate } from 'react-router-dom';

let minLength = minLengthCreator(4);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>

        <Field 
          name="email" 
          placeholder=' Enter your email' 
          component={RenderField} 
          label="Email" 
          type="email" 
          validate={[required, validateEmail]} 
        />

      </div>

      <div>

      <Field 
        name="password" 
        placeholder=' Enter your password' 
        component={RenderField} 
        label="Password" 
        type="password" 
        validate={[required, minLength]} 
      />

      </div>

      <div className={loginPageStyle.checkRememberMe}>
        <Field

          name='rememberMe'
          type='checkbox'
          component={'input'}
        />
        <label>Remember Me</label>
      </div>

      <div className={loginPageStyle.buttonSingIn}>
        <button type="submit">
          Sign In
        </button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const LoginPage = (props) => {

  const onSubmit = (formData) => {
    debugger
    // console.log(formData);
    props.allProps.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
    <Navigate to={'/profile/userProfile/:userId*'} />
  }

  if (props.allProps.isAuth){
    return <Navigate to={`/profile/userProfile/${props.allProps.myId}`} />
  }else{
    return (
      <div className={loginPageStyle.back}>
        <div className={loginPageStyle.formBlock}>
  
          <h1>Sign In</h1>
  
          <LoginReduxForm onSubmit={onSubmit} />
  
        </div>
      </div>
    )
  }


}

export default LoginPage;