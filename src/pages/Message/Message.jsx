import person from '../../assets/woner.png'
const Message = () => {
    return (
        
            <div className='w-full pe-5 ps-5'>
                {/* top section */}
            <div className="flex flex-col items-start justify-start gap-1 w-full  ">
                  <div className='grid grid-cols-2 gap-1 justify-center items-center w-full bg-gray-50 p-8 drop-shadow'>
                   <div className='flex justify-center items-center'>
                   <h5>Messages</h5>
                   </div>
                   
                  <div className='flex  justify-center items-center gap-3'>
                    <span className='text-2xl font-bold'>Jerry Helfer</span>
                    <img src={person}  alt="" className='w-12 '/>
                  </div>
                </div>
            </div>

                {/* lower section */}

                <div className='flex '>
                    <div className='w-[30%] bg-white flex flex-col max-h-[50vh] overflow-y-scroll'>


                        <div className='bg-white drop-shadow-sm p-3 border-spacing-1 mb-2 font-bold '>All Message</div>
        
                        <div className='flex flex-col gap-1'>
                                <div className='flex justify-start items-start gap-3 p-5 drop-shadow-md'>
                            <div><img src={person} alt="" className='w-20'/></div>
                           <div>
                           <h4 className='text-2xs font-bold'>Jerry Helfer</h4>
                           <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum veniam aspernatur voluptatem ex non ....</p>
                           </div>
                        </div>

                        {/*  */}

                        <div className='flex justify-start items-start gap-3 p-5 drop-shadow-md'>
                            <div><img src={person} alt="" className='w-20'/></div>
                           <div>
                           <h4 className='text-2xs font-bold'>Jerry Helfer</h4>
                           <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum veniam aspernatur voluptatem ex non ....</p>
                           </div>
                        </div>

                        <div className='flex justify-start items-start gap-3 p-5 drop-shadow-sm'>
                            <div><img src={person} alt="" className='w-20'/></div>
                           <div>
                           <h4 className='text-2xs font-bold'>Jerry Helfer</h4>
                           <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum veniam aspernatur voluptatem ex non ....</p>
                           </div>
                        </div>
                        <div className='flex justify-start items-start gap-3 p-5 drop-shadow-sm'>
                            <div><img src={person} alt="" className='w-20'/></div>
                           <div>
                           <h4 className='text-2xs font-bold'>Jerry Helfer</h4>
                           <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum veniam aspernatur voluptatem ex non ....</p>
                           </div>
                        </div>
                        </div>
                    </div>
                    <div className='w-[70%] bg-gray-200 flex justify-center items-center text-2xl font-bold'>Message </div>
                </div>
            </div>


       
    );
};

export default Message;