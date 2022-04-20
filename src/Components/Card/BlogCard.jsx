import React from 'react';

import BlogButton from '../Button/BlogButton';
import './Card.css';

const BlogCard = (props) => {

const {blogImg} = props;

    return (
        <div className='blog__card'>
            <div className="blog">
                <img className='blog__img' src={blogImg} alt=" blogImg " />

                <h3 className='blog__title'>WHAT DOES SQUALANE DO FOR YOUR SKIN?</h3>
                <p className='blog__subtitle'>Lorem ipsum dolor sit amet, consectetur cols with adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis. </p>

                <BlogButton />

            </div>
        </div>
    );
};

export default BlogCard;