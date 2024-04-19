import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Drawer = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white w-96 hidden md:block">
        <div className="flex flex-col font-semibold text-xl w-64 mx-auto pt-10 h-96">
          <Link to="/rest-profile/view-menus" className="pb-4">
            View Menu
          </Link>
          <Link
            to="/rest-profile/AddItems"
            className="border-t py-4 border-slate-300"
          >
            Add Menu
          </Link>
          <Link to="/" className="border-t py-4 border-slate-300">
            Messages
          </Link>
          <Link
            to="/rest-profile/edit-profile"
            className="border-t py-4 border-slate-300"
          >
            Edit Profile
          </Link>
          <Link to="/" className="border-t py-4 border-slate-300">
            Logout
          </Link>
        </div>
      </div>

      {isOpen ? (
        <>
          <div className={`flex w-60 ml-1 md:hidden h-96 bg-slate-50 rounded-lg absolute top-0 ${isOpen ? "transition-transform translate-x-0 duration-300" : "transition-transform -translate-x-96 duration-300"} `}>
            <div className="flex flex-col font-semibold text-xl mx-auto justify-center">
              <Link to="/rest-profile/view-menus" className="pb-4">
                View Menu
              </Link>
              <Link
                to="/rest-profile/AddItems"
                className="border-t py-4 border-slate-300"
              >
                Add Menu
              </Link>
              <Link to="/" className="border-t py-4 border-slate-300">
                Messages
              </Link>
              <Link
                to="/rest-profile/edit-profile"
                className="border-t py-4 border-slate-300"
              >
                Edit Profile
              </Link>
              <Link to="/" className="border-t py-4 border-slate-300">
                Logout
              </Link>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <button
        onClick={openMenu}
        className={`font-bold absolute md:hidden top-2 left-1 ${!isOpen ? 'bg-orange-400' : 'bg-slate-50'} p-1 rounded-lg`}
      >
        {!isOpen ? <GiHamburgerMenu size={30} /> : <IoMdClose size={30} />}
      </button>
    </>
  );
};

export default Drawer;