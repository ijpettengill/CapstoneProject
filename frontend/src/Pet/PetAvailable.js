import React, { useState, useEffect } from "react";
import AdoptAPetApi from "../API/Api";
import PetAvailableCard from "./PetAvailableCard";
import "./PetAvailable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// ##########################################################
// Organizations: Display list of in the homepage limit 5 pets

const PetAviable = () => {
  const [pets, setPets] = useState();

  useEffect(function PreLoadInfo() {
    async function getInitialPet() {
      getRandPet();
    }
    getInitialPet();
  }, []);

  async function getRandPet(limit = 5, type = "NoType") {
    try {
      let resp = await AdoptAPetApi.getRandomPet(limit, type);
      setPets(resp);
    } catch (errors) {
      console.log(errors);
    }
  }
  return (
    <>
      <div className="petAvailable">
        <div className="titlePetAdoption">
          <h3
            style={{
              fontSize: "xx-large",
              textAlign: "center",
              color: "white",
            }}
          >
            • Pet Available for Adoption •
          </h3>
        </div>
        <div>
          {" "}
          <h3
            style={{
              fontSize: "xx-large",
              textAlign: "center",
              marginTop: "80px",
              marginBlock: "40px",
            }}
          >
            Our best collection
          </h3>
          <div
            className="buttonHolder"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              className="nav-btn available-btn"
              onClick={() => getRandPet(5, "cat")}
            >
              Cats
            </button>
            <button
              className="nav-btn available-btn"
              onClick={() => getRandPet(5, "dog")}
            >
              Dogs
            </button>
            <button
              className="nav-btn available-btn"
              onClick={() => getRandPet(5, "rabbit")}
            >
              Rabbits
            </button>
            <button
              className="nav-btn available-btn"
              onClick={() => getRandPet(5, "bird")}
            >
              Birds
            </button>
          </div>
        </div>
        <div className="petHolder">
          {pets
            ? pets.map((p) => (
                <PetAvailableCard
                  key={p.id}
                  pet={p}
                  linkTo={`animal/${p.id}`}
                />
              ))
            : ""}
          <div
            className="toggler"
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <div className="cardMain1">
              <div className="backGroundCard1"></div>
              <div className="cardHolder1">
                <div className="findMore">
                  <FontAwesomeIcon className="iconHolder1" icon={faPaw} />
                  <div
                    className="petData1"
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <p
                      style={{
                        fontSize: "16.9px",
                        textAlign: "center",
                        marginBottom: "30px",
                      }}
                    >
                      6000+ more pets available on{" "}
                      <span style={{ color: "darkred" }}>Adopt-A-Pet</span>{" "}
                    </p>
                  </div>

                  <span className="titlePage">
                    {" "}
                    <p
                      style={{
                        fontSize: "16.9px",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    >
                      {" "}
                      MEET THEM{" "}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBlock: "40px",
          }}
        >
          <Link className="linkHolder1" to="gallery">
            {" "}
            See More...{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default PetAviable;