let initialState = {
    postsData: [
        { id: 1, img: 'https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8&w=1000&q=80', name: 'James', secondname: 'Lee', likecount: 0, dislikecount: 0, repostcount: 3, text: 'ASDasdasdasd' },
        { id: 2, img: 'https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8&w=1000&q=80', name: 'Jerry', secondname: 'Hary', likecount: 21, dislikecount: 0, repostcount: 0, text: ';aslkdkalks;dfjasdlkf;jsadlkfj' },
        { id: 3, img: 'https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8&w=1000&q=80', name: 'Bob', secondname: 'Mcwood', likecount: 0, dislikecount: 5, repostcount: 2, text: 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB' }
    ],

    postsData_count: 3,
};

const profileReduser = (state = initialState, action) => {
    debugger;
    let stateCopy = {...state};
    stateCopy.postsData = [...state.postsData];
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: state.postsData_count + 1,
            img: 'https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8&w=1000&q=80',
            name: 'James',
            secondname: 'Lee',
            likecount: 0,
            dislikecount: 0,
            repostcount: 0,
            text: action.property,
        };

        stateCopy.postsData_count += 1;
        stateCopy.postsData.push(newPost);
        
        debugger;
        return stateCopy;
    }else{
        return state
    };

    
};

export default profileReduser;