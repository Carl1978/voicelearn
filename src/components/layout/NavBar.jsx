import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const NavBar = props => {
  const { auth, profile } = props;
  //console.log(auth.uid);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div className="navbar-fixed">
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <div className="container">
          <Link to="/mario/" className="brand-logo navbar-brand">
            VoiceLearn
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(NavBar);
