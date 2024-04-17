import BannerSecrion from "./BannerSecrion";
import { Outlet, useLocation } from "react-router-dom";
import Drawer from "../../components/Drawer/Drawer";

const RestProfile = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className="bg-slate-200 h-fit">
        <BannerSecrion />
        <div className="flex ">
          <Drawer />
          <Outlet />
        </div>
      </div>
    </>
  );
};

// <div className="drawer lg:drawer-open ">
//           <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//           <div className="drawer-content flex flex-col items-start justify-start pt-8 ">
//             {/* Page content here */}
//             <label
//               htmlFor="my-drawer-2"
//               className="btn btn-primary drawer-button lg:hidden"
//             >
//               Open drawer
//               <Outlet />
//             </label>
//           </div>
//           <div className="drawer-side p-8 ">
//             <label
//               htmlFor="my-drawer-2"
//               aria-label="close sidebar"
//               className="drawer-overlay "
//             ></label>
//             <ul className="menu font-semibold gap-3 justify-center items-start w-80 min-h-[30vh] text-base-content bg-white p-5">
//               {/* Sidebar content here */}
//               <Link to="/" className="font-semibold border-gray-400 w-full">
//                 <li className="w-full border-x-gray-400">
//                   <a>View Menu</a>
//                 </li>
//               </Link>
//               <Link
//                 to="/rest-profile/Additems"
//                 className="font-semibold border-gray-400 w-full"
//               >
//                 <li className="border-t-2 w-full border-x-gray-400">
//                   <a>Add Menu</a>
//                 </li>
//               </Link>
//               <li className="border-t-2 w-full border-x-gray-400">
//                 <a>Message</a>
//               </li>
//               <li className="border-t-2 w-full border-x-gray-400">
//                 <a>Edit profile </a>
//               </li>
//               <li className="border-t-2  w-full border-x-gray-400">
//                 <a>Logout </a>
//               </li>
//             </ul>
//           </div>
//         </div>

export default RestProfile;
