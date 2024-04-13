import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import bgImage from "/src/assets/background.png";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUserWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handledUserCreation = async (values, { setSubmitting, setErrors }) => {
    try {
      await createUserWithEmail(values.email, values.password, values.userName);
      setSubmitting(false);
      navigate("/");
    } catch (error) {
      // TODO: A TOAST SAYING A ALERT
      if (error.code === "auth/email-already-in-use") {
        setErrors({ email: "This email is already in use" });
      }
      console.log(error.message, "aktu error kaiso SignUpForm a");
    }
  };

  return (
    <div style={{ backgroundImage: `url(${bgImage})`, height: "100vh" }}
         className="bg-no-repeat bg-cover">
      <div className="flex gap-2 justify-end pt-6 pr-10">
        <Link
          to="/sign-up"
          className="bg-white duration-300 hover:bg-[#3D83D9] hover:text-white hover:scale-95 hover:trans w-28 py-3 px-[2px] text-[#3D83D9] rounded-2xl font-bold text-center"
        >
          <button>Sign Up</button>
        </Link>
        <Link
          to="/sign-in"
          className="bg-[#3D83D9] hover:bg-white hover:text-[#3D83D9] hover:scale-95 duration-300 w-28 py-3 px-[2px] text-white rounded-2xl font-bold text-center"
        >
          <button>Sign In</button>
        </Link>
      </div>
      <SignUpForm handledUserCreation={handledUserCreation} />
    </div>
  );
};

export default SignUp;
