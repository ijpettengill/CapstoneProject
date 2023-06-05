import React, { useContext } from "react";
import "./Home.css";
import UserContext from "../UseContext";
import HomeHeader from "./HomeHeader";
import HomePetCard from "./HomePetCard";
import HomeMiddle from "./HomeMiddle";
import PetAviable from "../Pet/PetAvailable";
import MessagesList from "./MessagesList";
import "../NavBar/NavBar.css";

// ##########################################################
// Home: display homepage that hold multiple component to build home
//

const Home = () => {
  return (
    <>
      {" "}
      <div className="Home container">
        {/* Home Header Component, Title, Message, Explore Buttom and Some data */}
        <HomeHeader />
        {/* Pet Card Component for Home, display basic info for a random pet */}
        <HomePetCard />
      </div>
      <div className="">
        {/* HomeMiddle hold the buttom as guide to look for more pets */}
        <HomeMiddle />
      </div>
      <div>
        {/* show a display of 5 random pet from any kind to fill home */}
        <PetAviable />
      </div>
      <div>
        {/* show the last 5 comment added */}
        <MessagesList />
      </div>
    </>
  );
};

export default Home;