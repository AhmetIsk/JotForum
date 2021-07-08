import { useState, useEffect, useContext } from "react";
import { h } from 'preact'
import CommentInput from "./CommentInput";
import miniJFApi from "./miniJFApi";
import { DataContext } from "./fetchData";
import ListComments from "./ListComments";
import {copyRightStyle, header, headingStyle, pStyle} from "./styles/appStyle.js";

export default function App (props) {
  const fetchData = useContext(DataContext);
  const apiKey = props.apiKey;
  fetchData.setApiKey(props.apiKey);
  const pageName = props.page;
  const api = new miniJFApi(props.apiKey);
  console.log(apiKey);
  const [formID, setFormID] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const initialLoad = async () => { 
      const resultFormID = await api.initializeForm(pageName);
      setFormID(resultFormID);
    }
    initialLoad();
  }, [apiKey]);

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/${formID}/submissions?apikey=${apiKey}&orderby=id`)
    .then((response) => {
    if (response.ok) {
      return response.json();
    }
      throw response;
    })
    .then(data => {
      fetchData.setData(data);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
    }, [formID]);

    if (loading) return "Loading...";
    if (error) return "Error!";

  return (
    <div>
    <div style={header}>
      <img style="width: 60px" src="https://www.jotform.com/wepay/assets/img/podo.png?v=1.0.0.0"/>
      <h1 style={headingStyle}>
       This blog is created using JotForum</h1>
       </div>
      <p style={pStyle}>
        JotForum is a forum tool that allows people to communicate with each other. Library works after installing via npm and declaring in your html or js files.
        You need to provide your JotForm api key for initialization. Then, JotForum creates a form with the name which is same with your file name. Each time a user
        comments or replies, the data is sent via jotform api to the created form. If the form is already created with given name, current submissions (comments & replies)
        are displayed. 
      </p>
      
      <div style={header}>
        <CommentInput text="Join the discussion..." apiKey={apiKey} formID={formID}/>
      </div>
      <div>
        <h2 style={pStyle}>Comments</h2>
        <ListComments/>
      </div>
      <div>
        <p style={copyRightStyle}>© Copyright {year} JotForm. All rights reserved.</p>
      </div>
    </div>
  );
}