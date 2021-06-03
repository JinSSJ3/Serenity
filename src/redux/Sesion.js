import React, { createContext, useContext, useReducer } from "react";

export const UserContext = createContext();

export const UserProvider = ({ reducer, initialState, children }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);
export const useUserValue = () => useContext(UserContext);

export const localLogin = (usuario) => {
  console.log("guardando: ", usuario);
  sessionStorage.clear();
  sessionStorage.Sesion = JSON.stringify(usuario);
  console.log("se guardo: ", sessionStorage.Sesion);
};

export const localLogOut = () => {
  sessionStorage.clear();
  //window.location.replace("./");
};
export const localInitLogUser = localLogOut;

export const getUser = () => {
  let retrievedObject = sessionStorage.Sesion;
  console.log("Consultando el Storage", retrievedObject);
  if (!retrievedObject) return retrievedObject;
  let retrievedJson = JSON.parse(retrievedObject);
  return retrievedJson;
};
export const getAuth = () => {
  if (!sessionStorage.Sesion) return false;
  return true;
};
export const getRol = () => {
  if (!sessionStorage.Sesion) return undefined;
  return JSON.parse( sessionStorage.Sesion ).rol;
};
export const reinitialize = () => {
  let retrievedObject = sessionStorage.Sesion;
  if (!retrievedObject) return retrievedObject;
  let retrievedJson = JSON.parse(retrievedObject);
  return retrievedJson;
};
