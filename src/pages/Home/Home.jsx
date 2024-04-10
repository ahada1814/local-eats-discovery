import logo from "/src/assets/logo 1.png";
import searchIcon from "/src/assets/search.svg";
import "./style.css";

export const Home = () => {
  return (
    <>
      <div className="coverImg">
        <div className="flex gap-2 justify-end pt-6 pr-10">
          <button className="bg-white w-28 py-3 px-[2px] text-[#3D83D9] rounded-2xl font-bold">
            Sign Up
          </button>
          <button className="bg-[#3D83D9] w-28 py-3 px-[2px] text-white rounded-2xl font-bold">
            Sign In
          </button>
        </div>
        <figure className="flex justify-center mb-10 items-center mt-4">
          <img className="w-96" src={logo} alt="" />
        </figure>
        <h1 className="font-roboto font-base mt-4 text-center text-white text-5xl">
          Your Nearby Restaurant
        </h1>
        <div className="flex gap-2 items-center justify-center mt-8">
          <input
            className="p-4 w-96 rounded-lg shadow-lg text-black"
            type="search"
            placeholder="Search Nearby Restaurant"
          />
          <div className="bg-[#3D83D9] p-1 w-14 rounded-lg">
            <img className="rounded-lg" width={1080} height={720} src={searchIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
