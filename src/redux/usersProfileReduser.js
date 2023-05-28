// Actions
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userData: [],
};

const usersProfileReduser = (state = initialState, action) => {

    switch(action.type)
    {
        case SET_USER_DATA:
            let newUserData = action.newUserData;
            let stateCopyData = { ...state, userData: newUserData };
            return stateCopyData;

        default: return state;
            

                
    }
};


// Action Creators
export const setUserDataAC = (newUserData) => ({type: SET_USER_DATA, newUserData})

export default usersProfileReduser;