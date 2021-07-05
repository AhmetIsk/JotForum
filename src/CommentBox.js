import {h} from 'preact';
import { useState, useEffect, useContext } from "react";
import Avatar from './Avatar';
import { DataContext } from "./fetchData";


function CommentBox(props) {

    const [comment1, setComment1] = useState([]);
    const [isReplied, setIsReplied] = useState(false); 
    const apiKey = props.apiKey;
    const [allComments, setAllComments] = useState("");
    const fetchData = useContext(DataContext);
    const comments = props.allComments;
    const comment = props.comment;    
    const [isActive, setIsActive] = useState(false);
    const [isReplies, setIsReplies] = useState(false);

    
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
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        
    };

    const commentStyle = {
        backgroundColor: "#FFFFFF",
        padding: "10px",
        fontFamily: "Arial",
        fontSize: "1em",
        fontStyle: "italic",
        fontWeight: "lighter"
    };

    const reactions = {
        display: "flex",
        justifyContent: "flex-end",
        gap: "30px",
        cursor: "pointer",
        fontFamily: "Arial",
        color: "#787878",
        fontWeight: "Bold",

    }

    const reply = {
        display: "flex",
        justifyContent: "flex-start",
        gap: "30px",
        cursor: "pointer",
        fontFamily: "Arial",
        color: "#787878",
        fontWeight: "Bold",
    }

    const hide = {
        display: "flex",
        justifyContent: "flex-start",
        gap: "30px",
    }

    const paragraph = {
        fontFamily: "Arial",
        fontSize: "1em",
        color: "#787878",
        fontWeight: "Bold",

    }

    return (
        <div>
        <div style={boxStyle}>
            <div style={authorStyle}>
                <Avatar imageURL={comment.avatar}/>
                <p style={paragraph}>created by {comment.name} at {comment.createdAt}</p>
            </div>
            <div style={commentStyle}>
                <p > {JSON.stringify(comment.comment)} </p>
            </div>
  
            <div style={reactions}>  
                <a>Like {}</a>
                <a>Dislike {}</a>
            </div>
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
                        {isActive &&  <ReplyInput repliedCommentID={comment.id} text="Join the discussion..." apiKey={apiKey} />}
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion-item">
                        <div
                        className="accordion-title"
                        onClick={() => setIsReplies(!isReplies)}
                        >
                        <div style={reply}>  
                            {   isReplied && 
                                <a>Show Comments {isReplies ? '-' : '+'}</a> 
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        { isReplies && allComments }
        </div>
    )
}

export default CommentBox
