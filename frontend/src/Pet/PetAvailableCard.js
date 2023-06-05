import React from "react";
import "./PetAvailableCard.css";
import { Link } from "react-router-dom";

// ##########################################################
// PetAvailableCard: This is the pet card available for homepage

const PetAvailableCard = ({ pet, linkTo }) => {
  return (
    <>
      <Link className="linkHolder" to={linkTo}>
        <div className="cardMain">
          <div className="backGroundCard1"></div>
          <div className="cardHolder1">
            {pet && pet.primary_photo_cropped ? (
              <img
                className="imgHolder1"
                src={
                  pet
                    ? pet.primary_photo_cropped.full
                    : "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                }
                alt="Img Random Animal"
              />
            ) : (
              <img
                className="imgHolder1"
                src={
                  "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                }
                alt="Img Random Animal"
              />
            )}

            <div
              className="petData"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <p style={{ fontWeight: "bolder" }}>
                {pet ? pet.name.slice(0, 10) : "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PetAvailableCard;