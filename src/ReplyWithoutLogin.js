import { h } from 'preact'
import { useContext } from 'react';
import { DataContext } from './fetchData';
import { inputStyle, replyButtonStyle, replyInputBox, fontType, divStyle, replyFormGrid, mobileReplyInputBox, MobileReply} from "./styles/commentInputStyle";

export default function ReplyWithoutLogin(props) {
    const fetchData = useContext(DataContext);
    return (
        <div style={fetchData.isTabletOrMobile ? mobileReplyInputBox : replyInputBox}>
            <form onSubmit={props.handleSubmit} style={fetchData.isTabletOrMobile ? MobileReply : replyFormGrid}>
                <div style={{width: "33%"}}>
                    <p style= {fontType}>Please pick an image (only image format is accepted):</p>
                    <input style={inputStyle} type="file" id="myFile" name="filename" onChange={props.handleImageChange} accept="image/*"></input>
                </div>
                <div style={{width: "33%"}}>
                    <p style= {fontType}>Please type your comment:</p>
                    <textarea  value={props.comment} onChange={props.handleChange} placeholder={props.text} required style={inputStyle}></textarea>
                </div>
                <div style={{width: "33%"}}>
                    <div>
                    <p style= {fontType}>and enter your name:</p>
                    <span>
                        <input type="text" value={props.name} onChange={props.handleNameChange} placeholder="Name" required style={inputStyle}></input>
                    </span> 
                    </div>
                </div>
                <div style={divStyle}>
                    <button style={replyButtonStyle}>Reply</button>
                </div>
            </form>
        </div>
        )
}
