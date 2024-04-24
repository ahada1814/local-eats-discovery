import { useContext } from "react";
import ResturantsCards from "../../components/ResturantCards/ResturantsCards";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";

const Location = ({ filteredRestaurantsState }) => {
  const { filteredRestaurants, restaurants } = useContext(AuthContext);

  // const [isClose, setIsClose] = useState(false);

  console.log(filteredRestaurantsState);

  // const handleIsClose = () => {
  //   setIsClose(!isClose);
  // };

  return (
    <div>
      {
        // Show default restaurants if both filteredRestaurants and filteredRestaurantsState are falsy
        filteredRestaurants.length == 0 && filteredRestaurantsState.length == 0
          ? restaurants?.map((restaurant) => (
              <ResturantsCards key={restaurant._id} restaurant={restaurant} />
            ))
          : // Show filteredRestaurants if it exists and filteredRestaurantsState has no items
          filteredRestaurants && !filteredRestaurantsState.length
          ? filteredRestaurants?.map((restaurant) => (
              <ResturantsCards key={restaurant._id} restaurant={restaurant} />
            ))
          : // Show filteredRestaurantsState if it exists
            filteredRestaurantsState?.map((restaurant) => (
              <ResturantsCards key={restaurant._id} restaurant={restaurant} />
            ))
      }
      {/* <div className="relative">
        <button
          onClick={handleIsClose}
          className="bg-white p-3 absolute left-[1180px] mt-3 rounded-xl text-orange-500"
        >
          View All
        </button>
      </div> */}
    </div>
  );
};

export default Location;
