import { useState, useEffect, useContext } from "react";
import { h } from 'preact'
import Avatar from "./Avatar";
import CommentInput from "./CommentInput";
import miniJFApi from "./miniJFApi";
import { DataContext } from "./fetchData";
import CommentBox from "./CommentBox";
import ListComments from "./ListComments";

export default function App (props) {

  const fetchData = useContext(DataContext);
  fetchData.setApiKey(props.apiKey);
  const apiKey = props.apiKey;
  const pageName = props.page;
  const api = new miniJFApi(apiKey);
  const [comment, setComment] = useState([]);
  const [formID, setFormID] = useState(null); 
  const [allComments, setAllComments] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("her zaman create form olusturma pls")
    const initialLoad = async () => { 
      const resultFormID = await api.initializeForm(pageName);
      setFormID(resultFormID);
    }
    initialLoad();
  }, []);

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/${formID}/submissions?apikey=${apiKey}&orderby=id`)
    .then((response) => {
    if (response.ok) {
      return response.json();
    }
      throw response;
    })
    .then(data => {
      setData(data);
      fetchData.setData(data);
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
    const year = new Date().getFullYear();

    const copyRightStyle = {
      color: "rgba(0,0,0,.7)",
      textShadow: "0 1px rgba(255, 255, 255, 0.1)",
      textAlign: "center",
      padding: "30px"
    }

    const header = {
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      gap: "20px"
    }

    const headingStyle = {
      color: "#EB8230",
      fontFamily: "Arial",
      fontWeight: "Bold",
      fontStyle: "italic",
    }

    const pStyle = {
      color: "#787878",
      fontFamily: "Arial",
      fontStyle: "italic",
      padding: "10px"
    }

  return (
    <div>
    <div style={header}>
      <img style="width: 60px" src="https://www.jotform.com/wepay/assets/img/podo.png?v=1.0.0.0"/>
      <h1 style={headingStyle}>
       Welcome to JotForum Demo</h1>
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
        {/* <p> { allComments }</p>  */}
        <ListComments/>
      </div>
      <div>
        <p style={copyRightStyle}>© Copyright {year} JotForm. All rights reserved.</p>
      </div>
    </div>
  );
}