import logo from "/src/assets/logo 1.png";
import searchIcon from "/src/assets/search.svg";
import "./home.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import { Link } from "react-router-dom";
import Location from "./Location";
import { LogOut } from "../../components/LogOut/LogOut";

export const Home = () => {
  const { logOut, user } = useContext(AuthContext);

  return (
    <>
      <div className="cvrImg">
        <div className="flex gap-2 justify-end pt-6 pr-10">
          {!user ? (
            <>
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
            </>
          ) : (
            <>
              <LogOut logOut={logOut} />
            </>
          )}
        </div>
        <figure className="flex justify-center mb-8 items-center mt-4">
          <img className="w-96" src={logo} alt="" />
        </figure>
        <h1 className="font-roboto font-base text-center text-white text-5xl">
          Your Nearby Restaurant
        </h1>
        <div className="flex gap-4 items-center justify-center mt-8">
          <input
            className="py-4 pl-8 w-[500px] rounded-lg shadow-lg focus:outline-stone-300 focus:outline-offset-1 text-black"
            type="search"
            placeholder="Search Nearby Restaurant"
          />
          <button className="bg-[#3D83D9] hover:bg-blue-500 hover:scale-95 p-1 w-14 rounded-lg">
            <img
              className="rounded-lg"
              width={1080}
              height={720}
              src={searchIcon}
              alt=""
            />
          </button>
        </div>
        <Location />
      </div>
    </>
  );
};
