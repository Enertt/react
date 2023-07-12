import { usersAPI } from "../api/api";

// Actions
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false
};

const friendsReduser = (state = initialState, action) => {

    switch (action.type) {
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((element) => {
                    if (element.id === action.userId) {
                        return { ...element, followed: false, }
                    } else {
                        return element;
                    }
                })
            };
        case SET_USERS:
            let newUsers = [...action.users]
            let stateCopy = { ...state, users: newUsers }
            return stateCopy

        case SET_CURRENT_PAGE:

            let newPage = action.currentPage
            let stateCopyPage = { ...state, currentPage: newPage }
            return stateCopyPage

        case SET_TOTAL_USERS_COUNT:
            let newUsersCount = action.totalCount
            let stateCopyTotalCount = { ...state, totalUsersCount: newUsersCount }
            return stateCopyTotalCount

        case TOGGLE_IS_FETCHING:
            let newFetchingState = action.isFetching
            let stateCopyFetching = { ...state, isFetching: newFetchingState }
            return stateCopyFetching

        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            let newFollowingProgressState = action.followingIsInProgress
            let stateCopyfollowingProgress = { ...state, followingInProgress: newFollowingProgressState }
            return stateCopyfollowingProgress

        default: return state;
    }
};


// Action Creators
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgressAC = (followingIsInProgress) => ({ type: TOGGLE_IS_FETCHING, followingIsInProgress });

export const getUsersThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(toggleIsFetchingAC(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
            dispatch(setCurrentPageAC(currentPage));
        });
    }
}

export const unfollowThunkCreator = (userId) => {

    return (dispatch) => {

        dispatch(toggleFollowingInProgressAC(true));

        usersAPI.deleteFollowingState(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId));
            };
            dispatch(toggleFollowingInProgressAC(false));
        });
    }
}

export default friendsReduser;