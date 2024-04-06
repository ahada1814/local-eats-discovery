import SignInForm from "./SignInForm";
import bgImage from "/src/assets/background.png";

const SignIn = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})`, height: "100vh" }}
      className=" bg-no-repeat bg-cover
    "
    >
      <div className="flex gap-2 justify-end pt-6 pr-10">
        <button className="bg-white w-28 py-3 px-[2px] text-[#3D83D9] rounded-2xl font-bold">
          Sign Up
        </button>
        <button className="bg-[#3D83D9] w-28 py-3 px-[2px] text-white rounded-2xl font-bold">
          Sign In
        </button>
      </div>
      <SignInForm />
    </div>
  );
};

export default SignIn;
