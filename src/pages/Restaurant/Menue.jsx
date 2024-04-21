

const Menue = ({ restaurants }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {restaurants?.food_items.map((f) => (
        <div key={f} className="drop-shadow-2xl">
          <div className="flex justify-center items-center gap-4 bg-white py-2 px-2 rounded-md">
            <div className="flex flex-col justify-start items-start">
              <h3 className="text-xl font-semibold">{f?.menuName}</h3>
              <p className="mt-2 text-gray-600">{f?.personPerPlatter} persons</p>
              <p className="mt-2 text-[#EA6A12] font-semibold">${f?.price}</p>
            </div>
            <div>
              <img src={f?.photos} alt="" className="w-[70px] rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menue;
