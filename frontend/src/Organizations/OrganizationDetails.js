import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdoptAPetApi from "../API/Api";
import "./OrganizationDetails.css";
import "../GeneralCSS/Spinner.css";
import OrganizationPicSlide from "./OrganizationPicSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMailBulk,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

// ##########################################################
// OrganizationDetails: Single organization detail

const OrganizationDetails = () => {
  const [org, setOrg] = useState();
  const { org_id } = useParams();

  useEffect(
    function PreLoadInfo() {
      async function getInitialOrg() {
        getOrgById();
      }
      getInitialOrg();
    },

    []
  );

  async function getOrgById() {
    try {
      let resp = await AdoptAPetApi.getOrganizationById(org_id);
      setOrg(resp);
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <>
      {org ? (
        <div className="org_details">
          <OrganizationPicSlide org={org} />
          <div className="card-body textHolder">
            <h5
              className="card-title"
              style={{ textAlign: "-webkit-match-parent" }}
            >
              {org.name} •{" "}
              {org ? org.address.city + ", " + org.address.state : ""}
            </h5>
            <p>Mission: {org.mission_statement ? org.mission_statement : ""}</p>

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
              <small className="text-muted" style={{ fontSize: "18px" }}>
                {" "}
                <FontAwesomeIcon
                  className=""
                  style={{ color: "5c717a", marginRight: "10px" }}
                  icon={faMailBulk}
                />{" "}
                {org.email ? org.email : ""}{" "}
              </small>
            </p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                <FontAwesomeIcon
                  className=""
                  style={{ color: "5c717a", marginRight: "10px" }}
                  icon={faFacebook}
                />{" "}
                {org.social_media.facebook ? org.social_media.facebook : ""}{" "}
              </small>
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
        </div>
      ) : (
        <div className="loaderDetail">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default OrganizationDetails;