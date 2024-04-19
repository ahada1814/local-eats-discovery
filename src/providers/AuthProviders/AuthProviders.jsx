import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { fromLatLng, setKey } from "react-geocode";

export const AuthContext = createContext(null);
const auth = getAuth(app);
setKey(`${import.meta.env.VITE_GOOGLE_MAP_API_KEY}`);

const AuthProviders = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // the user
  const [currentLocation, setCurrentLocation] = useState(null); // getting the lat and lang
  const [address, setAddress] = useState(null); // getting the address
  const [role, setRole] = useState("");

  const [userData, setUserData] = useState('');

  // console.log(role);

  // console.log(currentLocation, address);

  // console.log(user);

  const provider = new GoogleAuthProvider();

  // For Location

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          setCurrentLocation({
            latitude,
            longitude,
          });

          fromLatLng(position.coords.latitude, position.coords.longitude)
            .then((response) => {
              // console.log(response);
              const address = response.results[0].formatted_address;
              setAddress(address);

              localStorage.setItem(
                "locationData",
                JSON.stringify({
                  latitude,
                  longitude,
                  address,
                })
              );
            })
            .catch((error) => {
              console.error("Error fetching address:", error);
            });
        },

        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported");
    }
  }, []);

  // User created with email
  const createUserWithEmail = async (email, password, displayName) => {
    setUserData(displayName);
    setLoading(true);

    // console.log(email, password, displayName, number, "recent");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // await updateProfile(user, { displayName });
      await update(displayName)

      localStorage.setItem("user", JSON.stringify(user));

      setLoading(false);
      setUser(user);
      // console.log(user);
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

  const update = async (userName) => {
    setLoading(true);
    setUserData(userName)
    return await updateProfile(auth.currentUser, {
      displayName: userName,
    });
  };


  // Email Login
  const loginWithEmail = async (email, password) => {
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setLoading(false);
      setUser(user);
      // console.log(user);
      return user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false);
      console.error(errorCode, errorMessage);
    }
  };

  // google pop up login

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      // console.log(result.user);
      return result; // Return the result
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      throw error;
    }
  };

  const logOut = async () => {
    setLoading(true);
    return await signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Sign out error:", error.message);
        setLoading(false);
      });
  };

  // observer == it helps to give the current situation of user auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  
      if (currentUser) {
        setUser(currentUser);

        // console.log(currentUser?.displayName);
        // console.log(user?.displayName);
        // Retrieve location data from localStorage
        const locationData = JSON.parse(localStorage.getItem("locationData"));

        // console.log(userData);
        if (locationData && currentUser.displayName) {
          console.log(currentUser.displayName);
          console.log(currentUser.userName);
          console.log(userData);
          const person = {
            name: currentUser.userName || currentUser.displayName || userData,
            email: currentUser.email,
            displayPhoto: currentUser.photoURL,
            uid: currentUser.uid,
            phNumber: currentUser.phoneNumber,
            role: role || "user",
            location: locationData,
          };
          console.log(person);

          fetch(`${import.meta.env.VITE_REACT_API}added-user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
          })
            .then((response) => {
              if (!response.ok) {
                console.log("Failed to add user");
              } else {
                console.log("User posted successfully");
              }
            })
            .catch((error) => console.error("Error adding user", error));
        } else {
          console.log("Location data not found in localStorage and display name not found");
        }
      } else {
        console.log("User is logged out");
      }
    });

    setLoading(false);

    return () => unsubscribe();
  }, []);
  

  useEffect(() => {
    // console.log(user);
    if (user?.email) {
      fetch(`${import.meta.env.VITE_REACT_API}verify-user/${user?.email}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setRole(data.role);
          // console.log(data.role);
          setLoading(false);
        })
        .catch((error) => {
          console.error("There was a problem fetching the role:", error);
        });
    }
  }, [user]);

  const authInfo = {
    loading,
    user,
    createUserWithEmail,
    loginWithEmail,
    logOut,
    role,
    googleLogin,
    currentLocation,
    address,
    userData,
    update
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
