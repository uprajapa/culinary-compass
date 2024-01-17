import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const NavBarList = ({ cuisines, openModalLogin, openModalRecipe }) => {
  const { logout } = useLogout();
  const allCuisines = cuisines.map((cuisine) => <p key={cuisine.name}><Link to={`cuisines/${cuisine.name}`} reloadDocument>{cuisine.name}</Link></p>);

  const handleRecipeNew = () => {
    if (localStorage.getItem("email")) {
      openModalRecipe();
    } else {
      openModalLogin();
    }
  };

  return (
    <ul className="navlinks">
      <li>
        <div className="dropdown">
          Cuisines
          <div className="dropdown-content">{allCuisines}</div>
        </div>
      </li>

      <li>
        <Link to="cuisines/Popular" reloadDocument>Popular</Link>
      </li>

      <li className="searchBar">
        <input type="text" placeholder="Search"></input>
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </li>

      {localStorage.getItem("email") ? (
        <li>
          <div className="profile-dropdown">
            {localStorage.getItem("email")}
            <div className="profile-dropdown-content">
              <p className="hover:text-green-500" onClick={handleRecipeNew}>
                New Recipe
              </p>
              <p><Link to="/favorite-recipes">Favorites</Link></p>
              <p><Link to="/my-recipes">My recipes</Link></p>
              <p><button onClick={logout}>Logout</button></p>
            </div>
          </div>
        </li>
      ) : (
        <li>
          <button onClick={openModalLogin}>Login</button>
        </li>
      )}

      {/* <li>
        {localStorage.getItem("token") ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={openModalLogin}>Login</button>
        )}
      </li> */}
    </ul>
  );
};

export default NavBarList;
