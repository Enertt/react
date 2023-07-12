import React from 'react';
import Post from '../Profile/Main/Posts/Post/Post';
import usersProfileStyle from './usersProfile.module.css';
import open_to_work from '../../assets/img/open_to_work.png';
import noImagePhoto from '../../assets/img/no_image.jpg';
import backPhoto from '../../assets/img/back.jpg';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const length = 1000;
const maxLength = maxLengthCreator(length);
let newPostValue = React.createRef();

const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} autoComplete='off'>
            <div className={usersProfileStyle.new_post}>
                <Field
                    component={'input'}
                    placeholder='New post'
                    name='newPostInput'
                    validate={[maxLength]}
                    ref={newPostValue}
                />

                <button>Add</button>
            </div>
            <div className={props.valid ? usersProfileStyle.new_post_span : usersProfileStyle.new_post_span_active}>
                <span>{`Max length is ${length} symbols`}</span>
            </div>

        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: 'addNewPostForm' })(AddNewPostForm);

const UsersProfile = (props) => {

    const navigate = useNavigate();

    let postsArray = props.postsData.map((element) => {
        return (
            <Post img={element.img} fullName={element.fullName} likecount={element.likecount} dislikecount={element.dislikecount} repostcount={element.repostcount} text={element.text} />
        )
    });

    const onSubmit = (values) => {
        if (newPostValue.current.value !== undefined) {
            props.addPost(newPostValue.current.value);
            values.newPostInput = undefined;
        }
    }

    return (
        <div className={usersProfileStyle.mainBlock}>
            <div className={usersProfileStyle.userItems}>
                <div className={usersProfileStyle.main_img}>
                    <img src={backPhoto}></img>
                    <span className={usersProfileStyle.nameSpanBack}>{props.userData.fullName}</span>
                </div>

                <div className={usersProfileStyle.prof_img_prof_descriptionAndContacts}>
                    <div className={usersProfileStyle.prof_img_prof_description}>
                        <div className={usersProfileStyle.main_user_img}>
                            {(() => {
                                if (props.userData.photos.small !== null) {
                                    return (
                                        <img src={props.userData.photos.small} ></img>
                                    );
                                }
                                else {
                                    if (props.userData.photos.large !== null) {
                                        return (
                                            <img src={props.userData.photos.large} ></img>
                                        );
                                    }
                                    else {
                                        return (
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

                        {(() => {
                            if (
                                props.userData.contacts.facebook ||
                                props.userData.contacts.website ||
                                props.userData.contacts.vk ||
                                props.userData.contacts.twitter ||
                                props.userData.contacts.instagram ||
                                props.userData.contacts.youtube ||
                                props.userData.contacts.github ||
                                props.userData.contacts.mainLink
                            ) {
                                return (
                                    <div>
                                        <span>Contacts</span>
                                        <ul>
                                            {props.userData.contacts.facebook ? <li>facebook: {props.userData.contacts.facebook}</li> : null}
                                            {props.userData.contacts.website ? <li>website: {props.userData.contacts.website}</li> : null}
                                            {props.userData.contacts.vk ? <li>vk: {props.userData.contacts.vk}</li> : null}
                                            {props.userData.contacts.twitter ? <li>twitter: {props.userData.contacts.twitter}</li> : null}
                                            {props.userData.contacts.instagram ? <li>instagram: {props.userData.contacts.instagram}</li> : null}
                                            {props.userData.contacts.youtube ? <li>youtube: {props.userData.contacts.youtube}</li> : null}
                                            {props.userData.contacts.github ? <li>github: {props.userData.contacts.github}</li> : null}
                                            {props.userData.contacts.mainLink ? <li>mainLink: {props.userData.contacts.mainLink}</li> : null}
                                        </ul>
                                    </div>
                                );
                            };
                        })()}

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

            {(() => {
                if (props.myId !== props.userData.userId) {
                    return (
                        <button className={usersProfileStyle.startChattingButton} onClick={() => {
                            debugger
                            props.startChattingThunkCreator(props.userData.userId);
                            navigate('/messages');

                        }}>New Message</button>
                    )
                }
            })()}



            <div>
                <div className={usersProfileStyle.my_posts}>
                    <span>Posts</span>
                </div>

                <AddNewPostFormRedux onSubmit={onSubmit} />

                <div className={usersProfileStyle.one_post}>
                    {postsArray}
                </div>


            </div>
        </div>
    );
}


export default UsersProfile;