import { h } from 'preact'
import { headingStyle } from './styles/appStyle';
import { inputStyle, buttonStyle, inputBox, fontType, divStyle} from "./styles/commentInputStyle";
import Avatar from './Avatar';
import { authorStyle } from './styles/commentBoxStyle';
export default function LoginForm(props) {

    return (
        <div style={inputBox}>
            <form onSubmit={props.handleSubmit}>
                <div style={authorStyle}>
                    <Avatar imageURL={props.avatar}/>
                    <p style={headingStyle}>Hey {props.name}, Welcome JotFormer! </p>
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
