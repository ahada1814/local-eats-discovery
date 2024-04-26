import "./Restaurant.css";
import { IoMailUnreadSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { VscCommentUnresolved } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CommonAddress = ({ restaurants }) => {
  const handleEmailButtonClick = () => {
    const gmailComposeURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(
      restaurants.ownerEmail
    )}`;

    // Open Gmail in a new tab
    window.open(gmailComposeURL, "_blank");
  };

  const handlePhoneButtonClick = () => {
    const phoneNumber = restaurants.phoneNumber;
    if (phoneNumber) {
      const telURI = `tel:${phoneNumber}`;
      window.open(telURI);
    } else {
      Swal.fire({
        icon: "error",
        title: "Phone number not available",
        text: "This restaurant has not added their phone number.",
      });
    }
  };

  return (
    <div className="w-full lg:w-[55%] xl:w-[35%] flex justify-center items-center drop-shadow-2xl">
      <div className="bg-white w-full flex flex-col justify-start items-start mx-auto p-10 rounded-md">
        <h3 className="text-xl font-bold mb-1">
          {restaurants?.restaurant_name
            ? restaurants?.restaurant_name
            : "No Restaurant Name was Given"}
        </h3>
        <p className="w-[40%] mb-3 text-gray-600">{restaurants?.place_name}</p>
        <h3 className="text-xl font-bold mb-2">Time To Open</h3>
        <p className="text-[#2798EA]">
          {restaurants?.opening_time
            ? restaurants?.opening_time
            : "Time is not scheduled"}
        </p>

        <div className="grid grid-cols-4 xl:text-xl 2xl:text-3xl justify-center items-center xl:gap-1 2xl:gap-6 gap-4 mt-5">
          <div
            onClick={handleEmailButtonClick}
            className="border-[#F2613F] text-[#F2613F] border hover:bg-[#F2613F] px-2 xl:px-4 py-2 rounded-md hover:text-white"
          >
            <IoMailUnreadSharp />
          </div>
          <div
            onClick={handlePhoneButtonClick}
            className="border-[#F2613F] text-[#F2613F] border hover:bg-[#F2613F] px-2 xl:px-4 py-2 rounded-md hover:text-white"
          >
            <FaPhoneAlt />
          </div>
          <Link
            to="FoodReview"
            className="border-[#F2613F] text-[#F2613F] border hover:bg-[#F2613F] px-2 xl:px-4 py-2 rounded-md hover:text-white"
          >
            <VscCommentUnresolved />
          </Link>
          <Link
            to="menu"
            className="border-[#F2613F] text-[#F2613F] border hover:bg-[#F2613F] px-2 xl:px-4 py-2 rounded-md hover:text-white"
          >
            <GiHamburgerMenu />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonAddress;
