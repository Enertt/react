import { dialogsAPI } from "../api/api";
import no_img from "../assets/img/no_image.jpg";

const SEND_MESSAGE = 'SEND-MESSAGE';
const ADD_USERS = 'ADD-USER';
const ADD_MESSAGES = 'ADD-MESSAGES';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    usersData: [],
        //WAS { id: 1, name: 'Oliver', lastName: 'Elsher' },
        //WILL { id: #, userName: '#', hasNewMessages: #, lastDialogActivityDate: #, lastUserActivityDate: #, newMessagesCount: #, photo_small: '#',  photo_large: '#'},

    userDialogsData: [],
    // { isMyMessage: false, message: 'Hello!' },

    dialogsCount: null,
    messagesCount: null,
    isFetching: true,
    activeDialog: null,
};



const messagesReduser = (state = initialState, action) => {

    switch (action.type)
    {
        case SEND_MESSAGE:
            let stateCopy = { ...state };
            stateCopy.userDialogsData = [...state.userDialogsData];

            let newMessage = {
                id: 1,
                dialogId: 1,
                message: action.newMessage,
            }
            stateCopy.userDialogsData.push(newMessage);
            return stateCopy
        
        case ADD_USERS:
            let stateCopy_newUsers = {...state};
            stateCopy_newUsers.dialogsCount = action.users.length;
            
            let dialogsArray = [];


            action.users.map((element) => {

                let photoSmall = no_img;
                let photoLarge = no_img;
    
                if(element.photos.small !== null){
                    photoSmall = element.photos.small;
                }
                if(element.photos.large !== null){
                    photoLarge = element.photos.large;
                }

                let newDialogItem = {
                    id: element.id,
                    userName: element.userName,
                    hasNewMessages: element.hasNewMessages,
                    lastDialogActivityDate: element.lastDialogActivityDate,
                    lastUserActivityDate: element.lastUserActivityDate,
                    newMessagesCount: element.newMessagesCount,
                    photo_small: photoSmall,
                    photo_large: photoLarge,
                }
                dialogsArray.push(newDialogItem);
            })
            stateCopy_newUsers.usersData = dialogsArray;
            return stateCopy_newUsers;
        
        case ADD_MESSAGES:
            let stateCopy_messages = {...state};
            debugger
            stateCopy_messages.messagesCount = action.messages.response.totalCount;
            stateCopy_messages.activeDialog = action.messages.userId;
            let messagesArray = [];
            action.messages.response.items.map((element) => {
                
                if(element.senderId === action.messages.userId){
                    let isMyMessage = false;
                    let newMessageItem = {
                        isMyMessage: isMyMessage,
                        message: element.body,
                    }
                    messagesArray.push(newMessageItem);
                }else{
                    let isMyMessage = true;
                    let newMessageItem = {
                        isMyMessage: isMyMessage,
                        message: element.body,
                    }
                    messagesArray.push(newMessageItem);
                }
                
                
                
            })
            stateCopy_messages.userDialogsData = messagesArray;
            debugger
            return stateCopy_messages;

        case TOGGLE_IS_FETCHING:
            let newFetchingState = action.isFetching
            let stateCopyFetching = { ...state, isFetching: newFetchingState }
            return stateCopyFetching

        default: return state
    }
};

// export const sendMessageAC = (newMessage) => ({type: SEND_MESSAGE, newMessage});
export const addUsers = (users) => ({type: ADD_USERS, users});
export const addMessages = (messages) => ({type: ADD_MESSAGES, messages});
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const addUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));

        dialogsAPI.getAllDialogs().then(response => {

            dispatch(toggleIsFetchingAC(false));
            dispatch(addUsers(response));

        })
    }
}


export const addMessagesThunkCreator = (userId) => {
    debugger
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));

        dialogsAPI.getAllMessages(userId, 1, 20).then(response => {
            
            dispatch(toggleIsFetchingAC(false));
            dispatch(addMessages({userId: userId, response: response}));
        })
    }
}

export const sendMessageThunkCreator = (userId, body) => {
    debugger
    return (dispatch) => {
        dialogsAPI.sendMessage(userId, body).then(response => {
            dispatch(addMessagesThunkCreator(userId));
        })
    }
}



export default messagesReduser;