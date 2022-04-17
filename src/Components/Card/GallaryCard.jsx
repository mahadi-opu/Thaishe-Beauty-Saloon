import React from 'react';
import '../Card/Card.css';

import galaryCard from '../../Assats/images/gallery/picture-1.png'


const GallaryCard = (props) => {
    return (
        <div className='gallary__card'>
            <img src={props.gallaryimg} alt="gallary" />
        </div>
    );
};

export default GallaryCard;