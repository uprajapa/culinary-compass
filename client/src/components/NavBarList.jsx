import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
const NavBarList = () => {
  const { logout } = useLogout();
  return (
    <ul className="flex flex-row list-none gap-4">
      {localStorage.getItem("email") !== "null" ? (
        <li>{localStorage.getItem("email")}</li>
      ) : (
        <li></li>
      )}
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
