import { Timestamp } from "firebase/firestore";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

type Props = {
    timestamp: Timestamp,
    message: string,
    user: {
        uid: string,
        email: string,
        photo: string,
        displayName: string,
    }
};

const ChatMessage = (props: Props) => {
    const { message, timestamp, user } = props;

    return (
        <div className="message">
            <Avatar src={user?.photo} />
            <div className="messageInfo">
                <h4>
                    {user?.displayName}
                    <span className="messageTimestamp">{new Date(timestamp?.toDate()).toLocaleString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
};

export default ChatMessage;

