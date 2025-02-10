import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="flex flex-col border-t-1 border-gray-200 items-center justify-center">
      <div className="grid grid-cols-3 mt-4 w-[80%] justify-center items-center">
        <div className="flex flex-col w-[80%]">
          <img className="flex" src={logo} alt="" />
          <h1 className='flex font-medium text-xs text-wrap' >
            GOOD PROFESSIONAL CAN HELP IN GETTING THE JOB DONE AS PER THE EXACT
            REQUIREMENT OF THE CUSTOMERS AND WE WORK TO PROVIDE GOOD SERVICES
            THROUGH THAT KIND OF PROFESSIONAL.
          </h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-4' >
          <h1 className='flex text-xl font-bold text-gray-600' >Information</h1>
          <h2 className=' text-gray-700' >Privacy</h2>
          <h2 className=' text-gray-700'>Help Center</h2>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1  className='flex text-xl font-bold text-gray-600'>Contact</h1>
          <h2 className=' text-gray-700'>Jaipur, Rajasthan</h2>
          <h2 className=' text-gray-700'>support@krytons.in</h2>
          <h2 className=' text-gray-700'>+91 1414026811</h2>
        </div>
      </div>
      <div className='flex my-8 justify-center items-center' >
        <p className='flex text-md' >
          © 2023 Copyright:<a className='flex font-bold text-gray-900 text-lg ml-2' href="/"> ontimewages.com</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
