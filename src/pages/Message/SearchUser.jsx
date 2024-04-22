import { useContext, useEffect, useState } from "react";
import {collection,query,where,getDocs, serverTimestamp, doc, updateDoc, setDoc, getDoc,} from "firebase/firestore";
import { db } from "../../Firebase/firebase.config";

import { UserContext } from "../../providers/UserContextProvider";
import firebase from "firebase/compat/app";
const SearchUser = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);
    const { currentUser } = useContext(UserContext);
   

    console.log(currentUser);
    const handleSearch = async () => {
        const q = query(
          collection(db, "users"),
          where("displayName", "==", username)
        );
    
        try {
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            setUser(doc.data());
          });
        } catch (err) {
          setErr(true);
        }
      };
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
      };


      const handleSelect = async () => {
        //check whether the group(chats in firestore) exists, if not create
        const combinedId =
          currentUser.uid > user.uid
            ? currentUser.uid + user.uid
            : user.uid + currentUser.uid;
        try {
          const res = await getDoc(doc(db, "chats", combinedId));
          console.log(res);
    
          if (!res.exists()) {
            //create a chat in chats collection
            await setDoc(doc(db, "chats", combinedId), { messages: [] });
          

          //create user chats
            await updateDoc(doc(db, "userChats", currentUser.uid), {
              [combinedId + ".userInfo"]: {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
              },
              [combinedId + ".date"]: serverTimestamp(),
            });
    
            await updateDoc(doc(db, "userChats", user.uid), {
              [combinedId + ".userInfo"]: {
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
              },
              [combinedId + ".date"]: serverTimestamp(),
            });}
        } catch (err) {}
    
        setUser(null);
        setUsername("")
      };


    return (
        <div className="py-3 px-2">
            <div className="w-full flex justify-start items-start gap-3">
                <input
                    type="text"
                    className="border-gray-300 border-2 w-full px-3 py-2 rounded-md"
                    placeholder="Find User"
                    onKeyDown={handleKey}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            {user && (
          
                <div className="flex justify-start items-start gap-3 p-5 drop-shadow-md bg-gray-100 mt-4" onClick={handleSelect}>
                    <div>
                        <img src={user.photoURL} alt="" className="w-20" />
                    </div>
                    <div>
                        <h4 className="text-2xs font-bold">{user.displayName}</h4>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum veniam aspernatur voluptatem ex non ....</p>
                    </div>
                </div>
             )}
        </div>
    );
};

export default SearchUser;