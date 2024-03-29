import React from 'react';
import usersStyle from './users.module.css';
import axios, * as others from 'axios';
import Preloader from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import noImagePhoto from '../../assets/img/no_image.png';
import { deleteFollowingState } from '../../api/api';
import { postFollowingState } from '../../api/api';
import { getUsers } from '../../api/api';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const length = 1000;
const maxLength = maxLengthCreator(length);
let findValue = React.createRef();

const FindForm = (props) => {

    return (
      <form onSubmit={props.handleSubmit} autoComplete='off'>
  
        <div className={props.valid ? usersStyle.new_post_span : usersStyle.new_post_span_active}>
          <span>{`Max length is ${length} symbols`}</span>
        </div>
  
        <div className={usersStyle.textArea}>
  
          <Field
            placeholder='User Name'
            name='findUser'
            component={'input'}
            validate={[maxLength]}
            ref={findValue}
          />
  
          <button>Find User</button>
  
        </div>
      </form>
    )
  }
  
  
  const FindFormReduxForm = reduxForm({ form: 'FindForm' })(FindForm);

const Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const findUser = () => {
        if (findValue.current.value !== undefined) {
            props.findUsersThunkCreator( findValue.current.value, props.currentPage, props.pageSize );
        }
    }

    

    return (
        <div className={usersStyle.back}>

            {
                props.isFetching ? <Preloader isFetching={props.isFetching} /> : null
            }

            <FindFormReduxForm onSubmit={findUser} />
            <div className={usersStyle.pagesNumbers}>

                {pages.map((element) => {
                    debugger;
                    return (
                        <div>
                            <div className={props.currentPage === element ? usersStyle.selected : usersStyle.unselected}
                            onClick={() => { 
                                if(findValue.current.value !== undefined){
                                    return props.findUsersThunkCreator( findValue.current.value, element, props.pageSize );
                                }else{
                                    return props.onPageChanged(element);
                                };
                                }}>{element}</div>
                        </div>
                    )
                })}

            </div>
            {
                props.users.map((element) => {
                    return (

                        <div className={usersStyle.usersListItem} >

                            <div className={usersStyle.imgAndButton}>
                                <NavLink to={`/profile/userProfile/${element.id}`} className={usersStyle.usersNav}>
                                    <div className={usersStyle.imgBlock}>

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

                                <div className={usersStyle.folButton}>

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

                            <div className={usersStyle.allDescription}>
                                <div className={usersStyle.name}>
                                    <span>{`${element.name}`}</span>
                                </div>

                                <div className={usersStyle.status}>
                                    <span>{(() => {
                                        if (element.status !== null) {
                                            return (element.status)
                                        }
                                        else {
                                            return ''
                                        }
                                    })()}</span>
                                </div>

                                <div className={usersStyle.location}>
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