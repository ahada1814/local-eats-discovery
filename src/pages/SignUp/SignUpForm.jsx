import { Field, Formik } from "formik";
import { GrGoogle } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

const SignUpForm = ({handledUserCreation}) => {

  return (
    <Formik
      initialValues={{ userName: "", email: "", password: "" }}
      onSubmit={handledUserCreation}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => (
        <div className="flex items-center w-full justify-center font-roboto">
          <div className="bg-[#3D83D9] bg-opacity-70 p-8 w-3/12 rounded-md">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="mb-5 flex flex-col gap-3 items-start text-white">
                <div className="flex justify-between items-center w-full mb-5">
                  <h1 className="font-bold text-2xl">Log in</h1>
                  <button className="border border-white w-10 flex justify-center items-center h-10 rounded-full">
                    <IoClose size={28} />
                  </button>
                </div>
                <button className="border gap-3 flex items-center justify-center w-full border-gray-300 bg-transparent rounded-md py-3 px-4 focus:outline-none hover:bg-gray-300 hover:text-[#3D83D9]">
                  <GrGoogle size={24} />
                  <h1 className="font-bold text-xl">Log in with Google</h1>
                </button>
                <h1 className="font-bold mx-auto text-xl mt-4">
                  Register Using Email Address
                </h1>
              </div>
              <div className="mb-5 flex flex-col gap-3 items-start text-white">
                <h1 className="font-bold text-xl">Name</h1>
                <Field
                  className="border w-full border-gray-300 bg-transparent rounded-md py-4 px-4 focus:outline-none focus:border-white font-roboto"
                  type="text"
                  name="userName"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="mb-5 flex flex-col gap-3 items-start text-white font-roboto">
                <h1 className="font-bold text-xl">Email</h1>
                <Field
                  className="border w-full border-gray-300 bg-transparent rounded-md py-4 px-4 focus:outline-none focus:border-white"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                />
              </div>
              {errors.email && touched.email && errors.email}
              <div className="mb-5 flex flex-col gap-3 items-start text-white">
                <h1 className="font-bold text-xl text-white">Password</h1>
                <Field
                  className="border w-full border-gray-300 bg-transparent rounded-md py-4 px-4 focus:outline-none focus:border-white"
                  type="password"
                  name="password"
                  placeholder="At least 8 characters"
                />
              </div>
              {errors.password && touched.password && errors.password}
              <button
                className="bg-[#0286F7] rounded-md text-white py-4 font-bold text-xl font-roboto"
                type="submit"
                disabled={isSubmitting}
              >
                Sign Up
              </button>
            </form>
            <div className="border-[1px] border-white mt-5 mb-5"></div>
            <h1 className="font-semibold font-roboto text-2xl text-center text-white mb-5">
              Already have an account?
            </h1>
            <h1 className="font-semibold text-2xl font-roboto text-center text-[#0286F7]">
              Log in
            </h1>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
