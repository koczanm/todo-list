import React from "react";
import { NavLink } from "react-router-dom";

const SingedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Todo</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating cyan darken-1">
          MK
        </NavLink>
      </li>
    </ul>
  );
};

export default SingedInLinks;
