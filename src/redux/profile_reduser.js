const ADD_POST = 'ADD-POST';
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    postsData: [
        { id: 1, img: 'https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8&w=1000&q=80', name: 'James', secondname: 'Lee', likecount: 0, dislikecount: 0, repostcount: 3, text: 'I am a duck!' },
        { id: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Grave_eend_maasmuur.jpg/1200px-Grave_eend_maasmuur.jpg', name: 'Jerry', secondname: 'Hary', likecount: 21, dislikecount: 0, repostcount: 0, text: 'NO! I am a DUCK!' },
        { id: 3, img: 'https://media.cnn.com/api/v1/images/stellar/prod/130502152627-rubber-duck-in-hong-kong-1.jpg?q=x_0,y_302,h_2412,w_4288,c_crop', name: 'Sam', secondname: 'Mcwood', likecount: 0, dislikecount: 5, repostcount: 2, text: '@*#$^%&!!!!!' }
    ],

    userData:{
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
        userId: 2,
        photos: {
            small: "https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png",
            large: "https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
        }
    },

    postsData_count: 3,


};

const profileReduser = (state = initialState, action) => {   
    switch (action.type)
    {
        case ADD_POST:
            let stateCopy = { ...state, postsData: [...state.postsData] };
            let newPost = {
                id: state.postsData_count + 1,
                img: 'https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8&w=1000&q=80',
                name: 'James',
                secondname: 'Lee',
                likecount: 0,
                dislikecount: 0,
                repostcount: 0,
                text: action.text,
            };
    
            stateCopy.postsData_count += 1;
            stateCopy.postsData.push(newPost);

            return stateCopy;

        case SET_USER_DATA:
            let stateCopyNewUser = {...state, userData: action.newUserData};
            return stateCopyNewUser;

        default: return state;
    }
};

export const addPostAC = (text) => ({type: ADD_POST, text })
export const setUserDataAC = (newUserData) => ({type: SET_USER_DATA, newUserData })

export default profileReduser;