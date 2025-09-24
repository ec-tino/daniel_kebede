import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

// --- Carousel Component ---
// This component is self-contained and handles its own state and logic.
const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoized function to go to the next slide
  const goToNext = useCallback(() => {
    if (!slides || slides.length === 0) return;
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  // Function to go to the previous slide
  const goToPrevious = () => {
    if (!slides || slides.length === 0) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to a specific slide by its index
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Effect to handle the automatic sliding every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(goToNext, 3000);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, [goToNext]);

  if (!slides || slides.length === 0) {
    return null; // Don't render anything if there are no slides
  }

  return (
    <>
      <div className="carousel-container">
        {/* Navigation Arrows */}
        <button className="carousel-arrow left-arrow" onClick={goToPrevious}>&#10094;</button>
        <button className="carousel-arrow right-arrow" onClick={goToNext}>&#10095;</button>

        {/* Slides */}
        {slides.map((slide, index) => (
            <div 
                className={index === currentIndex ? 'carousel-slide active' : 'carousel-slide'}
                key={slide.articleId}
            >
                <img src={slide.image} alt={slide.title} className="slide-image" />
                <div className="slide-text-overlay">
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                    <a href={`#${slide.articleId}`}>Read More &rarr;</a>
                </div>
            </div>
        ))}

        {/* Navigation Dots */}
        <div className="carousel-dots">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`dot ${currentIndex === slideIndex ? "active" : ""}`}
              onClick={() => goToSlide(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;

