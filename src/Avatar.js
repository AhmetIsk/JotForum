import { h } from 'preact'

export default function Avatar(props) {

    const avatarStyle = {
        borderRadius: "50%",
        width: "50px"
    }
    let url = (props.imageURL);
    return <img style={avatarStyle} src={`${url}`}></img>;
}