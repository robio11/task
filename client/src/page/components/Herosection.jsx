import newbackground from '../../assets/newbackground.png'
import MapContainer from './MapContainer'
import { useState } from 'react'
import Marquee from 'react-fast-marquee'

const Herosection = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex  justify-center items-center">
      <div className="flex justify-between w-[85%]">
        <div className="flex flex-col w-[40%] gap-10 justify-center">
          <h1 className="flex text-4xl font-semibold font-serif text-blue-950">
            Professionals at your doorstep...
          </h1>
          <h2 className="flex text-lg text-gray-700 font-serif">
            We provide proficient and diligent professionals to assist you with
            your daily hurdles
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="flex bg-white p-1 h-10 rounded-xl shadow-xl">
                <Marquee className='flex p-1 font-semibold' >
                  <h1>Login to get your location</h1>
                </Marquee>
              </div>
              <button
                onClick={() => setOpen(!open)}
                className=" bg-[#244F43] p-2 rounded-xl text-white h-10 w-[200px] font-semibold cursor-pointer"
              >
                Current Location
              </button>
            </div>
            <div className="absolute mt-5">
              {open ? <MapContainer /> : true}
            </div>
          </div>
        </div>
        <div className="flex">
          <img className="flex " src={newbackground} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Herosection
