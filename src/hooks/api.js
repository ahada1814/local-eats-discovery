export const addUserToDatabase = async (currentUser, locationData, userData, role) => {

  const person = {
    // name: currentUser.userName || currentUser.displayName || userData,
    name: currentUser.displayName || userData,
    email: currentUser.email,
    displayPhoto: currentUser.photoURL,
    uid: currentUser.uid,
    phNumber: currentUser.phoneNumber,
    role: role || "user",
    location: locationData,
  };

  return fetch(`${import.meta.env.VITE_REACT_API}added-user`, {
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
};