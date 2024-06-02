import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <li>
        <Link to="/">Dogs</Link>
      </li>
      <li>
        <Link to="/remote">Cats</Link>
      </li>
      <li>
        <Link to="/news">Sheeps</Link>
      </li>
      <li>
        <Link to="/goats">Goats</Link>
      </li>
    </div>
  );
};
export default Header;
