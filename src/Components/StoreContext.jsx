/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [storeCreated, setStoreCreated] = useState(false);

  // Optional: persist status to localStorage to survive page refresh
  useEffect(() => {
    const storedStatus = localStorage.getItem("storeCreated");
    if (storedStatus === "true") setStoreCreated(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("storeCreated", storeCreated ? "true" : "false");
  }, [storeCreated]);

  return (
    <StoreContext.Provider value={{ storeCreated, setStoreCreated }}>
      {children}
    </StoreContext.Provider>
  );
};
