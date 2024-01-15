import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const NavBarList = ({ cuisines, openModalLogin }) => {
  const { logout } = useLogout();
  const allCuisines = cuisines.map((cuisine) => (
    <p key={cuisine.name}>{cuisine.name}</p>
  ));

  return (
    <ul className="navlinks">
      <li>
        <div className="dropdown">
          Cuisines
          <div className="dropdown-content">{allCuisines}</div>
        </div>
      </li>

      <li>
        <Link to="/popular">Popular</Link>
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
