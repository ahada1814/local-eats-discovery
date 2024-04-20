import food from "../../assets/trending image 1.png";

const Menue = ({restaurants}) => {
    return (
    
            <div className="grid grid-cols-3 gap-5">
                {restaurants?.food_items.map((f) => (
                  <div key={f} className="drop-shadow-2xl">
                    <div className="flex justify-center items-center gap-4 bg-white py-2 px-2 rounded-md">
                      <div className="flex flex-col justify-start items-start">
                        <h3 className="text-xl font-semibold">{f.name}</h3>
                        <p className="mt-2 text-gray-600">4 persons</p>
                        <p className="mt-2 text-[#EA6A12] font-semibold">
                          ${f.price}
                        </p>
                      </div>
                      <div>
                        <img src={food} alt="" className="w-[70px]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
        
    );
};

export default Menue;