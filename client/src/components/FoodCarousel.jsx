import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const FoodCarousel = (props) => {
  const { topThreeRecipes } = props;

  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item controls={true}>
          <img className="picture" src={topThreeRecipes[0].photo_link} />
          <Carousel.Caption>
            <h3>{topThreeRecipes[0].recipe_name}</h3>
            <p>{topThreeRecipes[0].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item controls={true}>
          <img className="picture" src={topThreeRecipes[1].photo_link} />
          <Carousel.Caption>
            <h3>{topThreeRecipes[1].recipe_name}</h3>
            <p>{topThreeRecipes[1].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item controls={true}>
          <img className="picture" src={topThreeRecipes[2].photo_link} />
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