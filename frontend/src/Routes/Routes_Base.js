import React, { useContext } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import UserProfile from "../Auth/UserProfile";
import UserContext from "../UseContext";
import AboutUs from "../AboutUs/AboutUs";
import Organizations from "../Organizations/OrganizationsList";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import PetTypeModal from "../Modals/PetTypeModal";
import PetDetails from "../Pet/PetDetails";
import OrganizationDetails from "../Organizations/OrganizationDetails";
import "./Routes_Base.css";
import LoginModal from "../Modals/LoginModal";
import SignUpModal from "../Modals/SignUpModal";
import FavoritePetList from "../Favorite/FavoritePetList";

function Routes_Base({ login, signup }) {
  const { currUser } = useContext(UserContext);

  // Simple Security Check to see if User is Login
  const SecureRoute = (path, component) => {
    if (currUser) {
      return <Route exact path={path} element={component}></Route>;
    } else {
      return (
        <Route path="*" element={<Navigate exact="true" to="/login" />}></Route>
      );
    }
  };

  return (
    <BrowserRouter>
      <PetTypeModal />
      <LoginModal login={login} />
      <SignUpModal signup={signup} />
      <NavBar />
      <div className="container MainContent">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/favoritepets"
            element={<FavoritePetList />}
          ></Route>
          {/* <Route
            exact
            path="/signup"
            element={<SignUpForm signup={signup} />}
          ></Route> */}
          <Route exact path="/aboutus" element={<AboutUs />}></Route>
          <Route
            exact
            path="/organizations"
            element={<Organizations />}
          ></Route>
          <Route
            exact
            path="/organizations/:org_id"
            element={<OrganizationDetails />}
          ></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route
            exact
            path="/gallery/dogs/"
            element={<Gallery currType="dog" />}
          ></Route>
          <Route
            exact
            path="/gallery/cats/"
            element={<Gallery currType="cat" />}
          ></Route>
          <Route
            exact
            path="/gallery/orgsearch/:org_id"
            element={<Gallery />}
          ></Route>
          <Route
            exact
            path="/gallery/others/:animal/"
            element={<Gallery currType={null} />}
          ></Route>
          <Route
            exact
            path="/gallery/search/:searchVal/"
            element={<Gallery currType={null} />}
          ></Route>

          <Route exact path="/animal/:pet_id" element={<PetDetails />}></Route>

          {/* Ensuring that the user is login to access this routes */}
          {SecureRoute("/profile", <UserProfile />)}

          <Route path="*" element={<Navigate exact="true" to="/" />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Routes_Base;