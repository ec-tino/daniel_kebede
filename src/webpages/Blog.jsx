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
      image: 'https://placehold.co/1200x600/2D3748/E2E8F0?text=Tech+Trends',
      title: 'The Future of Artificial Intelligence',
      description: 'AI is rapidly evolving. Discover the key trends shaping our world, from machine learning to neural networks.',
      articleId: 'article-ai',
    },
    {
      image: 'https://placehold.co/1200x600/4A5568/E2E8F0?text=Productivity',
      title: 'Boosting Your Remote Work Productivity',
      description: 'Working from home? These essential tips and tools will help you stay focused and efficient.',
      articleId: 'article-productivity',
    },
    {
      image: 'https://placehold.co/1200x600/2B6CB0/E2E8F0?text=Web+Design',
      title: 'Modern Web Design Principles',
      description: 'Explore the principles of modern web design, including responsive layouts, UI/UX, and accessibility.',
      articleId: 'article-web-design',
    },
  ];


    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "The Future of Quantum Computing in Education",
            excerpt: "Exploring how quantum computing will transform computer science curricula in the next decade.",
            date: "May 15, 2023",
            category: "Research",
            imageUrl: "http://static.photos/technology/640x360/101",
            fullText: fullTexts.quantumComputing.paragraphs[1] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[2] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[3] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[4]
        },
        {
            id: 2,
            title: "Teaching Algorithms: A New Pedagogical Approach",
            excerpt: "Implementing active learning techniques to improve student outcomes in algorithm courses.",
            date: "April 28, 2023",
            category: "Teaching",
            imageUrl: "http://static.photos/education/640x360/102",
            fullText: fullTexts.quantumComputing.paragraphs[1] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[2] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[3] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[4]
        },
        {
            id: 3,
            title: "Ethical Considerations in AI Development",
            excerpt: "Addressing the moral responsibilities of computer scientists in the age of artificial intelligence.",
            date: "March 10, 2023",
            category: "Publications",
            imageUrl: "http://static.photos/science/640x360/103",
            fullText: fullTexts.quantumComputing.paragraphs[1] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[2] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[3] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[4]
        },
        {
            id: 4,
            title: "Blockchain Applications Beyond Cryptocurrency",
            excerpt: "Examining real-world use cases for blockchain technology in various industries.",
            date: "February 22, 2023",
            category: "Research",
            imageUrl: "http://static.photos/finance/640x360/104",
            fullText: fullTexts.quantumComputing.paragraphs[1] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[2] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[3] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[4]
        },
        {
            id: 5,
            title: "Improving Student Engagement in Online Learning",
            excerpt: "Strategies for maintaining student motivation and participation in virtual classrooms.",
            date: "January 18, 2023",
            category: "Teaching",
            imageUrl: "http://static.photos/education/640x360/105",
            fullText: fullTexts.quantumComputing.paragraphs[1] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[2] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[3] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[4]
        },
        {
            id: 6,
            title: "Cybersecurity Trends for 2023",
            excerpt: "Predicting the most significant cybersecurity threats and defense strategies for the coming year.",
            date: "December 5, 2022",
            category: "Publications",
            imageUrl: "http://static.photos/technology/640x360/106",
            fullText: fullTexts.quantumComputing.paragraphs[1] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[2] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[3] + "\n\n" + 
                      fullTexts.quantumComputing.paragraphs[4]
        }
    ]);    

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
        </div>
    );
};

export default Blog;