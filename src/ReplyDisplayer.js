import { useContext, useState } from "react";
import { h } from 'preact';
import CommentBox from './CommentBox';
import { DataContext } from "./fetchData";
import { boxStyle, reactions } from "./styles/commentBoxStyle";

export const  ReplyDisplayer = ({comment, allComments}) => {
    const fetchData = useContext(DataContext);
    const apiKey = fetchData.apiKey;
    const [isReplies, setIsReplies] = useState(false);
    const [isReplied, setIsReplied] = useState((comment.replies).length > 0);

    const result = (comment.replies).map((id) => {
        let reply = allComments.find(function(post) {
            if(post.id == id)
                return true;
        })
        return reply;
    });

    return (
        <div style={boxStyle}>
            <CommentBox apiKey={apiKey} comment={comment}/>
            <div className="accordion">
                    <div className="accordion-item">
                        <div
                        className="accordion-title"
                        onClick={() => setIsReplies(!isReplies)}
                        >
                            <div style={reactions}>  
                                { isReplied && 
                                    <a> {isReplies ? 'Hide Comments-' : 'Show Comments+'}</a> 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            {isReplies && (result).map((reply) => (
                <div style={{paddingLeft: "5%"}}>
                    <ReplyDisplayer comment={reply} allComments={allComments}/>    
                </div>
            ))
            }
        </div>
    )
}

