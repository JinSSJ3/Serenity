import { createContext, useContext, useReducer } from "react";

export const BackDropContext = createContext();

export const BackDropProvider = ({ reducer, initialState, children }) => (
  <BackDropContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </BackDropContext.Provider>
);

export const useBackDropValue = () => useContext(BackDropContext);
