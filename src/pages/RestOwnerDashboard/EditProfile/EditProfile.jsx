import { Formik, Form, Field } from "formik";
import { useContext, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useAutocomplete } from "../../../providers/AutoComplete/AutoComplete";
import { Autocomplete } from "@react-google-maps/api";
import { AuthContext } from "../../../providers/AuthProviders/AuthProviders";

export const EditProfile = () => {
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const { autocompleteRef, handlePlaceSelect, isLoaded, selectedPlace } =
    useAutocomplete();

  const { user, number, imageUrl } = useContext(AuthContext);
  
  const demoUser = "owner";

  const submitFormData = async (values) => {
    try {
     
      const formData = {
        ...values,
        address: selectedPlace?.name || "",
        longitude: selectedPlace?.longitude,
        latitude: selectedPlace?.latitude,
        imageUrl: imageUrl
      };

      console.log(formData);

      const response = await fetch(`${import.meta.env.VITE_REACT_API}name-update/${user.email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data submitted successfully!");
      } else {
        console.error("Error submitting form data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          fullName: user?.displayName,
          email: user?.email,
          // password: "******",
          phoneNumber: number,
          address: selectedPlace?.name || "",
          restaurantName: "Your Restaurant Name",
        }}
        onSubmit={submitFormData}
      >
        <Form className="flex flex-col md:items-start mx-auto md:mx-0 md:justify-start gap-3 w-4/5 md:w-[550px] lg:w-[60%] md:ps-20 pt-8">
          <div className="bg-white w-full flex items-center justify-between p-4 rounded-md">
            <div className="flex flex-col space-y-1">
              <span className="text-xs">User Name</span>
              {isEditingEmail ? (
                <Field
                  className="py-4 pl-8 w-80 md:w-[500px] rounded-lg shadow-lg focus:outline-stone-300 focus:outline-offset-1 text-black"
                  type="text"
                  name="fullName"
                />
              ) : (
                <h3 className="text-xl font-semibold">{user?.displayName}</h3>
              )}
            </div>
          </div>
          {demoUser ? (
            <div className="bg-white w-full flex items-center justify-between p-4 rounded-md">
              <div className="flex flex-col space-y-1">
                <span className="text-xs">Restaurant Name</span>
                {isEditingEmail ? (
                  <Field
                    className="py-4 pl-8 w-80 md:w-[500px] rounded-lg shadow-lg focus:outline-stone-300 focus:outline-offset-1 text-black"
                    type="text"
                    name="restaurantName"
                  />
                ) : (
                  <h3 className="text-xl font-semibold">Restaurant Name</h3>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="bg-white w-full flex items-center justify-between p-4 rounded-md">
            <div className="flex flex-col space-y-1">
              <span className="text-xs">Email Address</span>
              {isEditingEmail ? (
                <Field
                  className="py-4 pl-8 w-80 md:w-[500px] rounded-lg shadow-lg focus:outline-stone-300 focus:outline-offset-1 text-black"
                  type="email"
                  name="email"
                />
              ) : (
                <h3 className="text-xl font-semibold">{user?.email}</h3>
              )}
            </div>
          </div>
          {/* <div className="bg-white w-full flex items-center justify-between p-4 rounded-md">
            <div className="flex flex-col space-y-1">
              <span className="text-xs">Password</span>
              {isEditingEmail ? (
                <Field
                  className="py-4 pl-8 w-80 md:w-[500px] rounded-lg shadow-lg focus:outline-stone-300 focus:outline-offset-1 text-black"
                  type="text"
                  name="password"
                />
              ) : (
                <h3 className="text-xl font-semibold">*******</h3>
              )}
            </div>
          </div> */}
          <div className="bg-white w-full flex items-center justify-between p-4 rounded-md">
            <div className="flex flex-col space-y-1">
              <span className="text-xs">Phone Number</span>
              {isEditingEmail ? (
                <Field
                  className="py-4 pl-8 w-80 md:w-[500px] rounded-lg shadow-lg focus:outline-stone-300 focus:outline-offset-1 text-black"
                  type="tel"
                  name="phoneNumber"
                />
              ) : (
                <h3 className="text-xl font-semibold">
                  {number ? number : "12345"}
                </h3>
              )}
            </div>
          </div>
          {/* This is map field */}
          <div className="bg-white w-full p-4 rounded-md flex flex-col space-y-1">
            <span className="text-xs">Address</span>
            {isEditingEmail ? (
              <>
                {isLoaded && (
                  <Autocomplete
                    onLoad={(autocomplete) =>
                      (autocompleteRef.current = autocomplete)
                    }
                    onPlaceChanged={handlePlaceSelect}
                    libraries={["places"]}
                  >
                    <Field
                      className="py-4 pl-8 w-80 md:w-[500px] rounded-lg shadow-lg focus:outline-stone-300 focus:outline-offset-1 text-black"
                      type="address"
                      name="address"
                      placeholder="Search your address"
                    />
                  </Autocomplete>
                )}
              </>
            ) : (
              <input
                type="address"
                name="address"
                value={`${
                  selectedPlace ? selectedPlace.name : "Add your location"
                }`}
                className="focus:outline-none font-semibold text-lg"
              />
            )}
          </div>
          <div className="flex space-x-4 justify-end border w-full mt-4">
            <button
              type="button"
              className="bg-black hover:bg-opacity-80 hover:scale-95 duration-200 gap-2 px-6 py-2 text-white font-semibold rounded-md flex items-center"
              onClick={() => setIsEditingEmail(!isEditingEmail)}
            >
              Edit
              <CiEdit size={24} />
            </button>
            <button
              type="submit"
              className="bg-[#FFC153] px-6 py-2 duration-200 text-white font-semibold hover:bg-opacity-80 hover:scale-95 rounded-md"
            >
              Update
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
