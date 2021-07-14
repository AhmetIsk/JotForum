import {h} from 'preact';
import  { createContext, useState } from "react";
import { useMediaQuery } from 'react-responsive';

export const DataContext = createContext();

// This context provider is passed to any component requiring the context
export const FetchData = ({ children }) => {
  const [data, setData] = useState(null);
  const [formID, setFormID] = useState("");
  const [apiKey, setApiKey] = useState("");
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("JFUserInfo")));
  return (
    <DataContext.Provider
      value={{ data, setData, formID, setFormID, apiKey, setApiKey, isLoggedIn, setIsLoggedIn, isTabletOrMobile }}>
      {children}
    </DataContext.Provider>
  );
};