import { h } from 'preact'
import { useContext } from 'react';
import { DataContext } from './fetchData';
import { headingStyle } from './styles/appStyle';
import {padding, inputStyle, buttonStyle, inputBox, fontType, divStyle, MobileInputBox} from "./styles/commentInputStyle";

export default function WithoutLogin(props) {
    const fetchData = useContext(DataContext);
    return (
        <div style={fetchData.isTabletOrMobile ? MobileInputBox : inputBox}>
            <form onSubmit={props.handleSubmit}>
                <p style= {fontType}>Please pick an image (only image format is accepted):</p>
                <input style={inputStyle} type="file" id="myFile" name="filename" onChange={props.handleImageChange} accept="image/*"/>
                <p style= {fontType}>Please type your comment:</p>
                <textarea  value={props.comment} onChange={props.handleChange} placeholder={props.text} required style={inputStyle}></textarea>
                <div >
                    <div>
                    <p style= {fontType}>and enter your name:</p>
                    <span>
                        <input type="text" value={props.name} onChange={props.handleNameChange} placeholder="Name" required style={inputStyle}></input>
                    </span> 
                    </div>
                </div>
                <div style={divStyle}>
                <button style={buttonStyle}>Send</button>
                </div>
            </form> 
            <form onSubmit={props.handleLogin}>
                <p style= {headingStyle}>or Login with JotForm Account</p>
                <p style= {fontType}>Please type your username:</p>
                <input type="text" value={props.username} onChange={props.handleUsernameChange} placeholder="Name" required style={inputStyle}></input>
                <div >
                    <div>
                    <p style= {fontType}>Password:</p>
                    <span>
                        <input type="password" value={props.password} onChange={props.handlePasswordChange} placeholder="Name" required style={inputStyle}></input>
                    </span> 
                    </div>
                </div>
                <div style={divStyle}>
                <button style={buttonStyle}>Login</button>
                </div>
            </form>
        </div>

    )
}
