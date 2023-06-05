import React, { useState, useEffect } from "react";
import AdoptAPetApi from "../API/Api";
import "./HomePetCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";

// ##########################################################
// HomePetCard: this is the pet card show on the top of the page is a random pet
//              that can be refresh if you click the buttom
//

const HomePetCard = () => {
  const [pet, setPet] = useState();

  useEffect(function PreLoadInfo() {
    async function getInitialPet() {
      getRandPet();
    }
    getInitialPet();
  }, []);

  async function getRandPet() {
    try {
      let resp = await AdoptAPetApi.getRandomPet();
      setPet(resp[0]);
    } catch (errors) {
      console.log(errors);
    }
  }
  return (
    <>
      <div className="cardMain">
        <div className="topRightIcon"></div>
        <div className="topRightIcon2">
          <FontAwesomeIcon
            className="centerIcon"
            style={{ color: "#f36250" }}
            icon={faBowlFood}
          />
        </div>
        <div className="buttonRefresh">
          <button
            style={{ alignSelf: "center" }}
            className="nav-btn"
            onClick={getRandPet}
          >
            <FontAwesomeIcon
              style={{ color: "red" }}
              icon={faArrowRotateRight}
            />
          </button>
        </div>
        <div className="backGroundCard"></div>
        <div className="cardHolder">
          {pet && pet.primary_photo_cropped ? (
            <img
              className="imgHolder"
              src={
                pet
                  ? pet.primary_photo_cropped.full
                  : "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              }
              alt="Img Random Animal"
            />
          ) : (
            <img
              className="imgHolder"
              src={
                "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              }
              alt="Img Random Animal"
            />
          )}

          <div className="petData" style={{ display: "flex" }}>
            <p style={{ fontWeight: "bolder" }}>
              {pet ? pet.name.slice(0, 19) : "Loading..."}
            </p>
            <p style={{ fontWeight: "bolder" }}>
              {pet ? pet.age : "Loading..."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePetCard;