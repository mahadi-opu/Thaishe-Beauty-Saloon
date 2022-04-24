import React from 'react';
import './BlogPg.css';
import BlogCard from "../../Components/Card/BlogCard";

import blogImg1 from '../../Assats/images/blog/blogImg1.png'
import blogImg2 from '../../Assats/images/blog/blogImg2.png'
import blogImg3 from '../../Assats/images/blog/blogImg3.png'
import Accordion from '../../Components/Accordion/Accordion';



const BlogPg = () => {
    return (
        <div className='blogPg'>
            <div className='container'>
                <div className="blogPg_wrapper">
                   <div className='blog__left_sidebar'>
                      <div className='blog_left_wrap'>
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
                   </div>
                   <div className='blog__right_sidebar'>
                        
                        <div className='blog__widget'>
                            <div className='blog__heading'>
                                <h2> Blogs Categories </h2>
                            </div>
                            <Accordion/> 
                        </div>

                        <div className='blog__widget'>
                            <div className='blog__heading'>
                                <h2> Recent Post </h2>
                            </div>
                            <ul className='recent_items'>
                                <li> <a href=''> Premium makeup brands </a> </li>
                                <li> <a href=''> Wedding makeup products </a> </li>
                                <li> <a href=''> Beautiful wedding makeup </a> </li>
                                <li> <a href=''> Premium makeup brands </a> </li>
                                <li> <a href=''> Premium makeup brands </a> </li>
                                <li> <a href=''> Premium makeup brands </a> </li>
                                <li> <a href=''> Premium makeup brands </a> </li>
                            </ul>
                            
                        </div>

                        <div className='blog__widget'>
                            <div className='blog__heading'>
                                <h2>Archives </h2>
                            </div>
                            <ul className='recent_items'>
                                <li> <a href=''> Premium makeup brands </a> </li>
                                <li> <a href=''> Wedding makeup products </a> </li>
                                <li> <a href=''> Beautiful wedding makeup </a> </li>
                                <li> <a href=''> Premium makeup brands </a> </li>
                                <li> <a href=''> Premium makeup brands </a> </li>
                                <li> <a href=''> Premium makeup brands </a> </li>
                                <li> <a href=''> Premium makeup brands </a> </li>
                            </ul>
                        </div>
                       
                   </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPg;