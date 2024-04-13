import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  // GoogleAuthProvider,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.id;

        console.log(user, uid);
      } else {
        console.log("User is logged out");
      }
    });

    setLoading(false);
    return () => {
      return unsubscribe();
    };
  }, []);

  // User created with email
  const createUserWithEmail = async (email, password, displayName) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName });
      setLoading(false);
      console.log(user);
      return user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false);
      if (errorCode === "auth/email-already-in-use") {
        console.log("This email already in use");
      } else {
        console.error(errorCode, errorMessage);
      }
    }
  };

  // Email Login
  const loginWithEmail = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    loading,
    createUserWithEmail,
    loginWithEmail,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
