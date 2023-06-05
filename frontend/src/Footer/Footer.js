import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faSearch,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import SearchForm from "../CommunComponent/SearchForm";

const SearchHeartIcons = () => {
  return (
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
      <NavLink className="nav-link mouseOverIcon" to="/login">
        <FontAwesomeIcon
          style={{ color: "5c717a", fontSize: "18px" }}
          icon={faHeart}
        />
      </NavLink>
    </div>
  );
};

const middleMenu = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-4">
        <NavLink
          className="nav-link footerLink"
          to="/"
          style={{ color: "white" }}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink
          className="nav-link footerLink"
          to="/aboutus"
          style={{ color: "white" }}
        >
          About Us
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink
          className="nav-link footerLink"
          to="/organizations"
          style={{ color: "white" }}
        >
          Organizations
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <button
          className="nav-link btn-gallery1"
          to="/gallery"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          style={{ backgroundColor: "#f86250", color: "white" }}
        >
          Gallery
        </button>
      </li>
    </ul>
  );
};

const FooterBar = () => {
  return (
    <nav
      className="container navbar footer navbar-expand-lg "
      role="navigation"
      style={{ height: "100px" }}
    >
      <Link className="navbar-brand footerLink" to="/">
        <div className="titleHolder">
          <FontAwesomeIcon className="titleIcon1" icon={faPaw} />
          <span className="titlePage">
            {" "}
            <span style={{ color: "white" }}>PetTreasure</span>{" "}
          </span>
        </div>
      </Link>

      <div className="smallScreen" style={{ display: "flex" }}>
        {/* {SearchHeartIcons()} */}
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
      </div>
      <div style={{ width: "300px", display: "flex", justifyContent: "end" }}>
        <FontAwesomeIcon
          className="footerLink"
          style={{ color: "white", fontSize: "35px", marginRight: "20px" }}
          icon={faFacebookF}
        />
        <FontAwesomeIcon
          className="footerLink"
          style={{ color: "white", fontSize: "35px", marginRight: "20px" }}
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="footerLink"
          style={{ color: "white", fontSize: "35px", marginRight: "20px" }}
          icon={faTwitter}
        />
      </div>
    </nav>
  );
};

export default FooterBar;