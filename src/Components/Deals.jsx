import first from './../assets/Deals/1.png'
import second from './../assets/Deals/2.png'
import third from './../assets/Deals/3.png'
const Deals = () => {
    return (
        <div className='max-w-7xl mx-auto my-20 '>
            <h1 className='text-3xl font-bold my-10'>Deals and Offers</h1>
            <div className='lg:flex gap-5 space-y-10 lg:space-y-0 p-10 '>

                <div className='flex items-center shadow-xl rounded-lg'>
                    <img src={first} alt="" />
                    <div className='p-5 pr-10'>
                        <p className='font-bold'>With bkash payment only</p>
                        <p className='font-bold text-lg text-[#006CE4] leading-tight'>up to 14% discount on the base fare of domestic flights</p>
                    </div>
                </div>
                <div className='flex items-center shadow-xl rounded-lg'>
                    <img src={second} alt="" />
                    <div className='p-5 pr-10'>
                        <p className='font-bold'>With bkash payment only</p>
                        <p className='font-bold text-lg text-[#006CE4] leading-tight'>up to 14% discount on the base fare of domestic flights</p>
                    </div>
                </div>
                <div className='flex items-center shadow-xl rounded-lg'>
                    <img src={third} alt="" />
                    <div className='p-5 pr-10'>
                        <p className='font-bold'>With bkash payment only</p>
                        <p className='font-bold text-lg text-[#006CE4] leading-tight'>up to 14% discount on the base fare of domestic flights</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Deals;