import React from 'react';
import userItemsStyle from './userItems.module.css';


const UserItems = () => {
    return (
        <div>
            <div className={userItemsStyle.userItems}>
                <div className={userItemsStyle.main_img}>
                    <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'></img>
                </div>

                <div className={userItemsStyle.prof_img_prof_description}>
                    <div className={userItemsStyle.main_user_img}>
                        <img src='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg' height="100%"></img>
                    </div>
                    <div className={userItemsStyle.main_user_description}>
                        <h2>Viktor Korneplod</h2>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting </span>
                    </div>
                </div>
            </div>


            
        </div>
    )
}

export default UserItems;