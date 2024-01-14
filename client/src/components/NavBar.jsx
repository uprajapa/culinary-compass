import NavBarList from "./NavBarList";
import { Link } from "react-router-dom";
const NavBar = ({ cuisines, openModal }) => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <Link to="/">Culinary Compass</Link>
        </div>
        <div id="mainListDiv" className="main_list">
          <NavBarList cuisines={cuisines} openModal={openModal} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
