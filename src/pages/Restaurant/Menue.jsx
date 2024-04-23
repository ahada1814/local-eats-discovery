import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Menue = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_API}single-restaurant/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }
        return response.json();
      })
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, [id]);

  const itemsPerPage = 6;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = restaurants?.food_items.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <h5
        className={`text-3xl flex border w-96 ${
          !restaurants?.food_items[0] ? "text-center" : ""
        } font-bold mb-3`}
      >
        {!restaurants?.food_items[0] ? "No Items..." : "Trending Orders"}
      </h5>
      <div className="">
        <div className="grid grid-cols-3 gap-5">
          {currentItems?.map((f, index) => (
            <div key={index} className="drop-shadow-2xl">
              <div className="flex justify-center items-center gap-4 bg-white py-2 px-2 rounded-md">
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-xl font-semibold">{f?.menuName}</h3>
                  <p className="mt-2 text-gray-600">
                    {f?.personPerPlatter} persons
                  </p>
                  <p className="mt-2 text-[#EA6A12] font-semibold">
                    ${f?.price}
                  </p>
                </div>
                <div>
                  <img src={f?.photos} alt="" className="w-[70px] rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          {restaurants?.food_items.length > itemsPerPage && (
            <button className="" onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
              Next Page
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Menue;
