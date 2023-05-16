let initialState = {
    usersData: [
        { id: 1, name: 'Oliver', lastName: 'Elsher' },
        { id: 2, name: 'Charlotte', lastName: 'Solace' },
        { id: 3, name: 'Declan', lastName: 'Levine' },
        { id: 4, name: 'Aurora', lastName: 'Thatcher' },
        { id: 5, name: 'Theodore', lastName: 'Raven' },
        { id: 6, name: 'Violet', lastName: 'Bardot' },
        { id: 7, name: 'Jasper', lastName: 'Hansley' },
        { id: 8, name: 'Hazel', lastName: 'Cromwell' },
        { id: 9, name: 'Silas', lastName: 'Ashley' },
        { id: 10, name: 'Luna', lastName: 'Namiel' }],
    
    userDialogsData: [ // isMyMessage ? id = 1 : id = 0;
        { id: 0, iserId: 1, iserId: 1, message: 'Hello!' },
        { id: 1, iserId: 1, message: 'Hi! How are you? =)' },
        { id: 0, iserId: 1, message: 'Good, thank\'s!' },
        { id: 0, iserId: 1, message: 'You?' },
        { id: 1, iserId: 1, message: 'Me too!' }],
    
    newMessageBody: '',
};



const messagesReduser = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.userDialogsData = [...state.userDialogsData];

    if (action.type === 'SEND-MESSAGE') {
        stateCopy.newMessageBody = '';

        let newMessage = {
            id: 1,
            iserId: 1,
            message: action.property,
        }
        stateCopy.userDialogsData.push(newMessage);
        return stateCopy;
    }else{return stateCopy;};
};

export default messagesReduser;