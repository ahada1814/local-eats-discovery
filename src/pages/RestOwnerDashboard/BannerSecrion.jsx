import './profile.css'
import person from '../../assets/woner.png'

const BannerSecrion = () => {
    return (
        <div className="coverImg text-white flex justify-start  items-end ">
        <div className='bg-[#ffffffa5] w-full flex justify-start items-center gap-5 ps-8 absolute'>
        <img src={person} alt="" className='w-[100px] h-[100px] relative bottom-10'/>
        <div>
        <h3 className='text-2xl font-bold text-[#EA6A12]'>Devon Lane</h3>
        <h3 className='text-2xl font-bold text-black'>Barishal Gate The Restaurant</h3>
        </div>
        </div>
        </div>
    );
};

export default BannerSecrion;