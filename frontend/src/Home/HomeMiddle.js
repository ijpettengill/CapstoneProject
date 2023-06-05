import React from "react";
import "./HomeMiddle.css";
import MiddleIcon from "./MiddleIcon";
import {
  faDog,
  faCat,
  faHippo,
  faCampground,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// ##########################################################
// HomeMiddle: display home middle icons to link to gallery dogs, cats, other and organization
//
const HomeMiddle = () => {
  return (
    <>
      <div
        style={{
          borderTop: "2px solid black",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      ></div>
      <div className="mainContainer">
        <div className="container title">
          <h1>FIND YOUR NEW BEST FRIEND</h1>
          <p>
            Browse pets from our network of over 11,500 shelters and rescues.
          </p>
          <div className="iconHolders">
            <MiddleIcon type={faDog} linkTo="/gallery/dogs" animal="Dogs" />
            <MiddleIcon type={faCat} linkTo="/gallery/cats" animal="Cats" />
            <div data-toggle="modal" data-target="#exampleModalCenter">
              <button
                className="linkHolder"
                // to={linkTo}
                // onClick="$('.modal').modal('hide')"
              >
                <div className="iconHolder">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <FontAwesomeIcon
                      className="searchIcon"
                      style={{ color: "#f36250" }}
                      icon={faHippo}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <p style={{ marginTop: "15px" }}>Others</p>
                  </div>
                </div>
              </button>
            </div>
            <MiddleIcon
              type={faCampground}
              linkTo="/organizations"
              animal="Shelters and Rescue"
            />
          </div>
        </div>
      </div>
      {/* <div
        style={{
          borderTop: "2px solid black",
          marginBottom: "40px",
          marginTop: "70px",
        }}
      ></div> */}
    </>
  );
};

export default HomeMiddle;