import React, { useState } from 'react';
import SplitText from "../components/SplitText.jsx";
import Carousel from "../components/Carousel.jsx"
import BlogPostCard from "../components/BlogPostCard.jsx";
import styles from "./Blog.module.css"
import fullTexts from "../components/BlogFullText.js"


const Blog = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    const slides = [
    {
      image: '/no_blog.png',
      title: 'No Blog Posts Yet',
      description: 'Come back later to see new articles on various topics...',
      articleId: 'no-article',
    },
  ];

    const [posts, setPosts] = useState([]);

    // --- FOLLOW THIS FORMAT TO ADD MORE POSTS ---
    // const [posts, setPosts] = useState([
    //     {
    //         id: 1,
    //         title: "The Future of Quantum Computing in Education",
    //         excerpt: "Exploring how quantum computing will transform computer science curricula in the next decade.",
    //         date: "May 15, 2023",
    //         category: "Research",
    //         imageUrl: "http://static.photos/technology/640x360/101",
    //         fullText: fullTexts.quantumComputing.paragraphs[1] + "\n\n" + 
    //                   fullTexts.quantumComputing.paragraphs[2] + "\n\n" + 
    //                   fullTexts.quantumComputing.paragraphs[3] + "\n\n" + 
    //                   fullTexts.quantumComputing.paragraphs[4]
    //     },    
    // ]); 
    // image: '/src/assets/no_blog.png'   

    return (
        <div> 
            <div>
                <div className={styles.spacer}> 
                    <SplitText
                        text="Welcome to My Blog"
                        className={styles.custom_heading}
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>
            </div>

            
            <div className={styles.carousel_container}>
                <div className={styles.carousel_item}> 
                    <Carousel slides={slides} />
                </div>
            </div>
            <hr />
            <h1> Articles</h1>
            {posts.length === 0 ? (
                <div className={styles.noPostsMessage}>
                    <h2>No articles published yet</h2>
                </div>
            ) : (
                <div className={styles.grid}>
                    {posts.map(post => (
                        <BlogPostCard 
                            key={post.id}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                            category={post.category}
                            imageUrl={post.imageUrl}
                            fullText={post.fullText}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Blog;