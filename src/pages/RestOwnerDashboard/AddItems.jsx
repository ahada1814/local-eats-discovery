const AddItems = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-3 w-[60%] ps-20 pt-8 h-screen">
      <h5 className="text-3xl font-bold">Add Menu</h5>
      <div className="bg-white w-full p-4 rounded-md">
        <span className="text-xs">Menu name</span>
        <h3 className="text-xl font-semibold">Italian Salad</h3>
      </div>
      <div className="bg-white w-full p-4 rounded-md">
        <span className="text-xs">Price</span>
        <h3 className="text-xl font-semibold">10$</h3>
      </div>
      <div className="bg-white w-full p-4 rounded-md">
        <span className="text-xs">Person Per Platter</span>
        <h3 className="text-xl font-semibold">3 Person</h3>
      </div>
      <div className="bg-white w-full p-4 rounded-md">Upload Photos</div>
      <input
        type="submit"
        value="Update"
        className="bg-[#FFC153] px-6 py-2 text-white font-semibold rounded-md"
      />
    </div>
  );
};

export default AddItems;
