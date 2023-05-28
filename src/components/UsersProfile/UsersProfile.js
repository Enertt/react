import React from 'react';
import Post from '../Profile/Main/Posts/Post/Post';
import usersProfileStyle from './usersProfile.module.css';
import open_to_work from '../../assets/img/open_to_work.png';
import noImagePhoto from '../../assets/img/no_image.jpg';


const UsersProfile = (props) => {


    let newPostElement = React.createRef();

    let postsArray = props.postsData.map((element) => {
        return (
            <Post img={element.img} name={element.name} secondname={element.secondname} likecount={element.likecount} dislikecount={element.dislikecount} repostcount={element.repostcount} text={element.text} />
        )
    });

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    return (
        <div className={usersProfileStyle.mainBlock}>
            <div className={usersProfileStyle.userItems}>
                <div className={usersProfileStyle.main_img}>
                    <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'></img>
                </div>

                <div className={usersProfileStyle.prof_img_prof_descriptionAndContacts}>
                <div className={usersProfileStyle.prof_img_prof_description}>
                    <div className={usersProfileStyle.main_user_img}>
                        {(() => {
                            if(props.userData.photos.small !== null)
                            {
                                return(
                                    <img src={props.userData.photos.small} ></img>
                                );
                            }
                            else
                            {
                                if(props.userData.photos.large !== null)
                                {
                                    return(
                                        <img src={props.userData.photos.large} ></img>
                                    );
                                }
                                else
                                {
                                    return(
                                        <img src={noImagePhoto} ></img>
                                    );
                                };
                            };

                        })()}
                        
                    </div>
                    <div className={usersProfileStyle.main_user_description}>
                        <h2>{props.userData.fullName}</h2>
                        <span>{props.userData.aboutMe}</span>
                    </div>

                </div>

                <div className={usersProfileStyle.contacts}>
                    <div >
                        <span>Contacts</span>
                        <ul>
                            <li>facebook: {props.userData.contacts.facebook}</li>
                            <li>website: {props.userData.contacts.website}</li>
                            <li>vk: {props.userData.contacts.vk}</li>
                            <li>twitter: {props.userData.contacts.twitter}</li>
                            <li>instagram: {props.userData.contacts.instagram}</li>
                            <li>youtube: {props.userData.contacts.youtube}</li>
                            <li>github: {props.userData.contacts.github}</li>
                            <li>mainLink: {props.userData.contacts.mainLink}</li>
                        </ul>
                    </div>
                </div>
                </div>
                

                <div className={usersProfileStyle.jobState}>
                    {(() => {
                        if (props.userData.lookingForAJob === true) {
                            return (
                                <div className={usersProfileStyle.jobImg_jobDesc}>
                                    <div>
                                        <img src={open_to_work}></img>
                                    </div>
                                    
                                    <div className={usersProfileStyle.jobStateSpanBlock}>
                                        <span>{props.userData.lookingForAJobDescription}</span>
                                    </div>
                                    
                                </div>

                            )
                        };
                    })()}
                </div>

            </div>




            <div>
                <div className={usersProfileStyle.my_posts}>
                    <span>Posts</span>
                </div>

                <div className={usersProfileStyle.new_post}>

                    <textarea placeholder='New post' ref={newPostElement} ></textarea>
                    <button onClick={addNewPost}>Add</button>
                </div>

                <div className={usersProfileStyle.one_post}>
                    {postsArray}
                </div>
                

            </div>
        </div>
    );
}

export default UsersProfile;