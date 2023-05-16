import React from 'react';
import imgAndDescriptionStyle from './imgAndDescription.module.css';

const ImgAndDescription = () => {
    return (
        <div className={imgAndDescriptionStyle.prof_img_prof_description}>
            <div className={imgAndDescriptionStyle.main_user_img}>
                <img src='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg' height="100%"></img>
            </div>
            <div className={imgAndDescriptionStyle.main_user_description}>
                <h2>Viktor Korneplod</h2>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting </span>
            </div>
        </div>
    )
}

export default ImgAndDescription;