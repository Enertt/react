import { dialogsAPI } from "../api/api";
import { usersAPI } from "../api/api";
import no_img from "../assets/img/no_image.jpg";

const ADD_POST = 'ADD-POST';
const SET_USER_DATA = 'SET-USER-DATA';
const SET_MY_DATA = 'SET-MY-DATA';

let initialState = {
    postsData: [ ],
    //{ id: 1, img: 'https://media.cnn.com/api/v1/images/stellar/prod/130502152627-rubber-duck-in-hong-kong-1.jpg?q=x_0,y_302,h_2412,w_4288,c_crop', fullName: 'Sam Mcwood', likecount: 0, dislikecount: 5, repostcount: 2, text: '@*#$^%&!!!!!' }

    userData: {
        aboutMe: "#",
        contacts: {
            facebook: "#",
            website: "#",
            vk: "#",
            twitter: "#",
            instagram: "#",
            youtube: "#",
            github: "#",
            mainLink: "#"
        },
        lookingForAJob: false,
        lookingForAJobDescription: "#",
        fullName: "#",
        userId: null,
        photos: {
            small: "https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png",
            large: "https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
        }
    },

    myData: {
        aboutMe: "#",
        contacts: {
            facebook: "#",
            website: "#",
            vk: "#",
            twitter: "#",
            instagram: "#",
            youtube: "#",
            github: "#",
            mainLink: "#"
        },
        lookingForAJob: false,
        lookingForAJobDescription: "#",
        fullName: null,
        userId: null,
        photos: {
            small: "https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png",
            large: "https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
        }
    },

    postsData_count: 0,


};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            debugger
            let stateCopy = { ...state, postsData: [...state.postsData] };

            let photoSmall = no_img;
    
            if(state.myData.photos.small !== null){
                photoSmall = state.myData.photos.small;
            }

            let newPost = {
                id: state.postsData_count + 1,
                img: photoSmall,
                fullName: state.myData.fullName,
                likecount: 0,
                dislikecount: 0,
                repostcount: 0,
                text: action.text,
            };

            stateCopy.postsData_count += 1;
            stateCopy.postsData.push(newPost);

            return stateCopy;

        case SET_USER_DATA:
            let stateCopyNewUser = { ...state, userData: action.newUserData };
            return stateCopyNewUser;

        case SET_MY_DATA:
            debugger
            let stateCopyMyData = { ...state, myData: action.myData };
            return stateCopyMyData;

        default: return state;
    }
};

export const addPostAC = (text) => ({ type: ADD_POST, text });
export const setUserDataAC = (newUserData) => ({ type: SET_USER_DATA, newUserData });
export const setMyDataAC = (myData) => ({ type: SET_MY_DATA, myData });

export const startChattingThunkCreator = (userId) => {
    debugger
    return (dispatch) => {
        dialogsAPI.startChatting(userId).then(response => {
            
        })
    }
}

export const getMyInfoThunkCreator = () => {
    debugger
    return (dispatch) => {
        usersAPI.myAuthInfo().then(response => {

        })
        
    }
}

export const setMyDataThunkCreator = (userId) => {
    debugger
    return (dispatch) => {
        usersAPI.myData(userId).then(response => {
            dispatch(setMyDataAC(response));
        })
    }
}

export const setUserDataThunkCreator = (userData) => {
    debugger
    return (dispatch) => {

        dispatch(setUserDataAC(userData));
        
        usersAPI.myAuthInfo().then(response => {debugger
            dispatch(setMyDataThunkCreator(response.data.id));
        })
    }
}

export default profileReduser;