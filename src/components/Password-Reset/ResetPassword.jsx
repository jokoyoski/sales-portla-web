import React from 'react'
import heroImg from "../../assets/images/Pretty-grouped.png";
import Input from "../../controls/Input/InputCompnent";
import {Link} from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div className="grid grid-cols-2 p-20">
    <div className="border-r-2 border-gray-300">
    <div>
        <h1 className="text-[#4f6bfe] font-bold">Reset Password</h1> <small className="text-gray-400">Please enter email associated with your account <br/> We will send a <strong>verification Number</strong> for you to reset your password</small>
        </div> 
        <div className="mt-10"> 
            <Input
                  name="email"
                  placeholder="Enter your Email"
                  id="name"
                />
                <div className="mt-3 ml-2 w-full">
    <div className="w-[90%] ">
                  <button
                    className="bg-[rgb(79,107,254)] py-2 rounded-lg text-white w-full"
                    type="submit"
                  > Request Code
                    {" "}
                  </button>
                </div>
              <div className="">
                    <span>Go to </span>{" "}
                    <Link to="/user/login" className="hover:underline text-[#4f6bfe]">
                      {" "}
                      Login{" "}
                    </Link>
              </div>
</div>
        </div>
    </div> 



    <div><div className="p-3"><img src={heroImg} alt="herp_img" /></div></div>
    </div>
  )
}

export default ResetPassword