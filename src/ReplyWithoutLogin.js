import { h } from 'preact'
import { inputStyle, replyButtonStyle, replyInputBox, fontType, divStyle, replyFormGrid} from "./styles/commentInputStyle";

export default function ReplyWithoutLogin(props) {
    return (
        <div style={replyInputBox}>
            <form onSubmit={props.handleSubmit} style={replyFormGrid}>
                <div>
                    <p style= {fontType}>Please pick an image (only image format is accepted):</p>
                    <input style={inputStyle} type="file" id="myFile" name="filename" onChange={props.handleImageChange} accept="image/*"></input>
                </div>
                <div>
                    <p style= {fontType}>Please type your comment:</p>
                    <textarea  value={props.comment} onChange={props.handleChange} placeholder={props.text} required style={inputStyle}></textarea>
                </div>
                <div >
                    <div>
                    <p style= {fontType}>or enter your name:</p>
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
