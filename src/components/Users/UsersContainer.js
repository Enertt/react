import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import 
{ followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC, 
    toggleFollowingInProgressAC, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator,
    findUsersThunkCreator, 
} from '../../redux/usersReduser';

import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    };

    render() {

        return <Users onPageChanged={this.onPageChanged} 
                anotherProps = { this.props }
                users = {this.props.users}
                usersCount = {this.props.usersCount}
                pageSize = {this.props.pageSize}
                totalUsersCount = {this.props.totalUsersCount}
                currentPage = {this.props.currentPage}
                isFetching = {this.props.isFetching}
                followingInProgress = {this.props.followingInProgress}
                unfollowThunkCreator = {this.props.unfollowThunkCreator} 
                followThunkCreator = {this.props.followThunkCreator}
                findUsersThunkCreator = {this.props.findUsersThunkCreator}
                />
    }
}

let mapStateToProps = (state) => ({
    users: state.usersReduser.users,
    usersCount: state.usersReduser.usersCount,
    pageSize: state.usersReduser.pageSize,
    totalUsersCount: state.usersReduser.totalUsersCount,
    currentPage: state.usersReduser.currentPage,
    isFetching: state.usersReduser.isFetching,
    followingInProgress: state.usersReduser.followingInProgress
});

let UsersContainerForRedirect = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, 
    toggleIsFetchingAC, toggleFollowingInProgressAC, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator,
    findUsersThunkCreator}) (UsersContainerForRedirect);