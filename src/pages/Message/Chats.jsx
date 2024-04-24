import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../Firebase/firebase.config";
import { UserContext } from "../../providers/UserContextProvider";
import { fetchRestaurants } from "../../hooks/api";
import avater from '../../assets/person.png'
const Chats = ({handelUid,combinedId}) => {
  
    const [allUsers, setAllUsers] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const { currentUser } = useContext(UserContext);
    const [messages, setMessages] = useState([]);
    const [usersArray, setUsersArray] = useState([]);
    const [ownersArray, setOwnersArray] = useState([]);
   
    useEffect(() => {
        const fetchAllUsers = async () => {
          try {
            const usersCollection = collection(db, "users"); // Assuming your users are stored in a "users" collection
            const usersSnapshot = await getDocs(usersCollection);
            const usersData = usersSnapshot.docs.map(doc => doc.data());
            const filteredUsers = usersData.filter(user => user.uid !== currentUser.uid);
            setAllUsers(filteredUsers);

            // seperate users and owner
            const usersArray = filteredUsers.filter(user => user.role === 'user');
            const ownersArray = filteredUsers.filter(user => user.role === 'owner');
            setUsersArray(usersArray);
            setOwnersArray(ownersArray);

            const restaurants = await fetchRestaurants()
            setRestaurants(restaurants);
          } catch (error) {
            console.error("Error fetching all users:", error);
            // Handle error
          }
        };
      
        fetchAllUsers();
      }, []);

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
    
  const replaceDisplayName = (email) => {
    const user = allUsers.find(user => user.email === email);
    const restaurant = restaurants.find(restaurant => restaurant.ownerEmail === email);
    return restaurant ? restaurant.restaurant_name : user ? user.displayName : '';
};
    

const replaceDisplayImg = (email) => {
  const restaurant = restaurants.find(restaurant => restaurant.ownerEmail === email);
  return restaurant ? restaurant.restaurant_img : '';
};



console.log(usersArray);
console.log(ownersArray);
    return (
        <div className="">
          {allUsers.map((u) =>
            <div className='flex flex-col cursor-pointer border transition-colors duration-300 ease-in-out hover:bg-gray-200 ' key={u.uid} onClick={() => handelUid(u)}>
              <div className='flex justify-start items-center gap-3 p-5 drop-shadow-md'>
                <div className='flex justify-center items-center gap-3'>
                <img src={replaceDisplayImg(u.email)? replaceDisplayImg(u.email) : u.photoURL? u.photoURL : avater} alt="" className="rounded-full w-12 h-12 ring-2 "/>
                  <div className="">
                  <h4 className=' font-bold text-blue-600 mt-2 mb-2'>{replaceDisplayName(u.email)}</h4>
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