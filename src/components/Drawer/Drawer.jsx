import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <div className="bg-white w-96">
      <div className="flex flex-col font-semibold text-xl w-64 mx-auto pt-10 h-96">
        <Link to="/rest-profile/view-menus" className="pb-4">View Menu</Link>
        <Link to="/rest-profile/AddItems" className="border-t py-4 border-slate-300">Add Menu</Link>
        <Link to="/" className="border-t py-4 border-slate-300">Messages</Link>
        <Link to="/rest-profile/edit-profile" className="border-t py-4 border-slate-300">Edit Profile</Link>
        <Link to="/" className="border-t py-4 border-slate-300">Logout</Link>
      </div>
    </div>
  );
};

export default Drawer;
