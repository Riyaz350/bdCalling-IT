import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const Banner = () => {
    const radioClass = "btn py-2 hover:bg-[#006CE4] hover:text-white bg-[#EBF0F5]  shadow-none hover:shadow-none border-0 hover:border-0"
    const stationClass = "border-2 border-black border-opacity-40 w-full rounded-lg flex items-center w-fit p-2"
    return (
        <div className="max-w-7xl mx-auto pb-52 my-20">
            <h1 className="text-5xl text-white font-normal p-10 mt-10">Welcome to <span className="text-[#006CE4] font-bold">AirBook</span></h1>

            <div className="bg-white rounded-xl p-10 ">
                <div className="flex flex-col gap-5 lg:gap-0 md:flex-row justify-between items-center">
                    <div>
                        <fieldset className="flex gap-5">

                            <div className={radioClass}>
                            <input readOnly id="draft" className="btnpeer/draft" type="radio" name="status" checked />
                            <label htmlFor="draft" className=" peer-checked/draft:text-sky-500">Draft</label>
                            </div>

                            <div className={radioClass}>
                            <input readOnly id="published" className="peer/published" type="radio" name="status" />
                            <label htmlFor="published" className="peer-checked/published:text-sky-500">Published</label>
                            </div>

                        </fieldset>                    
                    </div>

                    <div className="flex">
                        
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1 text-[#006CE4]">1 Traveller <FaChevronDown /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1 text-[#006CE4]">Economy <FaChevronDown /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>

                    </div>

                </div>


                <div className=" my-5">

                    <div className=" grid grid-cols-1 justify-between gap-5 md:grid-cols-2 lg:flex ">

                        <div className={stationClass}>
                            <h1 className="border-r-2 font-medium text-lg border-black border-opacity-40 p-3">DAC</h1>
                            <div className="px-1">
                                <p className="font-medium text-lg">Dhaka</p>
                                <p className="text-xs">Hazrat Shahjalal Internatio</p>
                            </div>
                        </div>

                        <div className={stationClass}>
                            <h1 className="border-r-2 font-medium text-lg border-black border-opacity-40 p-3">Cxb</h1>
                            <div className="px-1">
                                <p className="font-medium text-lg">Cox’s Bazar</p>
                                <p className="text-xs">Cox’s Bazar international</p>
                            </div>
                        </div>

                        <div className={stationClass}>
                            <h1 className="border-r-2 font-medium text-lg border-black border-opacity-40 p-3">03</h1>
                            <div className="px-1">
                                <p className="font-medium text-lg">octobee</p>
                                <p className="text-xs">tuesday, 2023</p>
                            </div>
                        </div>

                        <div className={stationClass}>
                            <h1 className="border-r-2 font-medium text-lg border-black border-opacity-40 p-3">05</h1>
                            <div className="px-1">
                                <p className="font-medium text-lg">october</p>
                                <p className="text-xs">tuesday, 2023</p>
                            </div>
                        </div>

                        <p className="bg-[#FFB700] w-fit px-5 py-3 flex items-center rounded-lg text-white text-3xl font-bold"><CiSearch /></p>
                    </div>
                    
                </div>

            </div>


                
        </div>
    );
};

export default Banner;