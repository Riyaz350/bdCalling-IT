import first from './../assets/Featured/1.png'
import second from './../assets/Featured/2.png'
import third from './../assets/Featured/3.png'
const Featured = () => {
    const featuredCard = 'shadow-2xl w-full flex flex-col justify-between gap-3 bg-white rounded-lg p-3'
    const featuredButton ='w-fit mx-auto bg-[#FFB700] btn px-14 font-bold'
    return (
        <div className='max-w-7xl mx-auto mb-10 '>
            <h1 className='text-3xl font-bold my-10'>Featured Destinations</h1>
            <div className='grid md:grid-cols-3 gap-10 justify-between'>
                
                <div className={featuredCard}>
                    <img src={first} alt="" />
                    <h2 className='text-base lg:text-xl font-bold'>Stopover opportunity in İstanbul with Turkish Airlines</h2>
                    <button className={featuredButton}>View More</button>
                </div>
                <div className={featuredCard}>
                    <div>
                        <img src={second} alt="" />
                        <h2 className='text-base lg:text-xl font-bold'>Discover the timeless city with Touristanbul of Turkish Airlines</h2>
                    </div>
                    <button className={featuredButton}>View More</button>
                </div>
                <div className={featuredCard}>
                    <img src={third} alt="" />
                    <h2 className='text-base lg:text-xl font-bold'>the best of Abu Dhabi with exclusive Etihad Airways!</h2>
                    <button className={featuredButton}>View More</button>
                </div>
               
            </div>
        </div>
    );
};

export default Featured;