export async function JFUserLogin(api, username, password) {
    let JFUserInfo;
    if (localStorage.getItem("JFUserInfo")) {
        JFUserInfo = localStorage.getItem("JFUserInfo");
    }
    else {
        JFUserInfo = await api.jotformLogin(username, password);
        if (JFUserInfo.username != null) {
            localStorage.setItem("JFUserInfo", JSON.stringify(JFUserInfo));
        }
    }
    return JFUserInfo;
}