import BannerSecrion from "./BannerSecrion";
import { Outlet } from "react-router-dom";

const RestProfile = () => {
    return (
        <div className="bg-slate-200">
            <BannerSecrion />
            <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-start justify-start pt-8 ">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  <Outlet/>
  </div> 
  <div className="drawer-side p-8 ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label> 
    <ul className="menu font-semibold gap-3 justify-center items-start w-80 min-h-[30vh] text-base-content bg-white p-5">
      {/* Sidebar content here */}
      <li className="font-semibold border-gray-400 w-full"><a>Add Menue</a></li>
      <li className="border-t-2 w-full border-x-gray-400"><a>Message</a></li>
      <li className="border-t-2 w-full border-x-gray-400"><a>Edit profile </a></li>
      <li className="border-t-2  w-full border-x-gray-400"><a>Logout </a></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default RestProfile;