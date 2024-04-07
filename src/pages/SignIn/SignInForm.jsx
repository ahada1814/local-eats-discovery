import { Field, Formik } from "formik";

const SignInForm = () => {
  const valueViewer = (val) => {
    console.log(val);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          valueViewer(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => (
        <div className="bg-[#3D83D9] p-8 w-3/12">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h1 className="font-roboto">Email</h1>
            <Field
              className="border border-gray-300 bg-transparent rounded-md py-2 px-4 focus:outline-none focus:border-white"
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
            />

            {errors.email && touched.email && errors.email}
            <Field
              className="border border-gray-300 bg-transparent rounded-md py-2 px-4 focus:outline-none focus:border-white"
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default SignInForm;
