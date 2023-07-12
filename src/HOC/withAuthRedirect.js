import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.authReduser.isAuth,
    };
};

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            if(this.props.isAuth){
                debugger
                
                return <Component {...this.props} />
            }else{
                return <Navigate to={'/login'} />
            }
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}