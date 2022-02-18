import React from 'react'
import resetImage from '../../assets/images/Password-Illustration.svg'
import {Link} from 'react-router-dom'

const PasswordModal = () => {
  return (
    <div className="px-10"> 
    <div className="text-center"><h2 className="text-[rgb(79,107,254)] font-medium">Congratulations</h2> <p className="text-gray-400">Password Reset Successful</p></div>
    <div className="flex justify-center w-full"><img src={resetImage} className="w-56"/></div>
    <div className="mt-4 w-full flex justify-center">
    <Link to="/user/login" className="bg-green-300 flex space-x-2 items-center justify-center p-3 w-full  rounded-lg text-green-700"> <span>Continue</span>  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg></Link>
</div>
    </div>
  )
}

export default PasswordModal