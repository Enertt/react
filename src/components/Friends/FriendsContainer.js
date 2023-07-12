import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import 
{ unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC, 
    toggleFollowingInProgressAC, getUsersThunkCreator, unfollowThunkCreator
} from '../../redux/friendsReduser';

import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    };

    render() {

        return <Friends onPageChanged={this.onPageChanged} 
                anotherProps = { this.props }
                users = {this.props.users}
                usersCount = {this.props.usersCount}
                pageSize = {this.props.pageSize}
                totalUsersCount = {this.props.totalUsersCount}
                currentPage = {this.props.currentPage}
                isFetching = {this.props.isFetching}
                followingInProgress = {this.props.followingInProgress}
                unfollowThunkCreator = {this.props.unfollowThunkCreator} 
                followThunkCreator = {this.props.followThunkCreator}/>
    }
}

let mapStateToProps = (state) => ({
    users: state.friendsReduser.users,
    usersCount: state.friendsReduser.usersCount,
    pageSize: state.friendsReduser.pageSize,
    totalUsersCount: state.friendsReduser.totalUsersCount,
    currentPage: state.friendsReduser.currentPage,
    isFetching: state.friendsReduser.isFetching,
    followingInProgress: state.friendsReduser.followingInProgress
});


let FriendsContainerForRedirect = withAuthRedirect(FriendsContainer);

export default connect(mapStateToProps, { unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, 
    toggleIsFetchingAC, toggleFollowingInProgressAC, getUsersThunkCreator, unfollowThunkCreator}) (FriendsContainerForRedirect);