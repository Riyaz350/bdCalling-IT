import first from './../assets/Blog/1.png'
import second from './../assets/Blog/2.png'
import third from './../assets/Blog/3.png'
import user1 from './../assets/Blog/user1.png'
import user2 from './../assets/Blog/user2.png'
import user3 from './../assets/Blog/user3.png'

const Blog = () => {
    const articles = [
        {
          "img": first,
          "author": "Ys Stafen",
          "category": "Work and Travel",
          "date": "16 septembar 23",
          "content": "Embracing the Digital Nomad Lifestyle the Digital Nomad thr...",
          'user':user1
        },
        {
          "img": second,
          "author": "Aria Montague",
          "category": "Historical",
          "date": "14 septembar 23",
          "content": "Historical Journeys: Stepping Back in Time Through Travel",
          'user':user2
        },
        {
          "img": third,
          "author": "Elara Thorne",
          "category": "Sustainable Tourism",
          "date": "10 septembar 23",
          "content": "Sustainable Tourism: Preserving the Planet While Seeing It All",
          'user':user3
        }
      ]
    const featuredCard = 'shadow-2xl w-full flex flex-col justify-between gap-3 bg-white rounded-lg p-3'
    return (
        <div className='max-w-7xl mx-auto mb-10 '>
            <h1 className='text-3xl font-bold my-10'>Travel Blog</h1>
            <div className='grid md:grid-cols-3 gap-10 justify-between relative'>
                <p className='absolute top-1/2 left-5 text-xl font-bold bg-[#FFB700] p-2 px-4 w-fit rounded-full'>{"<"}</p>

                
                {articles.map((art, index)=>
                    <div key={index} className={`${featuredCard} p-3`}>
                        <img src={art.img} alt="" />
                        <div className='flex gap-5 lg:text-lg'>
                            <h2 className='text-[#FFB700]  '>{art.category}</h2>
                            <p>{art.date}</p>
                        </div>
                        <h1 className='font-bold text-xl border-b-2 pb-4 my-2'>{art.content}</h1>
                        <div className='flex items-center justify-between mb-5 flex-col lg:flex-row'>
                            <div className='flex items-center gap-2'>
                                <img src={art.user} alt="" />
                                <p className='text-lg'>{art.author}</p>
                            </div>
                            <p className='text-[#FFB700] text-lg font-medium '>Read More {">>"}</p>
                        </div>
                    </div>
                )}

            <p className='absolute top-1/2 right-5 text-xl font-bold bg-[#FFB700] p-2 px-4 w-fit rounded-full'>{""}</p>

               
            </div>
        </div>
    );
};

export default Blog;