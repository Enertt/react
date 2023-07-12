// import { usersAPI } from "../api/api";

// const SET_LOGIN_DATA = 'SET-LOGIN-DATA';
// const SET_URL_PATH = 'SET-URL-PATH';

// let initialState = {
//     loginData: {
//         email: null,
//         id: null,
//         login: null,
//     },

//     isAuth: false,

//     urlPath: '/login',

// };



// const authReduser = (state = initialState, action) => {
    
//     switch (action.type)
//     {
//         case SET_LOGIN_DATA:
//             return{
//                 ...state,
//                 loginData: {...action.newLoginData},
//                 isAuth: true
//             }
        
//         case SET_URL_PATH:
//             debugger;
//             return{
//                 ...state,
//                 urlPath: `/profile/userProfile/${state.loginData.newLoginData.id}`
//             }
        
//         default:
//             return { ...state, loginData: {...state.loginData}}
//     }
// };

// export const setLoginDataAC = (newLoginData) => ({type: SET_LOGIN_DATA, newLoginData});
// export const setUrlPathAC = () => ({type: SET_URL_PATH})

// export const myAuthInfoThunkCreator = () => {
//     return (dispatch) => {

//         usersAPI.myAuthInfo().then(data => {
//             if(data.resultCode === 0)
//             {
//                 let newLoginData = data.data;
//                 dispatch(setLoginDataAC({newLoginData}))
//             };
//         });
//     }
    
// }

// export default authReduser;
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// const SET_EMAIL = 'SET-EMAIL';
// const SET_LOGIN = 'SET-LOGIN';
// const SET_REMEMBER_ME = 'SET-REMEMBER-ME';

// let initialState = {
//     formData: {
//         email: "",
//         password: "",
//         rememberMe: false,
//     },
// };

// const formReduser = (state = initialState, action) => {
    
//     switch (action.type)
//     {
//         case SET_EMAIL:
//             return { ...state, formData: {...state.formData, email: action.newEmail } }

//         case SET_LOGIN:
            
//             return { ...state, formData: {...state.formData, password: action.newPassword } }

//         case SET_REMEMBER_ME:
//             debugger;
//             return { ...state, formData: {...state.formData, rememberMe: action.newRememberMeState } }

//         default:
//             return { ...state, formData: {...state.formData} }
//     }
// };

// export const setEmailAC = (newEmail) => ({type: SET_EMAIL, newEmail})
// export const setPasswordAC = (newPassword) => ({type: SET_LOGIN, newPassword})
// export const setRememberMeAC = (newRememberMeState) => ({type: SET_REMEMBER_ME, newRememberMeState})

// export default formReduser;