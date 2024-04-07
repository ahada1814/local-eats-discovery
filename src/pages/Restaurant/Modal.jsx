import { FaStar } from "react-icons/fa";

const Modal = () => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Review</h3>
        <div className="flex justify-start items-start gap-1 text-[#FEBD01] mt-3">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        <h3 className="text-lg font-bold mt-3">Comment</h3>
        <textarea name="" id="" cols="60" rows="5" className="border rounded-md border-gray-400 mt-3"></textarea>
        <input type="submit" value="Submit" className="px-4 py-2 bg-[#FFC153] rounded-md text-white font-semibold mt-2"/>
   
  </div>
</dialog>
        </div>
    );
};

export default Modal;