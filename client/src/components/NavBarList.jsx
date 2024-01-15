import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const NavBarList = ({ cuisines, openModalLogin }) => {
  const { logout } = useLogout();
  const allCuisines = cuisines.map((cuisine) => <p key={cuisine.name}><Link to={`cuisines/${cuisine.name}`} reloadDocument>{cuisine.name}</Link></p>);

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

      {localStorage.getItem("email") !== "null" ? (
        <li>{localStorage.getItem("email")}</li>
      ) : (
        <li></li>
      )}

      <li>
        {localStorage.getItem("token") ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={openModalLogin}>Login</button>
        )}
      </li>
    </ul>
  );
};

export default NavBarList;
