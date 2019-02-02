import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../actions/authActions";

const SingedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Todo</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={() => props.signOut()}>Sign Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating cyan darken-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SingedInLinks);
