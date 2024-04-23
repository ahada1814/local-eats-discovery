import { collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../Firebase/firebase.config";
import { UserContext } from "../../providers/UserContextProvider";
import { fetchRestaurants } from "../../hooks/api";

const Chats = ({handelUid,combinedId}) => {
    // const [lastMessage,setLastMessage] = useState(null)
    const [allUsers, setAllUsers] = useState([]);
    const { currentUser } = useContext(UserContext);



   
    useEffect(() => {
        const fetchAllUsers = async () => {
          try {
            const usersCollection = collection(db, "users"); // Assuming your users are stored in a "users" collection
            const usersSnapshot = await getDocs(usersCollection);
            const usersData = usersSnapshot.docs.map(doc => doc.data());
            const filteredUsers = usersData.filter(user => user.uid !== currentUser.uid);
            setAllUsers(filteredUsers);


            const restaurants = await fetchRestaurants()
            console.log(restaurants);
          } catch (error) {
            console.error("Error fetching all users:", error);
            // Handle error
          }
        };
      
        fetchAllUsers();
      }, []);
      
     
    //   useEffect(() => {
    //     const fetchLastMessages = async () => {
    //       const promises = allUsers.map(async (user) => {
    //         const conversationRef = doc(db, 'conversations', combinedId); // Assuming conversation ID is same as user ID
    //         const snapshot = await getDoc(conversationRef);
    //         if (snapshot.exists()) {
    //           const data = snapshot.data();
    //           if (data && data.messages && data.messages.length > 0) {
    //             const lastMessage = data.messages[data.messages.length - 1];
    //             return { ...user, lastMessage };
    //           }
    //         }
    //         return { ...user, lastMessage: null };
    //       });
    //       const updatedUsers = await Promise.all(promises);
    //       setAllUsers(updatedUsers);
    //     };
    
    //     fetchLastMessages();
    //   }, [allUsers,combinedId]);
    
   
   console.log();
    return (
        <div className="">
          {allUsers.map((u) =>
            <div className='flex flex-col cursor-pointer border transition-colors duration-300 ease-in-out hover:bg-gray-200 ' key={u.uid} onClick={() => handelUid(u)}>
              <div className='flex justify-start items-center gap-3 p-5 drop-shadow-md'>
                <div className='flex justify-center items-center gap-3'>
                <img src={u.photoURL} alt="" className="rounded-full w-12 h-12 ring-2 "/>
                  <div className="">
                  <h4 className=' font-bold text-blue-600 mt-2 mb-2'>{u.displayName}</h4>
                  <p className='text-sm text-gray-500'>Connect With Us</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      );
};

export default Chats;