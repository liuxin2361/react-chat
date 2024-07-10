import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

const ChatMessage = () => {
    return (
        <div className="message">
            <Avatar />
            <div className="messageInfo">
                <h4>
                    xxx
                    <span className="messageTimestamp">2024/07/10</span>
                </h4>
                <p>
                    message
                </p>
            </div>
        </div>
    )
};

export default ChatMessage;

