import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PetList from "./PetList";

// ##########################################################
// Gallery: Is the main gallery to display pets
//          Gallery will display the search pet too
//
// Params:
//        currType: is the current type of pet that will be display this can be change
//        searchVal: is the search value that will be use for the search
//        animalType: type of animal that will be use to do the search
//        location: location that will be use to do the search
//
const Gallery = ({ currType }) => {
  const { animal, org_id } = useParams();
  const { searchVal } = useParams();
  const [animalType, setAnimalType] = useState("");
  const [location, setLocation] = useState("");

  useEffect(
    function PreLoadInfo() {
      async function getInitialPet() {
        if (searchVal) {
          setAnimalType(JSON.parse(searchVal).animals_type);
          setLocation(JSON.parse(searchVal).location);
        } else {
          if (currType) {
            setAnimalType(currType);
          } else {
            setAnimalType(animal);
          }
        }
      }
      getInitialPet();
    },

    [searchVal, animalType, location]
  );

  return (
    <>
      <PetList
        currType={animalType}
        org_id={org_id}
        location={location}
        searchVal={searchVal}
      />
    </>
  );
};

export default Gallery;