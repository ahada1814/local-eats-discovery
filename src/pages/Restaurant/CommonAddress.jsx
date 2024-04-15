import "./Restaurant.css";
import { IoMailUnreadSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { VscCommentUnresolved } from "react-icons/vsc";
import Modal from "./Modal";

const CommonAddress = ({restaurants}) => {
    console.log(restaurants);
  return (
    <div className=" w-[35%] drop-shadow-2xl">
      <div className="bg-white flex flex-col justify-start items-start mx-auto p-10 rounded-md">
        <h3 className="text-xl font-bold mb-1">{restaurants?.restaurant_name}</h3>
        <p className="w-[40%] mb-3 text-gray-600">
          {restaurants?.place_name}
        </p>
        <h3 className="text-xl font-bold mb-2">Time To Open</h3>
        <p className="text-[#2798EA]">{restaurants?.opening_time}</p>

        <div className="flex justify-center items-center gap-3 mt-5 text-2xl">
          <div className="bg-[#F2613F] px-7 py-3 rounded-md text-white">
            <IoMailUnreadSharp />
          </div>
          <div className="bg-[#F2613F] px-6 py-3 rounded-md text-white">
            <FaPhoneAlt />
          </div>
          <div
            className="bg-[#F2613F] px-6 py-3 rounded-md text-white"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <VscCommentUnresolved />
          </div>
        </div>
      </div>
      {/* modal */}
      <Modal />
    </div>
  );
};

export default CommonAddress;
