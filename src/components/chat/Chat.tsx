import ChatHeader from "../chat-header/ChatHeader";
import "./Chat.scss";
import AddIcon from '@mui/icons-material/Add';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from "../chat-message/ChatMessage";

const Chat = () => {
    return (
        <div className="chat">
            {/* chatheader */}
            <ChatHeader />
            {/* chatmessage */}
            <div className="chatMessage">
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>
            {/* chatInput */}
            <div className="chatInput">
                <AddIcon />
                <form action="">
                    <input type="text" placeholder="send a message..." />
                    <button type="submit" className="chatInputButton">Send</button>
                </form>
                <div className="chatInputIcons">
                    <GifBoxIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat;