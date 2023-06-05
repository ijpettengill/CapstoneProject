import React, { useState, useEffect, useContext } from "react";
import AdoptAPetApi from "../API/Api";
import GalleryPetCard from "./GalleryPetCard";
import { v4 as uuidv4 } from "uuid";
import "../GeneralCSS/Spinner.css";
import UserContext from "../UseContext";

// ##########################################################
// PetList: Display a list of pet that is going to be show
//
// Params:
//        currType: current pet that is to show
//        org_id: organization where the pet is hold
//        location: will be use to see the location that the user enter
//                  can change when the user search for a pet
//        searchVal: is the search value that will be use for the search
//

const PetList = ({ currType, org_id, location, searchVal }) => {
  const [pets, setPets] = useState();
  const [pageCount, setPageCount] = useState(1);
  const { zip_code } = useContext(UserContext);

  useEffect(
    function PreLoadInfo() {
      async function getInitialPet() {
        if (org_id) {
          getPetsForOrg(100, org_id);
        } else {
          getPets();
        }
      }
      getInitialPet();
    },

    [currType, location, searchVal]
  );

  async function getPets(limit = 20, type = currType) {
    try {
      let resp = await AdoptAPetApi.getPets(
        limit,
        type,
        1,
        location ? location : zip_code
      );
      if (!resp) {
        setPets([]);
      } else {
        setPageCount(1);
        setPets(resp);
      }
    } catch (errors) {
      console.log(errors);
    }
  }

  async function getPetsForOrg(limit = 20, org_id) {
    try {
      let resp = await AdoptAPetApi.getPetsForOrg(limit, org_id);
      setPageCount(1);
      setPets(resp);
    } catch (errors) {
      console.log(errors);
    }
  }

  async function loadMore(limit = 20, type = currType) {
    try {
      let resp = await AdoptAPetApi.getPets(
        limit,
        type,
        pageCount + 1,
        location ? location : zip_code
      );
      setPageCount(pageCount + 1);
      setPets([...pets, ...resp]);
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <>
      <div className="petAvailable">
        <div className="petHolder">
          {pets ? (
            pets.length === 0 ? (
              <div>
                <h2 style={{ textAlign: "center" }}>No Pets Found</h2>
                <p>
                  There are no pets that match your current search. Try change
                  some of them to get better results.{" "}
                </p>
              </div>
            ) : (
              pets.map((p) => (
                <GalleryPetCard
                  key={uuidv4()}
                  pet={p}
                  linkTo={`/animal/${p.id}`}
                  location={location ? location : zip_code}
                />
              ))
            )
          ) : (
            <div className="loader"></div>
          )}
        </div>

        {pets ? (
          pets.length === 0 ? (
            <h2 style={{ marginBottom: "70px" }}> </h2>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBlock: "40px",
              }}
            >
              <button
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
              </button>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default PetList;