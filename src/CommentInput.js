import { h } from 'preact'
import { useContext, useEffect, useState } from 'react';
import { DataContext } from './fetchData';
import miniJFApi from "./miniJFApi";
import {container} from "./styles/commentInputStyle";
import LoginForm from './LoginForm';
import WithoutLogin from './WithoutLogin';
import { JFUserLogin } from './JFUserLogin';

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export default function CommentInput(props) {

    const fetchData = useContext(DataContext);
    const formID = fetchData.formID;
    const parentID = 1;
    const api = new miniJFApi(props.apiKey);
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleUsernameChange = (e) => {
        setUserName(e.target.value);
    }

    const handleImageChange = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(selectedFile);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let myfile;
        console.log(selectedFile);
        if (!fetchData.isLoggedIn) {
            myfile = await toBase64(selectedFile);
        }
        else {
            myfile = selectedFile;
        }
        const data2 = {
            "1": comment,
            "2": name,
            "3": parentID,
            "4": myfile,
            "5": myfile,
        }
        api.addSubmission(data2, formID, fetchData);
        setComment("");
        setName("");
        setRefresh(!refresh);
    } 

    const handleLogin = async (e) => {
        e.preventDefault();
        let JFUserInfo = await JFUserLogin(api, username, password);
        fetchData.setIsLoggedIn(JFUserInfo);
        setComment("");
        setName(JFUserInfo.username);
        setSelectedFile(JFUserInfo.avatar);
    } 

    useEffect(() => {
        let jotformerData = JSON.parse(localStorage.getItem("JFUserInfo"));
        if (jotformerData) {
            setComment("");
            fetchData.setIsLoggedIn(jotformerData);
            setName(jotformerData.username);
            setSelectedFile(jotformerData.avatar);    
        }
    }, [refresh])

    return (
        <div style={container}>
        {
            !fetchData.isLoggedIn ? 
            <WithoutLogin handleSubmit={handleSubmit} handleLogin={handleLogin} handleImageChange={handleImageChange} handleChange={handleChange} comment={comment} text={props.text} handleNameChange={handleNameChange} name={name} handleUsernameChange={handleUsernameChange} username={username} handlePasswordChange={handlePasswordChange} password={password}/>
            :
            <LoginForm name={name} avatar={selectedFile} handleSubmit={handleSubmit} handleChange={handleChange} comment={comment} text={props.text}/>
        }
        </div>
    ) 
}