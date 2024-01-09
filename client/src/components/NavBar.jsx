
import NavBarList from "./NavBarList";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <Link to="/">Culinary Compass</Link>
        </div>
        <div id="mainListDiv" className="main_list">
          <NavBarList />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
