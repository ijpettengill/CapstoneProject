import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./OrganizationCard.css";
import { Link } from "react-router-dom";

// ##########################################################
// OrganizationCard: Single organization that is going to be show
// Params:
//        org: Current organization info
//

const OrganizationCard = ({ org }) => {
  return (
    <>
      {org ? (
        <div style={{ display: "flex" }}>
          <div className="card mb-3 orgHolder">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 className="petName1" style={{ marginTop: "8px" }}>
                Organization
              </h3>
              <p className="petName1">
                <Link to={`/organizations/${org.id}`}>
                  <FontAwesomeIcon
                    style={{ color: "5c717a", marginRight: "2px" }}
                    icon={faAngleRight}
                  />{" "}
                  More Details
                </Link>
              </p>
            </div>
            <div className="somePetDetail2"></div>
            <img
              className="card-img-top"
              src={
                org.photos.length !== 0
                  ? org.photos[0].full
                  : "https://images.unsplash.com/photo-1597160449583-5c76ed653055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80"
              }
              alt="Card image cap"
            />
            <div className="card-body textHolder">
              <h5
                className="card-title"
                style={{ textAlign: "-webkit-match-parent" }}
              >
                {org.name} •{" "}
                {org ? org.address.city + ", " + org.address.state : ""}
              </h5>

              <p className="card-text"> </p>
              <p className="card-text">
                <FontAwesomeIcon
                  className=""
                  style={{ color: "5c717a", marginRight: "2px" }}
                  icon={faMapLocationDot}
                />{" "}
                {org.address.address1 ? org.address.address1 : ""}{" "}
                {org
                  ? org.address.city +
                    ", " +
                    org.address.state +
                    ", " +
                    org.address.postcode
                  : ""}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {" "}
                  <FontAwesomeIcon
                    className=""
                    style={{ color: "5c717a", marginRight: "10px" }}
                    icon={faPhone}
                  />{" "}
                  {org.phone ? org.phone : ""}{" "}
                </small>
              </p>
            </div>
            {/* <div className="mapAddress"></div> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default OrganizationCard;