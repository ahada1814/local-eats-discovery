import { useEffect, useState } from "react";
import ResturantsCards from "../../components/ResturantCards/ResturantsCards";

const Location = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  console.log(currentLocation);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          // Error callback
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported");
    }
  }, []);

  return (
    <>
      <ResturantsCards />
    </>
  );
};

export default Location;
