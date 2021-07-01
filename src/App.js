import { useState, useEffect, useContext } from "react";
import { h } from 'preact'
import Avatar from "./Avatar";
import Comments from "./Comments";
import CommentInput from "./CommentInput";
import miniJFApi from "./miniJFApi";
import { DataContext } from "./fetchData";
import CommentBox from "./CommentBox";


export default function App (props) {

  const fetchData = useContext(DataContext);

  const apiKey = props.apiKey;
  const pageName = props.page;

  const [comment, setComment] = useState([]);
  const [formID, setFormID] = useState(null); 
  const [allComments, setAllComments] = useState(null);

  
  const addComment = (text, person) => {
    let duplicated = [...comment];
    let curTime = new Date().toLocaleString();
    duplicated = [...duplicated,{ date: curTime, message: text, name: person }]
    setComment(duplicated);
    console.log( duplicated)
  }
  const api = new miniJFApi(apiKey);
  api.getForms();

  const createForm = async () => {
    const result = await api.createForm(pageName);
    console.log(result);
    setFormID(result);
    fetchData.setFormID(result);
  }
  createForm();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
      console.log('ben degistim', data);
      fetchData.setData(data);
      // setData(fetchData.data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
    // console.log(fetchData.data)

  

    }, [formID]);

    if (loading) return "Loading...";
    if (error) return "Error!";

    console.log(data);
    useEffect(() => {
      const data = fetchData.data;
      let commentString = [];
      let replies = [];

      for (let i in data.content) {
        if (data.content[i].status === "ACTIVE" ) {
          if (data.content[i].answers[3].answer == "1") { // if  parent id is equal to 1 which means  it is comment, not
            commentString.push( [data.content[i].answers[1].answer, data.content[i].answers[2].answer, data.content[i].answers[5]?.answer, data.content[i].created_at, data.content[i].id, data.content[i].answers[3].answer] ); 
          }
          else {
            replies.push( [data.content[i].answers[1].answer, data.content[i].answers[2].answer, data.content[i].answers[5]?.answer, data.content[i].created_at, data.content[i].id, data.content[i].answers[3].answer] ); 
          }

        }
      }
      
      setAllComments( commentString.map((comment) => {
        console.log('ingredients',comment)
        //  if reply exists
          if (comment[5] !== "0") {
            let commentsReplies = [];
            for (let i in replies) {
              if (replies[i][5] == comment[4]) {
                commentsReplies.unshift(replies[i]);
                console.log("synchronized", commentsReplies)
              }
            }

            return (
              <CommentBox apiKey={apiKey} comment={comment} commentsReplies={ commentsReplies }/>
            )  
          }
          else {
            return (
              <CommentBox apiKey={apiKey} comment={comment} commentsReplies={ [] }/>
            )  
          }
        }
      ));
    }, [fetchData.data]);



    // const allComments = string.map((comment) => {
    //   return (
    //     [<Avatar imageURL={JSON.stringify(comment[2])}/>,
    //     <h3> {JSON.stringify(comment[0])} created by {JSON.stringify(comment[1])} at {JSON.stringify(comment[3])} who {JSON.stringify(comment[2])} </h3>
    //     ])
    //   }
    // );
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
        <p> { allComments }</p> 
      </div>
      <div>
        <p style={copyRightStyle}>© Copyright {year} JotForm. All rights reserved.</p>
      </div>
    </div>
  );
}