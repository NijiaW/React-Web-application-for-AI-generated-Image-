import { useState , useEffect } from 'react';
import './About.css'; // Assuming your CSS is in this file

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  const moveSlide = (step) => {
    const newIndex = (currentSlide + step + totalSlides) % totalSlides;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentSlide((currentSlide) => (currentSlide + 1 + totalSlides) % totalSlides);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="carousel">
      <div className="carousel-item">
        <img src={images[currentSlide]} alt={`Rottnest Island Image-${currentSlide + 1}`} title={`Rottnest Island Image-${currentSlide + 1}`} />
      </div>
      <a className="carousel-control-prev" onClick={() => moveSlide(-1)}>&#10094;</a>
      <a className="carousel-control-next" onClick={() => moveSlide(1)}>&#10095;</a>
    </div>
  );
};

export default Carousel;