import { db } from "../../Firebase/firebase.config";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContextProvider";
import {  serverTimestamp, doc, setDoc,arrayUnion } from "firebase/firestore";

const Input = ({user}) => {
   
    // ! @ # $ % ^ & * ( ) - _ + = [ ] { } \ | ; : ' " , . / < > ? ~ ¢ £ ¥ € © 
    const { currentUser } = useContext(UserContext);
    
        const [message, setMessage] = useState('');
      console.log(user);
        const sendMessage = async () => {
          if (message.trim() !== '') {
            const conversationId = generateConversationId(currentUser,user);
            const conversationRef = doc(db, 'conversations', conversationId);
      
            try {
              await setDoc(conversationRef, {
                messages: arrayUnion({
                  senderId: currentUser.uid,
                  receiverId: user.uid,
                  message: message,
                  timestamp: Date.now()
                })
              }, { merge: true });
      
              setMessage('');
            } catch (error) {
              console.error('Error sending message:', error);
            }
          }
        };
      
        const generateConversationId = (currentUser, user) => {
            const combinedId =
            currentUser.uid > user.uid
              ? currentUser.uid + user.uid
              : user.uid + currentUser.uid;

              return combinedId
        };
      
        return (
          <div className="flex">
            <input 
              type="text" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Type your message..."
              className="bg-blue-100 focus:outline-none focus:bg-white border border-blue-300 rounded-lg py-2 px-4 mr-2 w-full"
            />
            <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
          </div>
        );
};

export default Input;