import logo from '../../assets/logo.png'
import enhi from '../../assets/enhi.png'
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  
  return (
    <div className=" border-b-1 border-gray-300 bg-white">
      <div className="flex mx-auto max-w-[98%] justify-between items-center h-16">
        <div className="flex w-32 h-14 cursor-pointer">
          <a href="/">
            <img className="flex w-[100%]" src={logo} alt="" />
          </a>
        </div>
        <div className="flex justify-between">
          <ul className="flex justify-between gap-8 font-semibold text-xl">
            <li className="flex hover:bg-[#244F43] hover:text-white p-2">
              <a href="/">Home</a>
            </li>
            <li className="flex hover:bg-[#244F43] hover:text-white p-2">
              <a href="/">Services</a>
            </li>
            <li className="flex hover:bg-[#244F43] hover:text-white p-2">
              <a href="/">Booking</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex items-center justify-center">
            <img className="flex w-10 h-10" src={enhi} alt="" />
            <select
              id="lang"
              className=" outline-0 cursor-pointer hover:cursor-pointer font-semibold text-lg"
            >
              <option className="flex hover:bg-[#244F43]" value="eng">
                English
              </option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
          <div
            onClick={() => navigate('/login')}
            className="flex w-20 text-lg text-white items-center font-semibold justify-center rounded-2xl bg-[#244F43] px-3 py-2 cursor-pointer"
          >
            <button className="flex cursor-pointer">Login</button>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Navbar
