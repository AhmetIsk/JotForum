import { useContext } from "react";
import { h } from 'preact';
import CommentBox from './CommentBox';
import { DataContext } from "./fetchData";

export const  ReplyDisplayer = ({comment, allComments}) => {
    const fetchData = useContext(DataContext);
    const apiKey = fetchData.apiKey;

    const result = (comment.replies).map((id) => {
        let reply = allComments.find(function(post) {
            if(post.id == id)
                return true;
        })
        return reply;
    });

    return (
        <div>
            <CommentBox apiKey={apiKey} comment={comment}/>
            {(result).map((reply) => (
                <div style={{paddingLeft: "5%"}}>
                    <ReplyDisplayer comment={reply} allComments={allComments}/>    
                </div>
            ))}
        </div>
    )
}

