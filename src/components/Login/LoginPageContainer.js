import React from 'react';
import LoginPage from './LoginPage';
import { connect } from 'react-redux';
// import { setEmailAC, setPasswordAC, setRememberMeAC } from '../../redux/formReduser';
import { loginThunkCreator, logoutThunkCreator } from '../../redux/authReduser';



const LoginPageContainer = (props) => {

    return <LoginPage allProps={props} />

}

let mapStateToProps = (state) => ({
    isAuth: state.authReduser.isAuth,
    myId: state.authReduser.loginData.id,
});

export default connect(mapStateToProps, { loginThunkCreator })(LoginPageContainer);