import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./MessagesList.css";
import { Link } from "react-router-dom";

// ##########################################################
// MessagesCard: Comment card that will be show on the button of the page
//
// Params:
//        src: pet img src to show on card
//        name: user name
//        msg: comment that is show
//        pet_id: pet id to handle the link to that pet
//        pet_name: pet name
//

const MessagesCard = ({ src, name, msg, pet_id, pet_name }) => {
  return (
    <>
      <div
        className="messageHolder"
        style={{ display: "flex", width: "80%", marginTop: "50px" }}
      >
        <Link
          className="linkHolder"
          to={`/animal/${pet_id}`}
          // onClick={() => addRecentPetView()}
        >
          <img className="d-block imgLeft" src={src} alt="First slide" />
        </Link>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <FontAwesomeIcon
              style={{
                color: "5c717a",
                fontSize: "40px",
                marginLeft: "60px",
                marginBottom: "20px",
              }}
              icon={faQuoteLeft}
            />
          </div>
          <div
            style={{
              color: "5c717a",
              fontSize: "40px",
              marginLeft: "60px",
              width: "auto",
            }}
          >
            <h2
              style={{
                color: "#5c717a",
                fontSize: "35px",
                marginBottom: "20px",
              }}
            >
              {pet_name}
            </h2>
            <p style={{ lineHeight: "35px" }}>{msg}</p>
          </div>
          <div
            style={{
              color: "5c717a",
              fontSize: "40px",
              marginLeft: "60px",
              width: "300px",
            }}
          >
            <p
              style={{
                color: "#f86250",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesCard;