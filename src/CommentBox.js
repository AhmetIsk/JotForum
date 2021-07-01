import {h} from 'preact';
import { useState, useEffect, useContext } from "react";
import Avatar from './Avatar';
import ReplyBox from './ReplyBox';
import ReplyInput from './ReplyInput';
import { DataContext } from "./fetchData";
import moment from "moment";


function CommentBox(props) {

    const [comment1, setComment1] = useState([]);
    const [isReplied, setIsReplied] = useState(false); 
    const apiKey = props.apiKey;
    const [allComments, setAllComments] = useState(props.commentsReplies);
    const fetchData = useContext(DataContext);

    const commentsReplies = props.commentsReplies;
    const comment = props.comment;
    const date = moment().subtract(comment[3]);


    
    if ((commentsReplies).length > 0) {
        setIsReplied(true);
    }

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


    useEffect(() => {
        setAllComments( (commentsReplies).map((comment) => {
            console.log('ingredients',comment)
                return (
                <ReplyBox comment={comment}/>
                )  
            
            }
        ));
    }, [(props.commentsReplies)]);

    return (
        <div>
        <div style={boxStyle}>
            <div style={authorStyle}>
                <Avatar imageURL={comment[2]}/>
                <p style={paragraph}>created by {comment[1]} at {date}</p>
            </div>
            <div style={commentStyle}>
                <p > {JSON.stringify(comment[0])} </p>
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
                        {isActive &&  <ReplyInput repliedCommentID={comment[4]} text="Join the discussion..." apiKey={apiKey} />}
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
