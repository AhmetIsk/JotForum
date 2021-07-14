import { h } from 'preact'
import { headingStyle } from './styles/appStyle';
import { inputStyle, buttonStyle, inputBox, fontType, divStyle, mobileReplyInputBox} from "./styles/commentInputStyle";
import Avatar from './Avatar';
import { authorStyle } from './styles/commentBoxStyle';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from './fetchData';

export default function LoginForm(props) {
    const fetchData = useContext(DataContext);
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        if (fetchData.isLoggedIn) {
            setName(fetchData.isLoggedIn.username);
            setSelectedFile(fetchData.isLoggedIn.avatar);  
        }
    }, [fetchData.isLoggedIn] )

    return (
        <div style={fetchData.isTabletOrMobile ? mobileReplyInputBox :  inputBox}>
            <form onSubmit={props.handleSubmit}>
                <div style={authorStyle}>
                    <Avatar imageURL={selectedFile}/>
                    <p style={headingStyle}>Hey {name}, Welcome JotFormer! </p>
                </div>
                    <p style= {fontType}>Please type your comment:</p>
                    <textarea  value={props.comment} onChange={props.handleChange} placeholder={props.text} required style={inputStyle}></textarea>
                <div style={divStyle}>
                    <button style={buttonStyle}>Send</button>
                </div>
            </form> 
        </div>
    )
}
