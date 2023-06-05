import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../UseContext";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faSearch,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import SearchForm from "../CommunComponent/SearchForm";

// ##########################################################
// NavBar: Is consistent for all the app
//

const SearchHeartIcons = (currUser) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="searchBTN dropdown dropdown-menu-lg-start">
          <button
            className="searchBTN"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <FontAwesomeIcon style={{ color: "5c717a" }} icon={faSearch} />
          </button>
          <div
            className="dropdown-menu dropMenu"
            aria-labelledby="dropdownMenuButton"
          >
            <div className="dropMenuItemHolder ">
              <SearchForm />
            </div>
          </div>
        </div>
        {currUser ? (
          <NavLink className="nav-link mouseOverIcon" to="/favoritepets">
            <FontAwesomeIcon
              style={{ color: "5c717a", fontSize: "18px" }}
              icon={faHeart}
            />
          </NavLink>
        ) : (
          <NavLink
            className="nav-link mouseOverIcon"
            data-toggle="modal"
            data-target="#loginFormModal"
          >
            <FontAwesomeIcon
              style={{ color: "5c717a", fontSize: "18px" }}
              icon={faHeart}
            />
          </NavLink>
        )}
      </div>
    </>
  );
};

const NoUserLogIn = (currUser) => {
  return (
    // <ul className="navbar-nav ml-auto iconSearch">
    //   <div className="bigScreen">{SearchHeartIcons()}</div>
    //   <li className="nav-item mr-4">
    //     <NavLink className="nav-link" to="/login">
    //       <span className="nav-btn">Login</span>
    //     </NavLink>
    //   </li>
    //   <li className="nav-item mr-4">
    //     <NavLink className="nav-link" to="/signup">
    //       <span className="nav-btn">Sign Up</span>
    //     </NavLink>
    //   </li>
    // </ul>
    <ul className="navbar-nav ml-auto iconSearch">
      <li className="nav-item mr-4 bigScreen">{SearchHeartIcons(currUser)}</li>
      <div className="dropdown">
        <button
          className="dropdown-toggle nav-btn"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Log/Sign Up
        </button>
        <div
          className="dropdown-menu dropMenu "
          aria-labelledby="dropdownMenuButton"
        >
          <div className="dropMenuItemHolder">
            <NavLink
              data-toggle="modal"
              data-target="#loginFormModal"
              className="nav-link active dropMenuItem"
              // to="/login"
            >
              Login
            </NavLink>
            <NavLink
              data-toggle="modal"
              data-target="#signupFormModal"
              className="nav-link active dropMenuItem"
              // to="/signup"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </ul>
  );
};

const isLogIn = (name, logout, currUser) => {
  return (
    <ul className="navbar-nav ml-auto iconSearch">
      <li className="nav-item mr-4 bigScreen">{SearchHeartIcons(currUser)}</li>
      <div className="dropdown">
        <button
          className="dropdown-toggle nav-btn"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {name}
        </button>
        <div
          className="dropdown-menu dropMenu "
          aria-labelledby="dropdownMenuButton"
        >
          <div className="dropMenuItemHolder">
            {/* <NavLink className="nav-link active dropMenuItem" to="/profile">
              Account Info
            </NavLink>
            <NavLink className="nav-link active dropMenuItem" to="/">
              My Recent Search
            </NavLink> */}
            <NavLink
              className="nav-link active dropMenuItem"
              to="/"
              onClick={logout}
            >
              Sign out
            </NavLink>
          </div>
        </div>
      </div>
    </ul>
  );
};

const middleMenu = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/aboutus">
          About Us
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/organizations">
          Organizations
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <button
          className="nav-link btn-gallery"
          to="/gallery"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Gallery
        </button>
      </li>
    </ul>
  );
};

const NavBar = () => {
  const { currUser, logout } = useContext(UserContext);

  return (
    <nav
      className="container navbar navbar-expand-lg "
      role="navigation"
      style={{ height: "100px" }}
    >
      <Link className="navbar-brand" to="/">
        <div className="titleHolder">
          <FontAwesomeIcon className="titleIcon" icon={faPaw} />
          <span className="titlePage">
            {" "}
            <span style={{ color: "darkred" }}>Pet</span>Treasure{" "}
          </span>
        </div>
      </Link>

      <div className="smallScreen" style={{ display: "flex" }}>
        {SearchHeartIcons(currUser)}
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <FontAwesomeIcon style={{ color: "#5c717a" }} icon={faBars} />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        {middleMenu()}
        {currUser
          ? isLogIn(currUser.firstName, logout, currUser)
          : NoUserLogIn(currUser)}
      </div>
    </nav>
  );
};

export default NavBar;