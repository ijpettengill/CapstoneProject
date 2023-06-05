import React, { useState, useEffect, useContext } from "react";
import AdoptAPetApi from "../API/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./OrganizationsList.css";
import { Link } from "react-router-dom";
import UserContext from "../UseContext";

// ##########################################################
// Organizations: Display list of organization for the zip code enter

const Organizations = () => {
  const [orgs, setOrgs] = useState([]);
  const { zip_code } = useContext(UserContext);

  useEffect(
    function PreLoadInfo() {
      async function getInitialOrgs() {
        getOrgs(100, zip_code);
      }
      getInitialOrgs();
    },

    []
  );

  async function getOrgs(limit = 20, zip_code) {
    try {
      // HERE HAD TO WORK WITH LOCATION USER LOCATION
      // IF THE USER ENTER E ZIP CODE WE WORK WITH THE ZIP CODE TO SEND THE REQUEST
      // NEED TO STAR WORKING ON THAT ASAP

      let resp = await AdoptAPetApi.getOrgs(limit, 1, zip_code);

      setOrgs(resp);
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <>
      <div className="container tableHolder">
        <table className="table table-hover" style={{ color: "#5c717b" }}>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">ORGANIZATION</th>
              <th scope="col">PET LIST</th>
              <th scope="col">CITY, STATE/PROV</th>
              <th scope="col">CONTACT</th>
            </tr>
          </thead>
          <tbody>
            {orgs
              ? orgs.map((o) => (
                  <tr key={o.id}>
                    <th scope="row">
                      <Link to={`/organizations/${o.id}`}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </Link>
                    </th>
                    <td>{o.name}</td>
                    <td>
                      <Link to={`/gallery/orgsearch/${o.id}`}>
                        {" "}
                        <FontAwesomeIcon icon={faSearch} />
                      </Link>
                    </td>
                    <td>{o.address.city + ", " + o.address.state}</td>
                    <td>{o.phone}</td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          {/* <button
            className="linkHolder1 btn-gallery"
            style={{
              backGroundColor: "white",
              border: "none",
              color: "#606060",
            }}
            onClick={() => loadMore()}
          >
            {" "}
            See More...{" "}
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Organizations;