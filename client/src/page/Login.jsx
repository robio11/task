import logo from '../assets/logo.png'
import google_s from '../assets/google_s.jpg'
import { handleGoogleLogin } from '../Config'
import { useState } from 'react'

const Login = () => {
  const [error, setError] = useState('')
  return (
    <div className="flex bg-[#f4faef] w-screen h-screen justify-center">
      <div className="flex flex-col justify-center items-center gap-5 py-2">
        <div className="flex lg:w-[40%]">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col bg-[#fcfcf9] shadow-2xl h-[40%] w-[70%] rounded-xl justify-center items-center">
          <h1 className="flex text-[#244F43] text-3xl font-bold text-wrap w-[50%] mb-5 items-center justify-center">
            Hii, welcome to ontimeWages !!
          </h1>
          <h2 className="flex text-2xl font-semibold text-gray-800 border-t-1 mx-7 border-gray-300 w-full justify-center">
            Professionals at your doorstep...
          </h2>
        </div>
        <div
          onClick={() => handleGoogleLogin(setError)}
          className="flex w-[30%] cursor-pointer"
        >
          <img src={google_s} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
