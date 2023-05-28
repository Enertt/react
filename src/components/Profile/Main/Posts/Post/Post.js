import React from 'react';
import postStyle from "./post.module.css"

const Post = (props) => {
    return (
        <div className={postStyle.post}>
            <div className={postStyle.imgAndDescription}>
                <img src={props.img}></img>
                <h3>{props.name} {props.secondname}</h3>
                <span>
                    {props.text}
                </span>
            </div>
            <div className={postStyle.communication}>
                <button>Like</button> {props.likecount}
                <button>Dislike</button> {props.dislikecount}
                <button>Repost</button> {props.repostcount}
            </div>
        </div>
    );
}

export default Post;