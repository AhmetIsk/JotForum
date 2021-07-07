import { h } from 'preact'
import { useContext, useEffect, useState } from 'react';
import { DataContext } from './fetchData';
import LoginForm from './LoginForm';
import miniJFApi from "./miniJFApi";
import ReplyWithoutLogin from './ReplyWithoutLogin';
import {authorStyle, boxStyle, commentStyle, reactions, reply, hide, paragraph} from "./styles/commentBoxStyle";

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export default function ReplyInput(props) {
    const repliedID = props.repliedCommentID;
    const fetchData = useContext(DataContext);
    const formID = fetchData.formID;
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const api = new miniJFApi(props.apiKey);

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleImageChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let myfile;
        console.log('burasi' , fetchData.isLoggedIn);
        if (!fetchData.isLoggedIn) {
            myfile = await toBase64(selectedFile);
        }
        else {
            myfile = selectedFile;
        }
        const data2 = {
            "1": comment,
            "2": name,
            "3": repliedID,
            "4": myfile,
            "5": myfile,
        }
        api.addSubmission(data2, formID, fetchData);
        console.log("data is sent");     
        setComment("");
        setName("");
        setSelectedFile(null);
    } 

    useEffect(() => {
        if (fetchData.isLoggedIn) {
            setName(fetchData.isLoggedIn.username);
            setSelectedFile(fetchData.isLoggedIn.avatar);  
            console.log(name);        
        }
    }, [fetchData.isLoggedIn] )

    useEffect(() => {
        setIsActive(false);
    }, [fetchData.data])
    return (
        <div style={hide}>
            <div className="accordion">
                <div className="accordion-item">
                    <div
                    className="accordion-title"
                    onClick={() => setIsActive(!isActive)}
                    >
                    <div style={reply}>  
                        <a>Reply {isActive ? '-' : '+'}</a> 
                    </div>
                    </div>
                    {isActive && (!fetchData.isLoggedIn ?
                        <ReplyWithoutLogin handleSubmit={handleSubmit} handleImageChange={handleImageChange} handleChange={handleChange} comment={comment} text={props.text} handleNameChange={handleNameChange} name={name}/>
                        :
                        <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} comment={comment} text={props.text}/>
                    )}
                </div>
            </div>
        </div>
    )
}