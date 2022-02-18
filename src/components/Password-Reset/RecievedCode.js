import React, {useState} from 'react'
import heroImg from "../../assets/images/Pretty-grouped.png";
import Input from "../../controls/Input/InputCompnent";
import {Link} from 'react-router-dom'
import Popup from "../../utilities/Popup";
import PasswordModal from './PasswordModal'
const RecieveCode = () => {
  const [openPopup, setOpenPopup] = useState(false)
  return (
    <div className="grid grid-cols-2 p-20">
    <div className="border-r-2 border-gray-300">
    <div>
        <h1 className="text-[#4f6bfe] font-bold">Enter 6 Characters</h1> <small className="text-gray-400">Kindly Check your mail and enter the 6 digit code been sent.</small>
        </div> 
        <div className="mt-10"> 
        <div className="w-full">
          <Input
                  name="code"
                  className="w-full"
                  placeholder="Enter Recovery Code"
                  id="name"
                />
        </div>
          
                <div className="mt-3 ml-2 w-full">
    <div className="w-[90%] ">
                  <button
                    className="bg-[rgb(79,107,254)] py-2 rounded-lg text-white w-full"
                    type="submit" onClick={() => setOpenPopup(true)}
                  > Submit
                    {" "}
                  </button>
                </div>
              <div className="">
                    <span>Didn't get a mail </span>{" "}
                    <Link to="/user/login" className="hover:underline text-[#4f6bfe]">
                      {" "}
                      Resend Link{" "}
                    </Link>
              </div>
</div>
        </div>
    </div> 

  <Popup setOpenPopup={setOpenPopup} openPopup={openPopup}>
<PasswordModal />
  </Popup>

    <div><div className="p-3"><img src={heroImg} alt="herp_img" /></div></div>
    </div>
  )
}

export default RecieveCode