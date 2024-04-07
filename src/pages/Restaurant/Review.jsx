import CommonAddress from './CommonAddress';
import CommonBannar from './CommonBannar';
import person from '../../assets/profile.png'
import { FaRegHeart } from "react-icons/fa";
import { BiShare } from "react-icons/bi";


const Review = () => {
    const review =[1,2]
    return (
        <div className='bgImg flex justify-center items-center'>
            
        <div className='bg-[#F5F5F5] w-[65%] h-[82%]  mx-auto  rounded-lg py-10'>
           <div>
            {/* banner section */}
            <CommonBannar />

            <div className='flex justify-center items-center gap-5 mt-5'>
            {/* address section */}
            <CommonAddress />
                 <div className='w-[55%] '> 
                {
                    review.map((post) => <div key={post}>
                        <div className='grid grid-cols-1'>
                    <div className='flex justify-start items-start gap-5 mt-5'>
                        
                        <img src={person} alt="user" />

                        <div className='flex flex-col justify-start items-start'>
                            <span>Lorem ipsum dolor sit amet, consectetur elit.</span>
                            <div className='flex justify-start items-center gap-5 text-[#EA6A12]'>
                            <FaRegHeart />
                            <span className=''>Like</span>
                            <BiShare />
                            <span>Replay</span>
                            <span className='text-gray-500'>5min ago</span>
                            </div>
                        </div>
                    </div>
                 </div> </div>)

                }
                 </div>
            </div>
           </div>
        </div>


        
    </div>
    );
};

export default Review;