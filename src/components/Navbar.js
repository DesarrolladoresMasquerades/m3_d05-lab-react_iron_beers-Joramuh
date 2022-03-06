import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div style={{backgroundColor: "lightblue"}}> 
    <nav>
      <NavLink to="/">
      <img
        src={`https://www.pinclipart.com/picdir/middle/564-5647199_transparent-home-icon-clipart-circle-transparent-home-icon.png`}
        alt=""
        width="70px"
        height="auto"
      />
      </NavLink>
      
    </nav>
    </div>
  );
}

export default Navbar;


