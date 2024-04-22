import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../Firebase/firebase.config";
import { UserContext } from "../../providers/UserContextProvider";



const BodyText = ({user}) => {
    const [messages, setMessages] = useState([]);
    const { currentUser } = useContext(UserContext);
    

     //   ! @ # $ % ^ & * ( ) - _ + = [ ] { } \ | ; : ' " , . / < > ? ~ ¢ £ ¥ € 
    const combinedId =
    currentUser.uid > user.uid
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid;

  useEffect(() => {
    const conversationRef = doc(db, 'conversations', combinedId);
    const unsubscribe = onSnapshot(conversationRef, (snapshot) => {
      const data = snapshot.data();
      if (data) {
        setMessages(data.messages);
      }
      
    });

    return () => unsubscribe();
  }, [combinedId]);

  return (
    <div className="overflow-x-auto h-[40vh] mb-1">
      {messages.map((message, index) => (
        <div key={index} className={message.senderId === currentUser.uid ? 'flex justify-end items-end' : 'flex justify-start items-start'}>
          
          <p className={message.senderId === currentUser.uid ? 'bg-blue-500 w-fit px-5 py-3 rounded-full text-white font-semibold mt-3' : 'bg-gray-100 font-semibold w-fit px-5 py-3 mt-3 rounded-full'}> {message.message}</p>
          
          
        </div>
      ))}
    </div>
  );
};

export default BodyText;