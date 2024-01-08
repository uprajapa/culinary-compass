import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodCarousel from "../components/FoodCarousel"
import "./Home.css"
function Home({ users, message }) {
  return (
    <div className="home">

        <FoodCarousel />
      
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

        {/* {message ? (
          <p>{message}</p>
        ) : (
          <ul>
            {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
          </ul>
        )} */}
    </div>
  );
}

export default Home;
