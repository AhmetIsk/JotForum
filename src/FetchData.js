import {h} from 'preact';
import  { createContext, useState } from "react";

export const DataContext = createContext();

// This context provider is passed to any component requiring the context
export const FetchData = ({ children }) => {
  const [data, setData] = useState(null);
  const [formID, setFormID] = useState("");
  return (
    <DataContext.Provider
      value={{ data,setData,formID,setFormID }}
    >
      {children}
    </DataContext.Provider>
  );
};