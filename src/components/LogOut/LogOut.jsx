import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import profile from '../../assets/profileLogo.png'

export const LogOut = ({logOut}) => {
    const {user} = useContext(AuthContext)
    console.log(user.photoURL);
  return (
    <div className="flex justify-center space-x-5 items-center">
      <button
        onClick={logOut}
        className="bg-[#3D83D9] hover:bg-white hover:text-[#3D83D9] hover:scale-95 duration-300 w-28 py-3 px-[2px] text-white rounded-2xl font-bold text-center"
      >
        Log out
      </button>
      {
        user.photoURL ? <img className="rounded-full w-14 border-4 border-[#FFC153]" width={1080} height={720} src={user?.photoURL} alt="" /> : <img src={profile} className="rounded-full w-14 border-4 border-[#FFC153]" width={1080} height={720} alt="demo"/>
      }
    </div>
  );
};
