import React from 'react';
import loading from '../../assets/img/loading.gif';
import preloaderStyle from './preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={preloaderStyle.preloader}>
            <img src={loading} />
        </div>
    );
}

export default Preloader;