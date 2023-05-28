import React from 'react';
import Post from './Post/Post';
import postsStyle from './posts.module.css';

const Posts = (props) => {
    let newPostElement = React.createRef();
    
    let postsArray = props.postsData.map( (element) => {
            return(
                <Post img={element.img} name={element.name} secondname={element.secondname} likecount={element.likecount} dislikecount={element.dislikecount} repostcount={element.repostcount} text={element.text} />
            )
        });

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    return (
        
        <div>
            <div className={postsStyle.my_posts}>
                <span>My posts</span>
            </div>

            <div className={postsStyle.new_post}>
                
                <textarea placeholder='New post' ref={newPostElement} ></textarea>
                <button onClick={addNewPost}>Add</button>
            </div>

            {postsArray}
            
        </div>
    )
}

export default Posts;