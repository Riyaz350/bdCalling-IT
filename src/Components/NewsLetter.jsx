import pic from '../assets/NewsLetter/pic.png'
const NewsLetter = () => {
    return (
        <div className='max-w-7xl mx-auto my-40 grid lg:grid-cols-2 items-center'>
            <img className='w-1/2  mx-auto' src={pic} alt="" />
            <div className='flex flex-col gap-5 m-5 '>
                <h1 className='text-3xl md:text-6xl font-bold'>Subscribe to our <br /> Newsletter!</h1>
                <p className='text-[#006CE4] text-xl md:text-3xl'>Subscribe to our newsletter and stay <br /> updated.</p>
                <input className='w-full border-2 rounded-xl focus:border-[#006CE4] border-[#006CE4] placeholder:text-[#006CE4] placeholder:text-2xl p-5' placeholder='Your email' type="text" />
                <button className='bg-[#FFB700] rounded-xl p-5 text-2xl font-medium w-full'> Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;