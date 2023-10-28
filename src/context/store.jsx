// AppContext.js
import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "INSERT_PENGUNJUNG":
      return { ...state, namaPengunjung: action.payload };

    default:
      return state;
  }
};

const initialState = {
  namaPengunjung: null
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
