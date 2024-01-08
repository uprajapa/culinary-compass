import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodCarousel from "../components/FoodCarousel"
import RecipeItem from "../components/RecipeItem"
import "./Home.css"
function Home({ users, message }) {
  return (
    <div className="home">

        <FoodCarousel />
        <RecipeItem />
        <RecipeItem />

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
