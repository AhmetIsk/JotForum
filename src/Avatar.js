import { h } from 'preact'

export default function Avatar(props) {

    const avatarStyle = {
        borderRadius: "50%",
        width: "50px"
    }
    let url = (props.imageURL);
    // url = url.replace(/\"/g, "");
    console.log(url)
    return <img style={avatarStyle} src={`${url}`}></img>;
}