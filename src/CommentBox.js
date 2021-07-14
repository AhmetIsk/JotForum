import {h} from 'preact';
import { useContext } from 'react';
import Avatar from './Avatar';
import { DataContext } from './fetchData';
import ReplyInput from './ReplyInput';
import {authorStyle, boxStyle, commentStyle, reactions, reply, mobileHeader, paragraph, mobileBoxStyle} from "./styles/commentBoxStyle";

export default function CommentBox(props) {
    const apiKey = props.apiKey;
    const comment = props.comment;    
    const fetchData = useContext(DataContext);
    return (
        <div style={fetchData.isTabletOrMobile ? mobileBoxStyle : boxStyle}>
            <div style={fetchData.isTabletOrMobile ? mobileHeader : authorStyle}>
                <Avatar imageURL={comment.avatar}/>
                <p style={paragraph}>created by {comment.name} at {comment.createdAt}</p>
            </div>
            <div style={commentStyle}>
                <p > {JSON.stringify(comment.comment)} </p>
            </div>
            <ReplyInput repliedCommentID={comment.id} text="Join the discussion..." apiKey={apiKey} />
        </div>
    )
}