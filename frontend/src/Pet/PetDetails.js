import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import PetPicCarousel from "./PetPicCarousel";
import AdoptAPetApi from "../API/Api";
import OrganizationCard from "../Organizations/OrganizationCard";
import "./PetDetails.css";
import "../GeneralCSS/Spinner.css";
import Favorite from "../Favorite/Favorite.js";
import UserContext from "../UseContext";
import CommentForm from "../Comments/CommentForm";
import CommentList from "../Comments/CommentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

// ##########################################################
// PetDetails: Display the pet details
//
//      PetPicCarousel: Component that is use to display the pic for the pet
//      OrganizationCard: Component to Display organization that is holding the pet
//      CommentList: Component to add and display comment for that pet

const PetDetails = () => {
  const [pet, setPet] = useState();
  const [org, setOrganization] = useState();
  const [comment, setComment] = useState();
  const { pet_id } = useParams();
  const { currUser } = useContext(UserContext);

  useEffect(function PreLoadInfo() {
    async function getInitialPet() {
      getPetAndOrganization();
    }
    getInitialPet();
  }, []);

  async function getPetAndOrganization() {
    try {
      let respPet = await AdoptAPetApi.getPetById(pet_id);
      let respOrg = await AdoptAPetApi.getOrganizationById(
        respPet.organization_id
      );
      let respComment = await AdoptAPetApi.getCommentForPet(pet_id);
      setPet(respPet);
      setOrganization(respOrg);
      setComment(respComment);
    } catch (errors) {
      console.log(errors);
    }
  }

  async function addCommentForPet(data) {
    let resp = await AdoptAPetApi.addCommentForPet(data);
    getPetAndOrganization();
  }

  return (
    <>
      <div className="petDetail">
        {pet ? <PetPicCarousel pet={pet} /> : ""}
        {pet ? (
          <div className="petDetailText">
            <div className="nameFavHolder">
              <h3 className="petName1">{pet.name}</h3>

              <div style={{ position: "relative" }}>
                {currUser ? <Favorite pet={pet} /> : ""}
              </div>
            </div>
            <p className="petText1">
              {pet.breeds.primary} •{" "}
              {org ? org.address.city + ", " + org.address.state : ""}
            </p>
            <div className="somePetDetail">
              <p className="petText2">
                {pet.age} • {pet.gender} • {pet.size}
                {pet.colors.primary
                  ? " • " + pet.colors.primary + pet.colors.secondary
                  : ""}
              </p>
            </div>
            <div>
              <h3 className="petName1">About</h3>
              {pet.tags.length !== 0 ? (
                <div>
                  <p>CHARACTERISTICS</p>
                  <p className="chararteristics">
                    • {pet.tags ? pet.tags.map((tag) => tag + " • ") : ""}
                  </p>
                </div>
              ) : (
                ""
              )}
              {pet.coat ? (
                <div>
                  <p>COAT LENGTH</p>
                  <p className="chararteristics">• {pet.coat}</p>
                </div>
              ) : (
                ""
              )}

              <p>HOUSE-TRAINED</p>
              <p className="chararteristics">
                {" "}
                • {pet.attributes.house_trained ? "Yes" : "No"}
              </p>

              <p>HEALTH</p>
              <p className="chararteristics">
                {" "}
                {pet.attributes.shots_current
                  ? "• Vaccinations up to date"
                  : ""}
                {pet.attributes.spayed_neutered ? " • spayed / neutered." : ""}
              </p>

              {pet.environment.children ||
              pet.environment.cats ||
              pet.environment.dogs ? (
                <div>
                  <p>GOOD IN A HOME WITH</p>
                  <p className="chararteristics">
                    {" "}
                    {pet.environment.children ? " • Children " : ""}
                    {pet.environment.cats ? " • Cats " : ""}
                    {pet.environment.dogs ? " • Dogs" : ""}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="loaderDetailPet">
            <div className="loader"></div>
          </div>
        )}
      </div>
      {pet ? (
        <>
          <OrganizationCard org={org} />
          <CommentList list_msg={comment} />
          {currUser ? (
            <CommentForm
              pet_id={pet_id}
              pet={pet}
              user={currUser}
              addCommentForPet={addCommentForPet}
            />
          ) : (
            <>
              <div
                className="somePetDetail2"
                style={{
                  marginLeft: "60px",
                  marginRight: "85px",
                  marginTop: "25px",
                }}
              ></div>
              <div className="loginForComment">
                <h2>
                  To leave a comment you need to login{" "}
                  <FontAwesomeIcon className="titleIcon" icon={faPaw} />
                  <span className="titlePage">
                    {" "}
                    <span style={{ color: "darkred" }}>Adopt-a-Pet</span>{" "}
                  </span>{" "}
                  by clicking the button below.
                </h2>
                <button
                  className="loginBtnComment nav-btn"
                  data-toggle="modal"
                  data-target="#loginFormModal"
                >
                  Login to comment
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default PetDetails;