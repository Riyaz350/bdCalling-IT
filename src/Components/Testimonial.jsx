import first from '../assets/Testimonials/1.png'
import second from '../assets/Testimonials/2.png'
import third from '../assets/Testimonials/3.png'

import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";


const Testimonial = () => {
    return (
        <div className="my-20">
            <h1 className='text-3xl font-bold my-10 max-w-7xl mx-auto'>Testimonials</h1>
            <div className="bg-[#006CE4]">
                <div className='max-w-7xl  mx-auto py-32 flex justify-center items-center lg:justify-between flex-col gap-10 lg:gap-0 lg:flex-row'>


                    <div className=' bg-white lg:bg-transparent rounded-xl z-10 flex flex-col md:flex-row w-[70%] lg:w-fit relative'>
                        <div className='w-full lg:w-fit h-fit relative'>
                            <img  className='h-fit w-full lg:w-fit mr-5' src={third} alt="" />
                            <div className='absolute hidden lg:block bg-blue-500 top-0 w-fit text-transparent h-full bg-opacity-30'>aaaaaaaaaaaaaaaaaaa</div>
                        </div>
                        <div className='flex  lg:p-16   gap-10 lg:hidden'>
                        <div className='flex flex-col gap-8 justify-center p-10 lg:p-0'>
                                <p className='lg:mr-10'>{"Unforgettable journeys with John and Sarah! Their travel expertise turned our dreams into reality. Can't wait to explore with them again!"}</p>

                                <div className=''>
                                    <h1 className=' font-medium text-xl'>Emily</h1>
                                    <p className='text-sm'>Adventure Enthusiast</p>
                                    <p className='flex text-[#FFB700] gap-2'><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                            </div>

                            <p className='absolute bottom-0 right-0 p-14 pb-10 text-[#006CE4] text-5xl'><RiDoubleQuotesR /></p>
                        </div>
                    </div>


                    <div className='bg-white rounded-xl z-10 flex w-[70%] relative flex-col md:flex-row'>
                        <img  className=' w-full lg:w-fit mr-5' src={second} alt="" />
                        <div className='flex  lg:p-16  gap-10'>
                            <div className='flex flex-col gap-8 justify-center p-10 lg:p-0'>
                                <p className='lg:mr-10'>{"Unforgettable journeys with John and Sarah! Their travel expertise turned our dreams into reality. Can't wait to explore with them again!"}</p>

                                <div className=''>
                                    <h1 className=' font-medium text-xl'>Emily</h1>
                                    <p className='text-sm'>Adventure Enthusiast</p>
                                    <p className='flex text-[#FFB700] gap-2'><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                            </div>

                            <p className='absolute bottom-0 right-0 p-14 pb-10 text-[#006CE4] text-5xl'><RiDoubleQuotesR /></p>
                        </div>
                    </div>


                    <div className='bg-white lg:bg-transparent rounded-xl z-10 flex flex-col md:flex-row w-[70%] lg:w-fit relative'>
                        <div className='w-full lg:w-fit h-full relative'>
                            <img  className='h-full w-full lg:w-fit mr-5' src={first} alt="" />
                            <div className='absolute hidden lg:block bg-blue-500 top-0 w-fit text-transparent h-full bg-opacity-30'>aaaaaaaaaaaaaaaaaaa</div>
                        </div>                        
                        <div className='flex  lg:p-16 gap-10 lg:hidden'>
                        <div className='flex flex-col gap-8 justify-center p-10 lg:p-0'>
                                <p className='lg:mr-10'>{"Unforgettable journeys with John and Sarah! Their travel expertise turned our dreams into reality. Can't wait to explore with them again!"}</p>

                                <div className=''>
                                    <h1 className=' font-medium text-xl'>Emily</h1>
                                    <p className='text-sm'>Adventure Enthusiast</p>
                                    <p className='flex text-[#FFB700] gap-2'><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                            </div>
                            <p className='absolute bottom-0 right-0 p-14 pb-10 text-[#006CE4] text-5xl'><RiDoubleQuotesR /></p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Testimonial;