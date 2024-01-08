import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const FoodCarousel = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item controls={true}>
          <img src="https://www.closetcooking.com/wp-content/uploads/2008/08/Corn-and-Black-Bean-Quesadillas-500.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item controls={true}>
          <img src="https://www.budgetbytes.com/wp-content/uploads/2012/02/Hearty-Black-Bean-Quesadillas-V3.jpg"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item controls={true}>
          <img src="https://www.budgetbytes.com/wp-content/uploads/2012/02/Hearty-Black-Bean-Quesadillas-V3.jpg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FoodCarousel;