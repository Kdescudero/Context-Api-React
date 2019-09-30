import React, { createContext } from "react";

export const AppContext = createContext({});

const usersData = [
  { id: 1, name: "Tania", username: "floppydiskette" },
  { id: 2, name: "Craig", username: "siliconeidolon" },
  { id: 3, name: "Ben", username: "benisphere" }
];

export const AppProvider = ({ children }) => (
  <AppContext.Provider
    value={{
      usersData
    }}
  >
    {children}
  </AppContext.Provider>
);
