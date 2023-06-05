import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ##########################################################
// OtherAnimalLink: Component that is use into PetTypeModal to redirect user to to other type of pet
//
// Params:
//        animal: name of the animal to show
//        type: type of icon to show
//        linkTo: link to animal that user click
//

const OtherAnimalLink = ({ animal, type, linkTo }) => {
  return (
    <>
      <Link
        className="linkHolder"
        to={linkTo}
        onClick="$('.modal').modal('hide')"
      >
        <div style={{ padding: "10px" }}>
          <p>
            {" "}
            <FontAwesomeIcon
              className=""
              style={{ color: "#f36250" }}
              icon={type}
            />{" "}
            {animal}
          </p>
        </div>
      </Link>
    </>
  );
};

export default OtherAnimalLink;