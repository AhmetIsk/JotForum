import {h} from 'preact';
import { useState } from "react";
import Avatar from './Avatar';
import { DataContext } from "./fetchData";
import ReplyInput from './ReplyInput';
import {authorStyle, boxStyle, commentStyle, reactions, reply, hide, paragraph} from "./styles/commentBoxStyle";

export default function CommentBox(props) {
    const apiKey = props.apiKey;
    const comment = props.comment;    

    return (
        <div style={boxStyle}>
            <div style={authorStyle}>
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