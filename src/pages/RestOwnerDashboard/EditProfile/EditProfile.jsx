import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";

export const EditProfile = () => {
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  return (
    <Formik
      initialValues={{
        fullName: "Devon Lane",
        email: "info@loriumipsum.com",
        password: "somethingIdontknow",
        phoneNumber: "+00000000000000000",
        address: "62 Park Avenue, Morestead, UK",
      }}
      onSubmit={(values) => {
        // Handle form submission here, for example, sending data to the backend
        console.log(values);
      }}
    >
      <Form className="flex flex-col items-start justify-start gap-3 w-[60%] ps-20 pt-8">
        <div className="bg-white w-full flex items-center justify-between p-4 rounded-md">
          <div className="flex flex-col space-y-1">
            <span className="text-xs">User Full Name</span>
            {isEditingEmail ? (
              <Field
                className="text-xl font-semibold border-b-2 outline-none border-yellow-300 pb-1"
                type="text"
                name="fullName"
              />
            ) : (
              <h3 className="text-xl font-semibold">Devon Lane</h3>
            )}
          </div>
        </div>
        <div className="bg-white w-full flex items-center justify-between p-4 rounded-md">
          <div className="flex flex-col space-y-1">
            <span className="text-xs">Email Address</span>
            {isEditingEmail ? (
              <Field
                className="text-xl font-semibold border-b-2 outline-none border-yellow-300 pb-1"
                type="email"
                name="email"
              />
            ) : (
              <h3 className="text-xl font-semibold">info@loriumipsum.com</h3>
            )}
          </div>
        </div>
        <div className="bg-white w-full flex items-center justify-between p-4 rounded-md">
          <div className="flex flex-col space-y-1">
            <span className="text-xs">Password</span>
            {isEditingEmail ? (
              <Field
                className="text-xl font-semibold border-b-2 outline-none border-yellow-300 pb-1"
                type="text"
                name="password"
              />
            ) : (
              <h3 className="text-xl font-semibold">somethingIdontknow</h3>
            )}
          </div>
        </div>
        <div className="bg-white w-full flex items-center justify-between p-4 rounded-md">
        <div className="flex flex-col space-y-1">
            <span className="text-xs">Phone Number</span>
            {isEditingEmail ? (
              <Field
                className="text-xl font-semibold border-b-2 outline-none border-yellow-300 pb-1"
                type="tel"
                name="phoneNumber"
              />
            ) : (
              <h3 className="text-xl font-semibold">+00000000000000000</h3>
            )}
          </div>
        </div>
        <div className="bg-white w-full p-4 rounded-md flex flex-col space-y-1">
          <span className="text-xs">Address</span>
          <Field
            className="text-xl font-semibold outline-none"
            type="text"
            name="address"
          />
        </div>
        <div className="flex space-x-4 justify-end border w-full mt-4">
          <button
            type="submit"
            className="bg-black gap-2 px-6 py-2 text-white font-semibold rounded-md flex items-center"
            onClick={() => setIsEditingEmail(!isEditingEmail)}
          >
            Edit
            <CiEdit size={24} />
          </button>
          <button
            type="submit"
            className="bg-[#FFC153] px-6 py-2 text-white font-semibold rounded-md"
          >
            Update
          </button>
        </div>
      </Form>
    </Formik>
  );
};
