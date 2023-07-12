import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setLoginDataAC, setUrlPathAC, myAuthInfoThunkCreator, logoutThunkCreator } from '../../redux/authReduser';



class HeaderContainer extends React.Component
{

    componentDidMount() {
        this.props.myAuthInfoThunkCreator();
    };

    render() {
        return <Header { ...this.props}/>
    }

}

let mapStateToProps = (state) => ({
        loginData: state.authReduser.loginData,
        isAuth: state.authReduser.isAuth,
        urlPath: state.authReduser.urlPath
});

export default connect(mapStateToProps, {setLoginDataAC, setUrlPathAC, myAuthInfoThunkCreator, logoutThunkCreator}) (HeaderContainer);