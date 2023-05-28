import React from 'react';
import loading from '../assets/img/loading.gif';

const Preloader = (props) => {
    return (
        <div>
            <img src={loading} />
        </div>
    );
}

export default Preloader;