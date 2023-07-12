import React, { useEffect} from 'react';
import UsersProfile from './UsersProfile';
import axios, * as others from 'axios';
import { connect, useDispatch } from 'react-redux';
import { setUserDataThunkCreator, addPostAC, startChattingThunkCreator} from '../../redux/profile_reduser';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

function UsersProfileContainer(props) {
    const { userId } = useParams();
     let currUserId = userId

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + currUserId)
            .then((response) => {
                props.setUserData(response.data);
            });
    }, [userId]);
    return (

        <div>
            <UsersProfile { ...props } />
        </div>
    );
}

let AuthRedirectComponent = withAuthRedirect(UsersProfileContainer);

let mapStateToProps = (state) => ({
    postsData: state.profileReduser.postsData,
    userData: state.profileReduser.userData,
    postsData_count: state.profileReduser.postsData_count,
    myId: state.authReduser.loginData.id,
});

let mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (newUserData) => {
            dispatch(setUserDataThunkCreator(newUserData))
        },

        addPost: (text) => {
            dispatch(addPostAC(text))
        },

        startChattingThunkCreator: (userId) => {
            dispatch(startChattingThunkCreator(userId))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);