import {h} from 'preact';
import { useState } from "react";
import Avatar from './Avatar';
import { DataContext } from "./fetchData";
import ReplyInput from './ReplyInput';
import {authorStyle, boxStyle, commentStyle, reactions, reply, hide, paragraph} from "./styles/commentBoxStyle";

export default function CommentBox(props) {
    const apiKey = props.apiKey;
    const comment = props.comment;    
    const [isReplied, setIsReplied] = useState((comment.replies).length > 0); 
    const [allComments, setAllComments] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [isReplies, setIsReplies] = useState(false);

    return (
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
    )
}