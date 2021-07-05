import React from 'react'
import { useState, useEffect, useContext } from "react";
import { h } from 'preact'
import { DataContext } from "./fetchData";
import {ReplyDisplayer} from './ReplyDisplayer';

export default function ListComments() {

    const fetchData = useContext(DataContext);
    const [allComments, setAllComments] = useState(fetchData.data);
    const [comments, setComments] = useState([]);

    useEffect(() => {

    const data = fetchData.data;
    let commentsRaw = [];

    for (let i in data.content) {
      if (data.content[i].status === "ACTIVE" ) {
        let commentObject = {
          name: {},
          comment: {},
          avatar: {},
          createdAt: {},
          id: {},
          parentId: {},
          replies: []
        }
        commentObject.comment = data.content[i].answers[1].answer;
        commentObject.name = data.content[i].answers[2].answer;
        commentObject.avatar = data.content[i].answers[5]?.answer;
        commentObject.createdAt = data.content[i].created_at;
        commentObject.id = data.content[i].id;
        commentObject.parentId = data.content[i].answers[3].answer;
        commentsRaw.push(commentObject);
      }
    }
    console.log(commentsRaw);
    const comments = commentsRaw.reduce((prev, comment) => {
      if (comment.parentId !== 1) {
        const parentIndex = prev.findIndex(({ id }) => id === comment.parentId);
        console.log(parentIndex);
        if (parentIndex === -1) {
          return prev;
        } 
        console.log("once",prev[parentIndex].replies);

        prev[parentIndex].replies = [...prev[parentIndex].replies, comment.id];
        console.log("sonra",prev[parentIndex].replies);

      }
      return prev;
    }, commentsRaw);
    console.log(comments);
    setAllComments(comments);
    }, [fetchData.data]);

    useEffect(() => {
        if (Array.isArray(allComments)) {
            setComments(allComments.map( (comment) => {
                if (comment.parentId == 1) {
                    return <ReplyDisplayer comment={comment} allComments={allComments}/>
                }
            }));
        }; 
        console.log("all comments are here", allComments)
    
    }, [allComments]);

    return (
        <div>
            {comments}
        </div>
    )
}
