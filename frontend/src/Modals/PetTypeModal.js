import React from "react";
import MiddleIcon from "../Home/MiddleIcon";
import {
  faDog,
  faCat,
  faPaw,
  faHorse,
  faFeather,
  faFish,
  faCrop,
} from "@fortawesome/free-solid-svg-icons";
import "../GeneralCSS/BaseModal.css";
import "./PetTypeModal.css";
import OtherAnimalLink from "./OtherAnimalLink";

// ##########################################################
// PetTypeModal: Component that show pet types to get to gallery and see that type of pets
//

const PetTypeModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className="modal-content modalContainer"
            style={{ width: "fit-content" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Let's get this right...
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="modal-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <p style={{ textAlign: "center" }}>
                  What kind of pet are you looking for?
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "10px" }}>
                  <MiddleIcon
                    type={faDog}
                    linkTo="/gallery/dogs"
                    animal="Dogs"
                  />
                </div>
                <div style={{ marginRight: "10px" }}>
                  <MiddleIcon
                    type={faCat}
                    linkTo="/gallery/cats"
                    animal="Cats"
                  />
                </div>
              </div>
              <p style={{ marginTop: "30px" }}> Other Animals</p>
              <div className="OtherPetHolder">
                <OtherAnimalLink
                  animal="Rabbits"
                  type={faPaw}
                  linkTo="/gallery/others/rabbit"
                />
                <OtherAnimalLink
                  animal="Small & Furry"
                  type={faCrop}
                  linkTo="/gallery/others/small-furry"
                />
                <OtherAnimalLink
                  animal="Horses"
                  type={faHorse}
                  linkTo="/gallery/others/horse"
                />
                <OtherAnimalLink
                  animal="Brids"
                  type={faFeather}
                  linkTo="/gallery/others/bird"
                />
                <OtherAnimalLink
                  animal="Scale, Fin & Others"
                  type={faFish}
                  linkTo="/gallery/others/scales-fins-other"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="nav-btn" data-dismiss="modal">
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetTypeModal;