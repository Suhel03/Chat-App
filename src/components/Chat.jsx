import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                {/* <div className="chatIcons">
                <img src={""} alt="" />
                <img src={""} alt="" />
                <img src={""} alt="" />
                </div> */}
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat