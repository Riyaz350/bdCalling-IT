import { FaMapMarkerAlt } from "react-icons/fa";
import logo from '../assets/LOGO-white.png'
import fb from '../assets/Footer/facebook.png'
import li from '../assets/Footer/linkedIn.png'
import yt from '../assets/Footer/youtube.png'
const Footer = () => {
    return (
        <div className="bg-[#006CE4] text-white">

            <div className="max-w-7xl mx-auto p-10  pb-10 hidden lg:block">
                <div className="flex justify-between py-16 border-b-2 border-white border-opacity-50">

                    <div className="text-xl">
                        <h1 className="text-2xl my-1  mb-5 font-normal">Address</h1>
                        <p>House- 75 Ka, Main <br /> Rd, Dhaka 1216</p>
                        <p className="flex items-center gap-2"><FaMapMarkerAlt /> View on Maps</p>
                    </div >

                    <div className='flex flex-col'>
                        <h1 className="text-2xl my-1 font-normal">About Us</h1>
                        <h1 className="text-2xl my-1 font-normal">Stories</h1>
                        <h1 className="text-2xl my-1 font-normal">Blog</h1>
                        <h1 className="text-2xl my-1 font-normal">Airlines</h1>
                        <h1 className="text-2xl my-1 font-normal">Testimonials</h1>
                    </div>

                    <div className='flex flex-col'>
                        <h1 className="text-2xl my-1 font-normal">Join us</h1>
                        <h1 className="text-2xl my-1 font-normal">Terms of Service</h1>
                        <h1 className="text-2xl my-1 font-normal">Privacy Policy</h1>
                        <h1 className="text-2xl my-1 font-normal">Support</h1>
                    </div>

                    <div>
                        <h1 className="text-2xl my-1 font-normal">Join us</h1>
                        <div className="text-xl">
                            <p>+880 1234562890</p>
                            <p>+880 1234562890</p>
                            <p>+880 1234562890</p>
                            <p>info@airbook.com</p>
                        </div>
                    </div>
                </div>

            </div>


            {/* Accordion for medium devices */}
            <div className="md:flex p-20 lg:hidden border-b-2 border-white border-opacity-50">

            <div className="join join-vertical w-full md:w-1/2 mx-auto flex  ">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                    Address
                    </div>
                    <div className="collapse-content"> 
                        <p>House- 75 Ka, Main <br /> Rd, Dhaka 1216</p>
                        <p className="flex items-center gap-2"><FaMapMarkerAlt /> View on Maps</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title text-xl font-medium">
                    Pages
                    </div>
                    <div className="collapse-content"> 
                        <div className='flex flex-col'>
                            <h1 className="text-2xl my-1 font-normal">About Us</h1>
                            <h1 className="text-2xl my-1 font-normal">Stories</h1>
                            <h1 className="text-2xl my-1 font-normal">Blog</h1>
                            <h1 className="text-2xl my-1 font-normal">Airlines</h1>
                            <h1 className="text-2xl my-1 font-normal">Testimonials</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="join join-vertical w-full md:w-1/2 mx-auto flex  lg:hidden">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                    Others
                    </div>
                    <div className="collapse-content"> 
                        <div className='flex flex-col'>
                            <h1 className="text-2xl my-1 font-normal">Join us</h1>
                            <h1 className="text-2xl my-1 font-normal">Terms of Service</h1>
                            <h1 className="text-2xl my-1 font-normal">Privacy Policy</h1>
                            <h1 className="text-2xl my-1 font-normal">Support</h1>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title text-xl font-medium">
                    Contact
                    </div>
                    <div className="collapse-content"> 
                        <div className="text-xl">
                                <p>+880 1234562890</p>
                                <p>+880 1234562890</p>
                                <p>+880 1234562890</p>
                                <p>info@airbook.com</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="max-w-7xl mt-10 lg:mt-0  mx-auto pb-20 flex flex-col lg:flex-row justify-between items-center space-y-10 lg:items-end">
                <img src={logo} alt="" />
                <p>© Copyright  AIRBOOK</p>
                <div className="flex gap-16 items-center">
                    <img src={yt} alt="" />
                    <img src={fb} alt="" />
                    <img src={li} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;