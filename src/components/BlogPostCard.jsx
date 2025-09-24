import React from 'react'
import './BlogPostCard.css'

const BlogPostCard = ({ title, excerpt, date, category, imageUrl }) => {
    return (
        <>
            <div 
                className="blog-card"
                data-aos="fade-up"
            >
                <img src={imageUrl} alt={title} />
                <div className="blog-card-content">
                    <div className="blog-card-header">
                        <span className="blog-card-category">{category}</span>
                        <span className="blog-card-date">{date}</span>
                    </div>
                    <h3 className="blog-card-title">{title}</h3>
                    <p className="blog-card-excerpt">{excerpt}</p>
                    <a href="#" className="blog-card-link">
                        Read more
                        <i data-feather="arrow-right"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default BlogPostCard 