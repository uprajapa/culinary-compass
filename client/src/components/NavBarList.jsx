import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { IoMdArrowDropdown } from "react-icons/io";
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

      {localStorage.getItem("user_name") ? (
        <li>
          <div className="dropdown">
            <div className="flex fle-col items-center">
              <span>{localStorage.getItem("user_name")}</span>{" "}
              <IoMdArrowDropdown />
            </div>
            <div className="dropdown-content">
              <p className="hover:text-green-500" onClick={handleRecipeNew}>
                New Recipe
              </p>
            </div>
          </div>
        </li>
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
