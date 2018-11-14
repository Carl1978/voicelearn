import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="navbar-nav float-right">
      <li className="nav-item">
        <NavLink className="nav-link" to="/mario/signup">
          Sign Up
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/mario/signin">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
