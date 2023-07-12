import { usersAPI } from "../api/api";
import { authAPI } from "../api/api";

const SET_LOGIN_DATA = 'SET-LOGIN-DATA';
const SET_URL_PATH = 'SET-URL-PATH';

let initialState = {
    loginData: {
        email: null,
        id: null,
        login: null
    },

    isAuth: false,

    urlPath: '/login',

};



const authReduser = (state = initialState, action) => {
    
    switch (action.type)
    {
        case SET_LOGIN_DATA:
            
            return{
                ...state,
                ...state.loginData,
                loginData: {email: action.newLoginData.email, id: action.newLoginData.id, login: action.newLoginData.login},
                isAuth: action.newLoginData.auth
            }
        
        case SET_URL_PATH:
            return{
                ...state,
                urlPath: `/profile/userProfile/${state.loginData.id}`
            }
        
        default:
            return { ...state, loginData: {...state.loginData}}
    }
};

export const setLoginDataAC = (email, id, login, auth) => ({type: SET_LOGIN_DATA, newLoginData: {email, id, login, auth}});
export const setUrlPathAC = () => ({type: SET_URL_PATH})

export const myAuthInfoThunkCreator = () => {
    return (dispatch) => {

        usersAPI.myAuthInfo().then(data => {
            if(data.resultCode === 0)
            {
                
                let email = data.data.email;
                let id = data.data.id;
                let login = data.data.login;
                dispatch(setLoginDataAC(email, id, login, true))
            };
        });
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if(response.data.resultCode === 0)
            {
                dispatch(myAuthInfoThunkCreator())
            };
        });
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if(response.data.resultCode === 0)
            {
                dispatch(setLoginDataAC(null))
            };
        });
    }
}

export default authReduser;