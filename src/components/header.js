import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <a href="https://www.jeremiebauder.com/projets/react-animation"><span className="sp">bdr</span></a>
        <div className="center">
            <NavLink
                to='/'
                exact
                activeStyle={{
                fontWeight: "700",
                color: "red",
                transition: "0.5s"
                }}>
                Desert
            </NavLink>
            <NavLink
                to='/cascade'
                exact
                activeStyle={{
                fontWeight: "700",
                color: "red",
                transition: "0.5s"
                }}>
                Cascade
            </NavLink>
      </div>
    </div>
  );
};

export default Header;

