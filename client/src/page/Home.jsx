import Footer from './components/Footer'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import Service from './components/Service'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Service/>
        <Footer/>
    </div>
  )
}

export default Home