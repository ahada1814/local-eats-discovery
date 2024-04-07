import CommonAddress from './CommonAddress';
import CommonBannar from './CommonBannar';
import food from '../../assets/trending image 1.png'

const RestaurantDetalis = () => {
    const foods = [1,2,3,4,5,6]
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
                     <h5 className='text-3xl font-bold mb-3'>Trending Orders</h5>
                     <div className='grid grid-cols-3 gap-5'>
                     {
                        foods.map((f) =><div key={f} className='drop-shadow-2xl'> 
                            <div className='flex justify-center items-center gap-4 bg-white py-2 px-2 rounded-md'>
                        <div className='flex flex-col justify-start items-start'>
                            <h3 className='text-xl font-semibold'>Italian Salad</h3>
                            <p className='mt-2 text-gray-600'>4 persons</p>
                            <p className='mt-2 text-[#EA6A12] font-semibold'>$7.49</p>
                        </div>
                        <div>
                            <img src={food} alt="" className='w-[70px]' />
                        </div>
                     </div>
                         </div>)
                     }
                     </div>
                     </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default RestaurantDetalis;

