import React from 'react';
import friendsStyle from './friends.module.css';
import axios, * as others from 'axios';
import Preloader from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import noImagePhoto from '../../assets/img/no_image.png';
import { deleteFollowingState } from '../../api/api';
import { postFollowingState } from '../../api/api';
import { getUsers } from '../../api/api';

const Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    debugger;

    

    return (
        <div className={friendsStyle.back}>

            {
                props.isFetching ? <Preloader isFetching={props.isFetching} /> : null
            }

            <div className={friendsStyle.pagesNumbers}>

                {pages.map((element) => {
                    debugger;
                    return <div className={props.currentPage === element ? friendsStyle.selected : friendsStyle.unselected}
                        onClick={() => { props.onPageChanged(element) }}>{element}</div>
                })}

            </div>
            {
                props.users.map((element) => {
                    return (

                        <div className={friendsStyle.usersListItem} >

                            <div className={friendsStyle.imgAndButton}>
                                <NavLink to={`/profile/userProfile/${element.id}`} className={friendsStyle.usersNav}>
                                    <div className={friendsStyle.imgBlock}>

                                        <img src={(() => {
                                            if (element.photos.small !== null) {

                                                return (
                                                    element.photos.small
                                                )
                                            }
                                            else {
                                                return (
                                                    noImagePhoto
                                                )
                                            };
                                        })()} height="100%" />

                                    </div>
                                </NavLink>

                                <div className={friendsStyle.folButton}>

                                    {(() => {

                                        switch (element.followed) {
                                            case true:

                                                return (
                                                    <button disabled={props.followingInProgress} onClick={() => {

                                                        props.unfollowThunkCreator(element.id);

                                                    }}>Unfollow</button>
                                                )
                                            case false:

                                                return (
                                                    <button disabled={props.followingInProgress} onClick={() => {

                                                        props.followThunkCreator(element.id);
                                                        
                                                    }}>Follow</button>
                                                )
                                        }
                                    })()}

                                </div>
                            </div>

                            <div className={friendsStyle.allDescription}>
                                <div className={friendsStyle.name}>
                                    <span>{`${element.name}`}</span>
                                </div>

                                <div className={friendsStyle.status}>
                                    <span>{(() => {
                                        if (element.status !== null) {
                                            return (element.status)
                                        }
                                        else {
                                            return ''
                                        }
                                    })()}</span>
                                </div>

                                <div className={friendsStyle.location}>
                                    <span>{() => {
                                        if (element.country !== null) {
                                            return (element.country)
                                        }
                                        else {
                                            return ''
                                        }
                                    }}</span>
                                    <span>{() => {
                                        if (element.city !== null) {
                                            return (element.city)
                                        }
                                        else {
                                            return ''
                                        }
                                    }}</span>
                                </div>

                            </div>
                        </div>

                    );

                })
            }
        </div>
    )
};

export default Users;