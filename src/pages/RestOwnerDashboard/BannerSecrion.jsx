import "./profile.css";
import person from "../../assets/woner.png";
import { useRef, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";

const BannerSecrion = () => {
  const [selectedImage, setSelectedImage] = useState();
  const fileInputRef = useRef(null);

  // Function to handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="coverImg text-white flex relative md:static justify-start  items-end ">
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
          {selectedImage ? (
            <img
              src={selectedImage}
              width={1080}
              height={720}
              className="w-[100px] h-[100px] rounded-lg"
            />
          ) : (
            <img src={person} className="w-[100px] h-[100px] rounded-lg" />
          )}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#EA6A12]">Devon Lane</h3>
          <h3 className="text-2xl font-bold text-black">
            Barishal Gate The Restaurant
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BannerSecrion;
