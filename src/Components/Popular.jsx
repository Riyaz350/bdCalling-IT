import biman from '../assets/Popular/biman.png'
import emirates from '../assets/Popular/emirates.png'
import malaysia from '../assets/Popular/malaysia.png'
import singapore from '../assets/Popular/singapore.png'
import turkish from '../assets/Popular/turkish.png'
import america from '../assets/Popular/america.png'
import { FaStar } from "react-icons/fa";

const Popular = () => {
    const airlines = [
        {
          "name": "Biman Bangladesh Airlines",
          "reviews": 783,
          "rating" :4,
          'img':biman
        },
        {
          "name": "Emirates",
          "reviews": 753,
          "rating" :5,
          'img':emirates
        },
        {
          "name": "Turkish Airlines",
          "reviews": 753,
          "rating" :5,
          'img':turkish
        },
        {
          "name": "Malaysia Airlines",
          "reviews": 753,
          "rating" :5,
          'img':malaysia
        },
        {
          "name": "Singapore Airlines",
          "reviews": 763,
          "rating" :5,
          'img':singapore
        },
        {
            "name": "Malaysia Airlines",
            "reviews": 753,
            "rating" :5,
            'img':malaysia
        },
        {
        "name": "Biman Bangladesh Airlines",
        "reviews": 783,
        "rating" :4,
        'img':biman
        },
        {
          "name": "American Airlines",
          "reviews": 783,
          "rating" :4,
          'img':america
        },
        {
            "name": "Emirates",
            "reviews": 753,
            "rating" :5,
            'img':emirates
        },
        {
            "name": "Biman Bangladesh Airlines",
            "reviews": 783,
            "rating" :4,
            'img':biman
        },
        {
            "name": "Malaysia Airlines",
            "reviews": 753,
            "rating" :5,
            'img':malaysia
        },
        {
            "name": "Turkish Airlines",
            "reviews": 753,
            "rating" :5,
            'img':turkish
        }


      ]
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className='text-3xl font-bold my-10'>Popular Airlines</h1>

            <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {airlines.map((flight,index)=>
                    <div key={index} className='flex items-center gap-5'>
                        <img className='w-1/4' src={flight.img} alt="" />
                        <div>
                        <h1 className='text-[#006CE4] font-bold'>{flight.name}</h1>
                        <p className='flex items-center'><FaStar className='text-[#FFB700] mr-2'/> {flight.rating} ( {flight.reviews} Reviews)</p>
                        </div>
                    </div>
                    )}
            </div>

        </div>
    );
};

export default Popular;