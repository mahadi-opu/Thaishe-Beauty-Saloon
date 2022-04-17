import React from 'react';
import './ServiceHeading.css';



const SectionHeading = (props) => {
  
    const {colorLeft,colorRight, colorSubHeading, headingLeft , headingRight, subheading} = props;
    return (

        <div className='section__heading'>
            <h1 className='heading'><span className={ colorLeft ? colorLeft : 'color-text'}> {headingLeft} </span> <span className={colorRight ? colorRight : ''}>{ headingRight }</span> </h1>
            <p className={ (colorSubHeading ? colorSubHeading : '') + ' sub-heading'}>{subheading}</p>
        </div>

    );
};

export default SectionHeading;