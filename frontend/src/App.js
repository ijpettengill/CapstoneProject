import React, { useState, useEffect } from "react";
import Routes_Base from "./Routes/Routes_Base";
import jwtDecode from "jwt-decode";
import PetTreasureApi from "./API/Api";
import UserContext from "./UseContext";
import useLocalStore from "./CommunComponent/useLocalStore";
import PetTypeModal from "./Modals/PetTypeModal";

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStore("token");
  const [zip_code, setZipCode] = useLocalStore("zip_code");

  useEffect(
    function loadUserInfo() {
      async function getUserInfo() {
        if (token) {
          try {
            let { username } = jwtDecode(token);
            PetTreasureApi.token = token;
            let user = await PetTreasureApi.getUser(username);
            setCurrUser(user);
            setZipCode(user.zip_code);
          } catch (error) {
            console.log(error);
          }
        }
      }
      getUserInfo();
    },
    [token]
  );

  async function login(info) {
    try {
      let token = await PetTreasureApi.login(info);
      setToken(token);
      return true;
    } catch (errors) {
      return errors;
    }
  }

  async function signup(info) {
    try {
      let token = await PetTreasureApi.signup(info);
      setToken(token);
      return true;
    } catch (errors) {
      console.log(errors);
      return errors;
    }
  }

  const logout = () => {
    setCurrUser(null);
    setToken(null);
    setZipCode(null);
  };

  return (
    <UserContext.Provider value={{ currUser, logout, setCurrUser, zip_code }}>
      <Routes_Base login={login} signup={signup} />
    </UserContext.Provider>
  );
}

export default App;