import React, { createContext, useContext, useReducer } from "react";

export const DialogContext = createContext();

export const DialogProviderSSJ = ({ reducer, initialState, children }) => (
  <DialogContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DialogContext.Provider>
);
export const useDialogValueSSJ = () => useContext( DialogContext); 
 