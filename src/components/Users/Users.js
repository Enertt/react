import React from 'react';
import usersStyle from './users.module.css';
import axios, * as others from 'axios';
import Preloader from '../Preloader';
import { NavLink } from 'react-router-dom';
import noImagePhoto from '../../assets/img/no_image.png';

class Users extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    };

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    };

    onGetUserInfo() {
        axios.get(`https://https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserData(response);
        
        });
    };
    // onClick={() => {this.onGetUserInfo(element.id)}}




    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }





        
        return (
            <div className={usersStyle.back}>

                {
                    this.props.isFetching ? <Preloader isFetching={this.props.isFetching} /> : null
                }

                <div className={usersStyle.pagesNumbers}>

                    {pages.map((element) => {
                        return <div className={this.props.currentPage === element ? usersStyle.selected : usersStyle.unselected}
                            onClick={() => { this.onPageChanged(element) }}>{element}</div>
                    })}

                </div>
                {
                    this.props.users.map((element) => {
                        return (
                            
                                <div className={usersStyle.usersListItem} onClick={(() => {/*this.onGetUserInfo(element.id)*/})()}>

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
                                                            <button onClick={() => { this.props.unfollow(element.id) }}>Unfollow</button>
                                                        )
                                                    case false:
                                                        
                                                        return (
                                                            <button onClick={() => { this.props.follow(element.id) }}>Follow</button>
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
}

export default Users;