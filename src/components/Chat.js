import "../style/Chat.css";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "./../firebase";

export default function Chat({ room }) {
  const [newMessage, setNewMessage] = useState("");
  const messageRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const queryMessages = query(
      messageRef,
      where("room", "==", room),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      const message = [];
      snapshot.forEach((doc) => {
        message.push({ ...doc.data(), id: doc.id });
      });
      setMessages(message);
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(messageRef, {
      text: newMessage,
      timestamp: serverTimestamp(),
      user: auth.currentUser.displayName,
      pic: auth.currentUser.photoURL,
      room,
    });
    setNewMessage("");
  };

  return (
    <div className="ChatRoom">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="user"> 👤 {message.user}</span>
            <p className="message"> 🗨️ {message.text}</p>
          </div>
        ))}
      </div>
      <div className="chat">
        <form onSubmit={handleSubmit} className="message-form">
          <input
            className="new-message"
            placeholder="type your message...."
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <button type="submit" className="send-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
