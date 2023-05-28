import React from 'react';
import Posts from './Posts';
import { connect } from 'react-redux';
import { addPostAC } from '../../../../redux/profile_reduser';


let mapStateToProps = (state) => ({
        postsData: state.profileReduser.postsData
});

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: (text) => {
            dispatch(addPostAC(text))
        },
    };
};

const PostsContainerRR = connect(mapStateToProps, mapDispatchToProps) (Posts);

export default PostsContainerRR;