import { h } from 'preact';
import { avatarStyle } from "./styles/commentBoxStyle"

export default function Avatar(props) {
    let url = (props.imageURL);
    return (
        <img style={avatarStyle} src={`${url}`}></img>
    );
}