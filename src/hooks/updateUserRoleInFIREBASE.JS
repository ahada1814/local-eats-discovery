import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";

const updateUserRoleInDatabase = async (userId, newRole) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, { role: newRole });
      console.log("User role updated in Firestore");
    } catch (error) {
      console.error("Error updating user role in Firestore:", error);
    }
  };
  
  export default updateUserRoleInDatabase;