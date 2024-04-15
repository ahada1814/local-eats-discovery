import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

const ResturantsCards = ({ restaurant }) => {
  return (
    <Link to={`/Restaurant/${restaurant._id}`}>
      <div className="flex justify-center items-center mt-5">
        <div className="bg-white flex border-b-2 hover:bg-slate-100 hover:scale-105 duration-300 border-black w-[30%] h-36 justify-center p-4 gap-40 rounded-lg">
          <div className="flex flex-col gap-2 justify-center">
            <h1 className="font-bold">{restaurant?.restaurant_name}</h1>
            <div className="flex gap-2">
              <h1 className="font-semibold">({restaurant?.ratings})</h1>
              <p className="text-yellow-300 flex gap-2 items-center">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </p>
              <h1 className="font-semibold">(50)</h1>
            </div>
            <p className="text-sm font-semibold">{restaurant?.place_name}</p>
            <p className="text-sm">{restaurant?.opening_time}</p>
          </div>
          <img
            className="w-40 border rounded-md"
            width={1080}
            height={720}
            src={restaurant?.image}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default ResturantsCards;
