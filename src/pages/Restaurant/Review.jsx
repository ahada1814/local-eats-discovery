import person from "../../assets/profile.png";
import { FaRegHeart } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const fetchReviews = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_API}reviews`);
      if (response.ok) {
        const data = await response.json();
        const filteredReviews = data.filter((review) => review.uniqueId === id);
        setReviews(filteredReviews);
        console.log(filteredReviews);
      } else {
        console.error("Error fetching reviews:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [id]);

 const demoUser = 'owner'

  return (
    <div className="w-[55%] ml-10">
      {reviews.map((post) => (
        <div key={post}>
          <div className="grid grid-cols-1">
            <h1 className="mt-4 font-bold mb-3 ml-1">{post?.name ? post.name : 'Unknown'}</h1>
            <div className="flex justify-start items-start gap-5">
              <img src={post?.image ? post.image : person} alt="user" />
              <div className="flex flex-col font-semibold">
                <span>{post?.comment}</span>
                <div className="flex justify-start mt-2 items-center gap-5 text-[#EA6A12]">
                  <FaRegHeart />
                  <span className="">Like</span>
                  <BiShare />
                  <span>Replay</span>
                  <span className="text-gray-500">5min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {
        demoUser ? <div className="flex gap-3 mt-5">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="font-semibold hover:scale-90 duration-300 bg-[#FFC153] p-3 text-white rounded-lg"
        >
          Leave a Review
        </button>
        <button className="font-semibold bg-[#F2613F] p-3 text-white rounded-lg">
          View All
        </button>
      </div> : <p className="text-4xl text-center border">No Reviews Found</p>
      }
      {/* modal */}
      <Modal />
    </div>
  );
};

export default Review;
