import "./profile.css";
import person from "../../assets/woner.png";
import { useContext, useEffect, useRef, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import { GridLoader } from "react-spinners";

const BannerSecrion = () => {
  const fileInputRef = useRef(null);
  const { uploadImage, loading, user } = useContext(AuthContext);
  const [localImageUrl, setLocalImageUrl] = useState();


  useEffect(() => {
    // Check if there's an uploaded image URL in local storage
    const uploadedImageUrl = localStorage.getItem("uploadedImageUrl");
    if (uploadedImageUrl) {
      setLocalImageUrl(uploadedImageUrl);
    }
  }, []);

  // Function to handle file selection
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const imageUrl = await uploadImage(file);
        // Store the uploaded image URL in local storage
        localStorage.setItem("uploadedImageUrl", imageUrl);
        setLocalImageUrl(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const demoUser = "user";

  return (
    <div className="coverImg text-white flex relative justify-start  items-end ">
      <Link
        to="/"
        className="absolute top-4 hidden md:block left-4 hover:bg-slate-400 hover:text-black hover:scale-05 rounded-full p-2"
      >
        <GoArrowLeft size={30} />
      </Link>
      <div className="bg-[#ffffffa5] w-full flex justify-start items-center gap-5 ps-8 absolute">
        <div className="flex flex-col-reverse gap">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <button
            onClick={handleButtonClick}
            className="font-semibold flex items-center flex-col justify-center absolute bg-black text-sm text-orange-300 opacity-0 rounded-lg hover:opacity-50 border-2 border-orange-400 h-[100px] w-[100px]"
          >
            <IoCameraOutline size={28} className="" />
            Select
          </button>
          {loading ? (
            <GridLoader />
          ) : (
            <>
              {localImageUrl ? (
                <img
                  src={localImageUrl}
                  width={1080}
                  height={720}
                  className="w-[100px] h-[100px] rounded-lg"
                />
              ) : (
                <img
                  src={user?.photoURL ? user?.photoURL : person}
                  className="w-[100px] h-[100px] rounded-lg"
                />
              )}
            </>
          )}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#EA6A12]">
            {user?.displayName}
          </h3>
          <h3 className="md:text-2xl text-xl font-bold text-black">
            {demoUser == "owner" ? (
              <p>{user?.location?.address}</p>
            ) : (
              <p>{user?.email}</p>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BannerSecrion;
