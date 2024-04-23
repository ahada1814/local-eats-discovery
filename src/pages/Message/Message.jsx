import { useContext, useState } from 'react';
// import { AuthContext } from '../../providers/AuthProviders/AuthProviders';
import SearchUser from './SearchUser';
import { UserContext } from '../../providers/UserContextProvider';
import BodyText from './BodyText';
import avater from '../../assets/person.png'
import { IoVideocam,IoCall } from "react-icons/io5";
import { MdInfo } from "react-icons/md";
import { MdStars } from "react-icons/md";



import Input from './Input';
import Chats from './Chats';
const Message = () => {
    const { currentUser} = useContext(UserContext);
    const [user, setUser] = useState([]);
 
    console.log(user);
    const handelUid = (uid) => { 
        setUser(uid)
    }

    // CombineId
    const combinedId =
            currentUser.uid > user.uid
              ? currentUser.uid + user.uid
              : user.uid + currentUser.uid;
   
    return (
        
            <div className='w-full pe-5 ps-5'>
                {/* top section */}
            <div className="flex flex-col items-start justify-start gap-1 w-full  ">
                  <div className='grid grid-cols-2 gap-1 justify-center items-center w-full bg-gray-50 p-4 drop-shadow'>
                   <div className='flex justify-start items-start'>
                   <div className='flex justify-center items-start gap-2 '>
                   <img src={currentUser?.photoURL} alt=""  className='rounded-full w-12'/>
                   <h5 className='text-2xl font-bold'>{currentUser?.displayName}</h5>
                   
                   </div>
                   </div>
                   
                  <div className='flex  justify-end items-center gap-3'>
                    <div>
                    <span className='text-xl font-bold'>{user?.displayName} </span>
                    {user?.displayName && <div className='text-sm flex justify-center items-center gap-2'>
                        <span>Woner</span>
                         <span className='text-sm text-blue-500'><MdStars /></span>
                    </div> }
                    
                    </div>
                    <img src={user?.photoURL ? user?.photoURL : avater}  alt="" className='w-12 rounded-full ring-2 hover:ring-4 duration-100'/>
                    <div className='flex justify-center items-center gap-2 text-2xl text-blue-500'>
                    <div><IoCall /></div>
                    <div><IoVideocam /></div>
                    <div><MdInfo /></div>
                    </div>
                  </div>
                </div>
            </div>

      {/* lower section */}

                <div className='flex '>
                    <div className='w-[30%] bg-white flex flex-col max-h-[50vh] overflow-y-scroll'>
             
                    <SearchUser />

                        <div className='bg-white drop-shadow-sm p-3 border-spacing-1 mb-2 font-bold '>All Message</div>
                        
                        <Chats handelUid={handelUid}  combinedId={combinedId}/>
                        
                    </div>
                    <div className='flex flex-col justify-end items-end w-full'>
                    <div className='h-[90%] w-full'><BodyText user={user}/></div>
                    <div className='h-[10%] w-full'><Input user={user}/></div>
                    </div>
                </div>
            </div>


       
    );
};

export default Message;
