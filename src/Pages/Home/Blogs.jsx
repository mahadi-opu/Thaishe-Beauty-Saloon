import React from 'react';
import BlogCard from '../../Components/Card/BlogCard';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';
import './Home.css';
import blogImg1 from '../../Assats/images/blog/blogImg1.png'
import blogImg2 from '../../Assats/images/blog/blogImg2.png'
import blogImg3 from '../../Assats/images/blog/blogImg3.png'


const Blogs = () => {
    return (
        <section className='blogs'>
            <div className='container'>
                <div className="blogs-wrapper">
                    <div className='blogs__heading'>
                        <SectionHeading 
                            headingLeft=" Our"
                            headingRight=" Blogs "
                            subheading="Here is our Blogs to Know us More"
                        />
                    </div>
                    <div className="blogs__show">
                        <BlogCard
                            blogImg={blogImg1}
                        />
                        <BlogCard
                            blogImg={blogImg2}
                        />
                        <BlogCard
                            blogImg={blogImg3}
                        />
                      
                    </div>

                   
                </div>
            </div>
        </section>
    );
};

export default Blogs;