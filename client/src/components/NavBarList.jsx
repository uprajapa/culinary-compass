import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const NavBarList = () => {
  const { logout } = useLogout();
  return (
    <ul className="navlinks">
      {localStorage.getItem("email") !== "null" ? (
        <li>{localStorage.getItem("email")}</li>
      ) : (
        <li></li>
      )}

      <li>
        <div className="dropdown">
          Cuisine
          <div className="dropdown-content">
            <p>Cuisine 1</p>
            <p>Cuisine 2</p>
            <p>Cuisine 3</p>
          </div>
        </div>
      </li>
      <li>
        <Link to="/popular">Popular</Link>
      </li>
      <li className="searchBar">
        <input type="text" placeholder="Search"></input>
        <button type="submit"><i class="fa fa-search"></i></button>
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
