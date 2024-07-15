import ChatHeader from "../chat-header/ChatHeader";
import "./Chat.scss";
import AddIcon from '@mui/icons-material/Add';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from "../chat-message/ChatMessage";
import { useAppSelector } from "../../app/hooks";
import { useEffect, useRef, useState } from "react";
import { addDoc, collection, CollectionReference, DocumentData, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";

interface Messages {
    timestamp: Timestamp;
    message: string;
    user: {
        uid: string,
        email: string,
        photo: string,
        displayName: string,
    };
}

const Chat = () => {
    const chatMessageRef = useRef<HTMLDivElement>(null);
    // input text
    const [inputText, setInputText] = useState<string>("");
    const [messages, setMesages] = useState<Messages[]>([]);
    const channelName = useAppSelector((state) => state.channel.channelName);
    const channelId = useAppSelector((state) => state.channel.channelId);
    const user = useAppSelector((state) => state.user.user);

    useEffect(() => {
        const conellctionRef = query(collection(
            db, "channels", String(channelId), "messages"
        ), orderBy("timestamp", "asc"));

        onSnapshot(conellctionRef, (querySnapshot) => {
            let results: Messages[] = [];
            querySnapshot.forEach((doc) => {
                results.push({
                    timestamp: doc.data().timestamp,
                    message: doc.data().message,
                    user: doc.data().user
                });
            });
            setMesages(results);
            // 使消息容器滚动到底部
            if (chatMessageRef.current) {
                chatMessageRef.current.scrollTop = chatMessageRef.current.scrollHeight;
            }
        });
    }, [channelId]);

    const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // insert data into firebase storage
        const collectionRef: CollectionReference<DocumentData> = collection(
            db, "channels", String(channelId), "messages"
        );

        await addDoc(collectionRef, {
            message: inputText,
            timestamp: serverTimestamp(),
            user: user
        });

        setInputText("");
    };

    return (
        <div className="chat">
            {/* chatheader */}
            <ChatHeader channelName={channelName} />
            {/* chatmessage */}
            <div className="chatMessage" ref={chatMessageRef}>
                {messages && messages.map((message, index) => (
                    <ChatMessage
                        key={index}
                        message={message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                    />
                ))}
            </div>
            {/* chatInput */}
            <div className="chatInput">
                <AddIcon />
                <form action="">
                    <input
                        type="text"
                        placeholder="send a message..."
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                        value={inputText}
                        disabled={!channelId}
                    />
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