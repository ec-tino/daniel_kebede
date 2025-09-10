import React from 'react';
import SplitText from "/Users/tino/Desktop/project test files/daniel_portfolio/daniel_project/src/components/SplitText.jsx";
import Carousel from "/Users/tino/Desktop/project test files/daniel_portfolio/daniel_project/src/components/Carousel.jsx"


const Blog = () => {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div>
            <h1>Blog</h1>
            <p>Welcome to the blog page!</p>

            <SplitText
                text="Hello, GSAP!"
                className="text-2xl font-semibold text-center"
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
            <div style={{ height: '600px', position: 'relative' }}>
                <Carousel
                    baseWidth={300}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>
            <hr />

        </div>
    );
};

export default Blog;