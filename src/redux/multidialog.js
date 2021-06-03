import React, { createContext, useContext, useReducer } from "react";

export const MultiDialogContext = createContext();

export const MultiDialogProviderSSJ = ({ reducer, initialState, children }) => (
  <MultiDialogContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </MultiDialogContext.Provider>
);
export const useMultiDialogValueSSJ = () => useContext( MultiDialogContext); 
