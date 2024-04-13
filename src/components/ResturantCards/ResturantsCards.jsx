import { IoStar } from "react-icons/io5";
import randomResturant from "../../assets/bgg.jpg";

const ResturantsCards = () => {
  return (
    <div className="flex justify-center items-center mt-5">
    <div className="bg-white flex hover:scale-105 hover:bg-slate-100 duration-300 border-b-2 border-blue-500 w-[31%] h-36 justify-center p-4 gap-36 rounded-lg">
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="font-bold">Barishal Gate Resturant</h1>
          <div className="flex gap-2">
            <h1 className="font-semibold">(5.0)</h1>
            <p className="text-yellow-300 flex gap-2 items-center">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </p>
            <h1 className="font-semibold">(50)</h1>
          </div>
          <p className="text-sm font-semibold">210, arafat house, Kali Bari Rd, Barishal</p>
          <p className="text-sm">Open 10 AM to 10 PM</p>
        </div>
        <img className="w-40 border rounded-md" width={1080} height={720} src={randomResturant} alt="" />
      </div>
    </div>
  );
};

export default ResturantsCards;
