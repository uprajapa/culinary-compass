import react from 'react';

const RecipeItem = () => {

  return (
  <div className="recipe-list-item">
        <div className="profile-pic">
          <img src="https://www.budgetbytes.com/wp-content/uploads/2012/02/Hearty-Black-Bean-Quesadillas-V3.jpg"/>
        </div>
        <div className="profile-info">
          <div className="recipe-title">
            <p>Recipe Name by Chef Name</p>
          </div>
          <p>Time:</p>
          <p>Est Budget:</p>
          <p>Cuisine:</p>
          <p>Description:</p>
        </div>
        <div>

        </div>
      </div>

  )
};

export default RecipeItem;