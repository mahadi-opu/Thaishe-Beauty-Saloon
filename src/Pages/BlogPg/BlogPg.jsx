import React from 'react';
import './BlogPg.css';
import BlogCard from "../../Components/Card/BlogCard";

import blogImg1 from '../../Assats/images/blog/blogImg1.png'
import blogImg2 from '../../Assats/images/blog/blogImg2.png'
import blogImg3 from '../../Assats/images/blog/blogImg3.png'



const BlogPg = () => {
    return (
        <div className='blogPg'>
            <div className='container'>
                <div className="blogPg_wrapper">
                   <div className='blog__left_sidebar'>
                        <BlogCard
                            blogImg={blogImg1}
                        />
                        <BlogCard
                            blogImg={blogImg2}
                        />
                        <BlogCard
                            blogImg={blogImg3}
                        />
                        <BlogCard
                            blogImg={blogImg1}
                        />
                   </div>
                   <div className='blog__right_sidebar'>

                   </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPg;