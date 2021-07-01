import { h } from 'preact'
import { useContext, useEffect, useState } from 'react';
import { DataContext } from './fetchData';
import miniJFApi from "./miniJFApi";


const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


export default function CommentInput(props) {

    const fetchData = useContext(DataContext);
    const formID = fetchData.formID;
    const replyNumber = 0;
    const parentID = 1;

    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleImageChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const api = new miniJFApi(props.apiKey);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // props.addComment(comment, name);
        const myfile = await toBase64(selectedFile);
        console.log(selectedFile);
        const data2 = {
            "1": comment,
            "2": name,
            "3": parentID,
            "5": myfile,
            "7": replyNumber
        }

        api.addSubmission(data2, formID, fetchData);
        // console.log("data is =>", comment);
        // setComment(""); // can we use useEffect to clean comment after submission
        console.log("data is sent");     
        setComment("");
        setName("");
        setSelectedFile(null);
    } 

    const padding = {
        padding: "0 20px 0 0",
    }    

    

    const inputStyle = {
        display: "flex",
        width: "100%",
    }
    
    const buttonStyle = {
        backgroundColor: "#EB8230",
        width: "100px",
        height: "30px",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer",
    }

    const inputBox = {
        backgroundColor: "#FAFAFA",
        borderRadius: "5px",
        padding: "20px",
        width: "60%",
        display: "flex",
        justifyContent: "center",

    }

    const fontType = {
        padding: "2px",
        fontFamily: "Arial",
        fontSize: "1em",
        weight: "Bold",
    }
    const divStyle = {
        display: "flex",
        justifyContent: "center",
        padding: "20px"
    }

    return (
        <div style={inputBox}>
            <form onSubmit={handleSubmit}>
                <p style= {fontType}>Please pick an image (only image format is accepted):</p>
                <input style={inputStyle} type="file" id="myFile" name="filename" onChange={handleImageChange} accept="image/*"></input>
                <p style= {fontType}>Please type your comment:</p>
                <textarea  value={comment} onChange={handleChange} placeholder={props.text} required style={inputStyle}></textarea>
                <div >
                    <p style= {fontType}>Login with</p>
                    <br/>
                    <span style="display: flex">
                        <a style={padding} href="https://blog.disqus.com/"><img src="data:image/png;base64,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" style="width: 40px"></img></a>
                        <a style={padding} href="https://www.facebook.com/"><img src="https://toppng.com/uploads/preview/banner-transparent-library-svg-vector-freebie-supply-facebook-icon-circle-sv-11563249283vosqx88wgx.png" style="width: 40px"></img></a>
                        <a style={padding} href="https://twitter.com/login"><img src="data:image/png;base64,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" style="width: 40px"></img></a>
                        <a style={padding} href="https://myaccount.google.com/"><img src="data:image/png;base64,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" style="width: 40px"></img></a>
                    </span>
                    <div>
                    <p style= {fontType}>or enter your name:</p>
                    <span>
                        <input type="text" value={name} onChange={handleNameChange} placeholder="Name" required style={inputStyle}></input>
                    </span> 
                    </div>
                </div>
                <div style={divStyle}>
                <button style={buttonStyle}>Send</button>
                </div>
            </form>
        </div>
    ) 
}