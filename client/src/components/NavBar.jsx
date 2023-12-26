import NavBarList from "./NavBarList";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between m-8">
      <Link to="/">Culinary</Link>
      <NavBarList />
    </nav>
  );
};

export default NavBar;
