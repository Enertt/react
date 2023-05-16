import React from 'react';
import Posts from './Posts';
import { connect } from 'react-redux';



// const PostsContainer = (props) => {
//     return(
//     // appState={props.appState} dispatch={props.dispatch}
//     <Posts postsData={props.appState.postsData} dispatch={props.dispatch}/>
//     );  
// };

let mapStateToProps = (state) => ({
        postsData: state.profileReduser.postsData
});

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: (action) => dispatch(action),
    };
};

const PostsContainerRR = connect(mapStateToProps, mapDispatchToProps) (Posts);

export default PostsContainerRR;