
import './App.css'
import Banner from './Components/Banner'
import Blog from './Components/Blog'
import Deals from './Components/Deals'
import Featured from './Components/Featured'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import NewsLetter from './Components/NewsLetter'
import Popular from './Components/Popular'
import Testimonial from './Components/Testimonial'

function App() {

  return (
    <div className=''>
      <div 
        style={{
        background: `url('https://i.ibb.co/LNjFb71/Rectangle-2-3.png')`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',}}>
        <Navbar/>
        <Banner/>
      </div>

      <Featured/>
      <Deals/>
      <Popular/>
      <Testimonial/>
      <Blog/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App
