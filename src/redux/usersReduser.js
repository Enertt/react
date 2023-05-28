// Actions
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
};

const usersReduser = (state = initialState, action) => {

    switch(action.type)
    {
        case FOLLOW:
            
            
            return {
                ...state,
                users: state.users.map( (element) => {
                    if (element.id === action.userId) {
                        return {...element, followed: true,}
                    }else{
                        return element;
                    }  
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( (element) => {
                    if (element.id === action.userId) {
                        return {...element, followed: false,}
                    }else{
                        return element;
                    }  
                })
            };
        case SET_USERS:
            let newUsers = [...action.users]
            let stateCopy = { ...state, users: newUsers}
            return stateCopy
        
        case SET_CURRENT_PAGE:

            let newPage = action.currentPage
            let stateCopyPage = { ...state, currentPage: newPage}
            return stateCopyPage
        
        case SET_TOTAL_USERS_COUNT:
            let newUsersCount = action.totalCount
            let stateCopyTotalCount = { ...state, totalUsersCount: newUsersCount}
            return stateCopyTotalCount

        case TOGGLE_IS_FETCHING:
            let newFetchingState = action.isFetching
            let stateCopyFetching = { ...state, isFetching: newFetchingState}
            return stateCopyFetching

        default: return state;
            

                
    }
};


// Action Creators
export const followAC = (userId) => ({type: FOLLOW, userId });
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });

export default usersReduser;