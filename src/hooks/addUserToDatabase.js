import { db } from "../Firebase/firebase.config";
import { doc, setDoc } from "firebase/firestore";



const addUserToDatabase = async (user, userData) => {

  try {
    // Add user data to the database
    const userDocRef = doc(db, "users", user?.uid);
    const userDataForFirestore = {
      uid: user?.uid,
      displayName: userData?.displayName,
      email: userData?.email,
      photoURL: userData?.photoURL,
      role: 'user',
      // Add other user data as needed
    };
    await setDoc(userDocRef, userDataForFirestore);
    console.log("User data added to Firestore");

    // // Set up user chat document
    await setupUserChatDocument(user?.uid);
  } catch (error) {
    console.error("Error adding user to Firestore:", error);
  }
};

const setupUserChatDocument = async (userId) => {
  try {
    // Create a chat document for the user
    const userChatRef = doc(db, "chats", userId);
    await setDoc(userChatRef, {}); // Assuming messages field is needed
    console.log("User chat document created:", userId);
  } catch (error) {
    console.error("Error setting up user chat document:", error);
  }
};

export default addUserToDatabase;