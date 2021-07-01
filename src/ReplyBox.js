import {h} from 'preact';
import Avatar from './Avatar';




function ReplyBox(props) {

    const comment = props.comment;


    const authorStyle = {
        padding: "10px",
        display: "flex",
        gap: "20px"
    };

    const boxStyle = {
        padding: "10px",
        margin: "10px",
        backgroundColor: "#FAFAFA",
        gap: "10px",
        borderRadius: "5px",
        // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        
    };

    const commentStyle = {
        backgroundColor: "#FFFFFF",
        padding: "10px",
        fontFamily: "Arial",
        fontSize: "13px",
        fontStyle: "italic",
        fontWeight: "lighter"
    };

    const paragraph = {
        fontFamily: "Arial",
        fontSize: "1em",
        color: "#787878",
        fontWeight: "Bold",

    }

    const reply = {
        padding: "0% 0% 0% 10%",
    }


    return (
        <div style={reply}>
            <div style={boxStyle}>
                <div style={authorStyle}>
                    <Avatar imageURL={comment[2]}/>
                    <p style={paragraph}>created by {comment[1]} at {comment[3]}</p>
                </div>
                <div style={commentStyle}>
                    <p > {JSON.stringify(comment[0])} </p>
                </div>
            </div>
        </div>
    )
}

export default ReplyBox
