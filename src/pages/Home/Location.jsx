import { useContext, useState } from "react";
import ResturantsCards from "../../components/ResturantCards/ResturantsCards";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";


const Location = ({ filteredRestaurantsState }) => {
  const { filteredRestaurants, restaurants } = useContext(AuthContext);
  const [showAllRestaurants, setShowAllRestaurants] = useState(false);
  
  const sliceRestaurants = (data) => {
    return showAllRestaurants ? data : data?.slice(0, MAX_RESTAURANTS_TO_SHOW);
  };
  
  const MAX_RESTAURANTS_TO_SHOW = 3; 
  return (
    <div>
      {
        // Show default restaurants if both filteredRestaurants and filteredRestaurantsState are falsy
        filteredRestaurants.length === 0 &&
        filteredRestaurantsState.length === 0
          ? sliceRestaurants(restaurants)?.map((restaurant) => (
              <ResturantsCards key={restaurant._id} restaurant={restaurant} />
            ))
          : filteredRestaurants && !filteredRestaurantsState.length
          ? // Show filteredRestaurants if it exists and filteredRestaurantsState has no items
            sliceRestaurants(filteredRestaurants)?.map((restaurant) => (
              <ResturantsCards key={restaurant._id} restaurant={restaurant} />
            ))
          : filteredRestaurantsState?.map((restaurant) => (
              // Show filteredRestaurantsState if it exists
              <ResturantsCards key={restaurant._id} restaurant={restaurant} />
            ))
      }
      {
        (filteredRestaurantsState?.length > MAX_RESTAURANTS_TO_SHOW ||
          filteredRestaurants?.length > MAX_RESTAURANTS_TO_SHOW ||
          restaurants?.length > MAX_RESTAURANTS_TO_SHOW) && (
          <button
            className="bg-white p-2 rounded-xl font-semibold text-orange-500 flex mx-auto mt-4"
            onClick={() => setShowAllRestaurants(!showAllRestaurants)}
          >
            {showAllRestaurants ? "Show Less" : "View All"}
          </button>
        )
      }
    </div>
  );
};

export default Location;

// import { useContext } from "react";
// import ResturantsCards from "../../components/ResturantCards/ResturantsCards";
// import { AuthContext } from "../../providers/AuthProviders/AuthProviders";

// const Location = ({ filteredRestaurantsState }) => {
//   const { filteredRestaurants, restaurants } = useContext(AuthContext);

//   console.log(filteredRestaurants);

//   return (
//     <div>
//       {filteredRestaurants.length == 0 && filteredRestaurantsState.length == 0
//         ? restaurants?.map((restaurant) => (
//             <ResturantsCards key={restaurant._id} restaurant={restaurant} />
//           ))
//         : filteredRestaurants && !filteredRestaurantsState.length
//         ? filteredRestaurants?.map((restaurant) => (
//             <ResturantsCards key={restaurant._id} restaurant={restaurant} />
//           ))
//         : filteredRestaurantsState?.map((restaurant) => (
//             <ResturantsCards key={restaurant._id} restaurant={restaurant} />
//           ))}
//     </div>
//   );
// };

// export default Location;
