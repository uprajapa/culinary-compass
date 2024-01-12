import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../../public/css/FoodCarousel.css";

const FoodCarousel = (props) => {
  const { topThreeRecipes } = props;

  return (
    <div className="carousel">
      <Carousel>
          
            <Carousel.Item controls={true}>
                <img className="first-pic" src="https://www.closetcooking.com/wp-content/uploads/2008/08/Corn-and-Black-Bean-Quesadillas-500.jpg" />
                <Carousel.Caption>
                  <h3>{topThreeRecipes[0].recipe_name}</h3>
                  <p>{topThreeRecipes[0].description}</p>
                </Carousel.Caption>
            </Carousel.Item>
          
        <Carousel.Item controls={true}>
          <img 
            className="d-block w-100"
            src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg"/>
          <Carousel.Caption>
            <h3>{topThreeRecipes[1].recipe_name}</h3>
            <p>{topThreeRecipes[1].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item controls={true}>
          <img className="first-pic" src="https://www.budgetbytes.com/wp-content/uploads/2012/02/Hearty-Black-Bean-Quesadillas-V3.jpg"/>
          <Carousel.Caption>
            <h3>{topThreeRecipes[2].recipe_name}</h3>
            <p>
            {topThreeRecipes[2].description}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FoodCarousel;