import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/usersReduser';
import { setUserDataAC } from '../../redux/profile_reduser';

let mapStateToProps = (state) => ({
    users: state.usersReduser.users,
    usersCount: state.usersReduser.usersCount,
    pageSize: state.usersReduser.pageSize,
    totalUsersCount: state.usersReduser.totalUsersCount,
    currentPage: state.usersReduser.currentPage,
    isFetching: state.usersReduser.isFetching,
});

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },

        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },

        
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        },

        setUserData: (newUserData) => {
            dispatch(setUserDataAC(newUserData));
        },
        
    };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;