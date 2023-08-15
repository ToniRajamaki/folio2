import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../styles/work.css';

class DemoCarousel extends Component {
  render() {
    return (
      <div className="carousel-container">
        <Carousel
          width="70%"
          centerMode={true}
          ariaLabel="My Carousel"
          autoPlay={true}
          interval={3000}
          showArrows={true}
          showIndicators={true}
          showThumbs={true}
          renderIndicator={(clickHandler, isSelected, index) => (
            <button
              type="button"
              onClick={clickHandler}
              className={`carousel-indicator ${isSelected ? 'selected' : ''}`}
            />
          )}
        >
          <div>
            <img src="./folio2/assets/toni/logo.png" className="carousel-image" alt="Slide 1" />
          </div>
          <div>
            <img src="./folio2/assets/toni/atria.png" className="carousel-image" alt="Slide 2" />
          </div>
          <div>
            <img src="./folio2/assets/toni/logo.png" className="carousel-image" alt="Slide 3" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DemoCarousel;
