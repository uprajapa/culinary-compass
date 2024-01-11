import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const NavBarList = ({ cuisines }) => {
  const { logout } = useLogout();
  const allCuisine = cuisines.map((cuisine) => {
    console.log(cuisine.name);
  });
  console.log("All cuisines: ", allCuisine);
  return (
    <ul className="navlinks">
      {localStorage.getItem("email") !== "null" ? (
        <li>{localStorage.getItem("email")}</li>
      ) : (
        <li></li>
      )}

      <li>
        <div className="dropdown">
          Cuisines
          <div className="dropdown-content">
            <p>Cuisine 1</p>
            {allCuisine}
          </div>
        </div>
      </li>
      <li>
        <Link to="/popular">Popular</Link>
      </li>
      <li className="searchBar">
        <input type="text" placeholder="Search"></input>
        <button type="submit"><i className="fa fa-search"></i></button>
      </li>
      <li>
        {localStorage.getItem("token") ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </ul>
  );
};

export default NavBarList;
