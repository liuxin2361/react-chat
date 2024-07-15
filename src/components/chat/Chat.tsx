import ChatHeader from "../chat-header/ChatHeader";
import "./Chat.scss";
import AddIcon from '@mui/icons-material/Add';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from "../chat-message/ChatMessage";
import { useAppSelector } from "../../app/hooks";
import { useState } from "react";
import { addDoc, collection, CollectionReference, DocumentData, DocumentReference, query, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const Chat = () => {
    const [inputText, setInputText] = useState<string>("");
    const channelName = useAppSelector((state) => state.channel.channelName);
    const channelId = useAppSelector((state) => state.channel.channelId);
    const user = useAppSelector((state) => state.user.user);

    const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // insert data into firebase storage
        const collectionRef: CollectionReference<DocumentData> = collection(
            db, "channels", String(channelId), "messages"
        );

        const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef, {
            message: inputText,
            timestamp: serverTimestamp(),
            user: user
        });
    };

    return (
        <div className="chat">
            {/* chatheader */}
            <ChatHeader channelName={channelName} />
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
                    <input type="text" placeholder="send a message..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} />
                    <button type="submit" className="chatInputButton" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>Send</button>
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