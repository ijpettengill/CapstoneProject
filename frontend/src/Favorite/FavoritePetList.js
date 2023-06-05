import React, { useState, useEffect, useContext } from "react";
import UserContext from "../UseContext";
import GalleryPetCard from "../Gallery/GalleryPetCard";
import { v4 as uuidv4 } from "uuid";
import AdoptAPetApi from "../API/Api";
import "./FavoritePetList.css";

// ##########################################################
// FavoritePetList: display favorite pet for the user that is login
//                  display the recent pet view by the user
//

const FavoritePetList = () => {
  const [pets, setPets] = useState([]);
  const [recent, setRecentPetView] = useState([]);
  const { currUser } = useContext(UserContext);

  useEffect(
    function PreLoadInfo() {
      async function getInitialPet() {
        getFavPets();
      }
      getInitialPet();
    },

    []
  );

  async function getFavPets() {
    try {
      let resp = await AdoptAPetApi.GetAllFavoritePet(
        currUser ? currUser.username : undefined
      );
      let respRecent = await AdoptAPetApi.GetAllRecentPetView(
        currUser ? currUser.username : undefined
      );

      let tempPets = [];
      let tempRecPets = [];
      resp.pets.map((p) => tempPets.push(JSON.parse(p.pet_info)));
      respRecent.pets.map((p) => tempRecPets.push(JSON.parse(p.pet_info)));
      setPets(tempPets);
      setRecentPetView(tempRecPets);
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <>
      <div className="petAvailable">
        <h3 className="" style={{ marginLeft: "40px" }}>
          My Favorites
        </h3>
        <div className="petHolder">
          {pets ? (
            pets.map((p) =>
              p ? (
                <GalleryPetCard
                  key={uuidv4()}
                  pet={p}
                  linkTo={`/animal/${p.id}`}
                />
              ) : (
                ""
              )
            )
          ) : (
            <div className="loader"></div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBlock: "40px",
          }}
        ></div>
      </div>

      <div className="petAvailable">
        <h3 className="" style={{ marginLeft: "40px" }}>
          Recently Viewed Pets
        </h3>
        <div className="petHolder">
          {recent ? (
            recent.map((p) =>
              p ? (
                <GalleryPetCard
                  key={uuidv4()}
                  pet={p}
                  linkTo={`/animal/${p.id}`}
                />
              ) : (
                ""
              )
            )
          ) : (
            <div className="loader"></div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBlock: "40px",
          }}
        ></div>
      </div>
    </>
  );
};

export default FavoritePetList;