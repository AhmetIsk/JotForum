import { h } from 'preact'
import { useState } from 'react'
import Avatar from './Avatar';

function Comments(props) {

    const comments = props.comment;
    const allComments = comments.map((comment) => {
        return (
        [
        <h3> {comment.message} by { comment.name } at { comment.date } </h3>
        ])
    }
    );
    return (
        <div>
            { allComments }
            <hr/>
        </div>
    );
};

export default Comments
