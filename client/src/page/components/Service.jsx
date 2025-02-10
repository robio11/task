import { useState } from 'react'
import builders from '../../assets/builders.jpg'
import framer from '../../assets/framer.jpg'
import tiles from '../../assets/tiles.jpg'
import welding from '../../assets/welding.jpeg'

const Service = () => {
  const [activeComponent, setActiveComponent] = useState(true)
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex text-2xl font-semibold text-teal-950">
            Get best{' '}
            <span className="flex text-yellow-800 ml-2">services here</span>{' '}
          </h1>
          <h2 className="flex text-teal-900 text-2xl font-semibold">
            YOU CAN COUNT ON OUR SERVICE
          </h2>
        </div>
        <div className="flex">
          <div className="flex border-b-4 border-[#244F43] xl:w-[1100px] gap-1">
            <h1
              onClick={() => setActiveComponent('one')}
              className="flex bg-[#244F43] text-white text-lg font-bold py-4 w-[150px] cursor-pointer justify-center items-center rounded-t-md"
            >
              Professional
            </h1>
            <h1
              onClick={() => setActiveComponent('two')}
              className="flex bg-[#244F43] text-white text-lg font-bold py-4 w-[150px] cursor-pointer justify-center items-center rounded-t-lg"
            >
              Agency
            </h1>
          </div>
        </div>
      </div>
      {activeComponent === 'one' ? <Professional /> : <Agency />}
    </div>
  )
}

export default Service

const Professional = () => {
  return (
    <div className="grid grid-cols-2 gap-2 my-5">
      <div className="flex  w-[300px] h-[200px] justify-center items-center">
        <img className="flex grayscale-50" src={builders} alt="" />
        <h1 className="absolute mb-16 text-white font-bold text-xl">LABOUR</h1>
        <button className="absolute text-white font-bold text-md hover:text-black hover:bg-[#e9f9c1] px-4 py-1 rounded-sm cursor-pointer">
          Book Now
        </button>
      </div>
      <div className="flex w-[300px]  justify-center items-center">
        <img className="flex h-[200px] grayscale-50" src={framer} alt="" />
        <h1 className="absolute mb-16 text-white font-bold text-xl">
          FARM LABOURS
        </h1>
        <button className="absolute text-white font-bold text-md hover:text-black hover:bg-[#e9f9c1] px-4 py-1 rounded-sm cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  )
}
const Agency = () => {
  return (
    <div className="grid grid-cols-2 gap-2 my-5">
      <div className="flex  w-[300px] h-[200px] items-center justify-center">
        <img className="flex grayscale-25" src={tiles} alt="" />
        <h1 className="absolute mb-16 text-white font-bold text-xl">
          TILES | MARBLE
        </h1>
        <button className="absolute text-white font-bold text-md hover:text-black hover:bg-[#e9f9c1] px-4 py-1 rounded-sm cursor-pointer">
          Book Now
        </button>
      </div>
      <div className="flex w-[300px] h-[200px] items-center justify-center">
        <img className="flex grayscale-25" src={welding} alt="" />
        <h1 className="absolute mb-16 text-white font-bold text-xl">MISTRI</h1>
        <button className="absolute text-white font-bold text-md hover:text-black hover:bg-[#e9f9c1] px-4 py-1 rounded-sm cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  )
}
