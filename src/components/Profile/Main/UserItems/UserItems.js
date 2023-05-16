import React from 'react';
import userItemsStyle from './userItems.module.css';
import ImgAndDescription from './ImgAndDescription/ImgAndDescription';


const UserItems = () => {
    return (
        <div className={userItemsStyle.userItems}>
            <div className={userItemsStyle.main_img}>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'></img>
            </div>

            <ImgAndDescription />
        </div>
    )
}

export default UserItems;