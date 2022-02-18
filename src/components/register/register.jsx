
import React,{useState} from 'react'
import './register.styles.scss';
import Logo from '../../assets/images/BizinCLOUD Logo Main.png'
import { connect } from "react-redux";
import { Grid, } from '@material-ui/core';
import { Form } from '../../controls/useForm';
import useForm from '../../formData/useForm';
import validate from '../../formData/validate';
import Input from '../../controls/Input/InputCompnent';
import '../../controls/Input/form.styles.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Imagesign from '../../assets/images/Rectangle1.png'
import Button from 'react-bootstrap/Button';
import heroImg from "../../assets/images/Pretty-grouped.png";
import {Link} from 'react-router-dom'
import Popup from "../../utilities/Popup";
import SuccessModal from './RegSuccessModal'

const initialState = {
    password: {
        value: '',
        required: true
    },
    email: {
        value: '',
        required: true
    },
    firstname: {
        value: '',
        required: true
    },
    lastname: {
        value: '',
        required: true
    },
    phonenumber: {
        value: '',
        required: true
    },
    confirmpassword: {
        value: '',
        required: true
    },
}
export const RegisterComponent = ({ RegisterUser, buttonloader, triggerLogging, isRegisterSuccessful }) => {
  const [openPopup, setOpenPopup] = useState(false)

    const phoneNumberFormatter = (value) => {
        // if (value === '') return;

        if (value.startsWith('080')) {
            return `+234${value.slice(1)}`
        }

        if (value.startsWith('070')) {
            return `+234${value.slice(1)}`
        }

        if (value.startsWith('081')) {
            return `+234${value.slice(1)}`
        }

        if (value.startsWith('090')) {
            return `+234${value.slice(1)}`
        }

        if (value.startsWith('234')) {
            return `+${value}`
        }
        return value
    }

    const { formData, errors, changeHandler, setErrors } = useForm(initialState, validate);
    const submitHandler = (e) => {
        e.preventDefault();
        let formErrors = validate(formData, true);
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            const data = new FormData();
            for (let pair of data.entries()) {

            }
            var userDetails = {
                firstname: formData.firstname.value,
                lastname: formData.lastname.value,
                email: formData.email.value,
                password: formData.password.value,
                confirmpassword: formData.confirmpassword.value,
                phonenumber: phoneNumberFormatter(formData.phonenumber.value),
            }
            localStorage.setItem("userEmail", userDetails.email)
            localStorage.setItem("userPassword", userDetails.password)
            RegisterUser(userDetails)
        }

    }
    return (
        <div className="w-full grid grid-cols-2 p-20 ">
         {/* Register Boxes */}
            <div className="p-3 border-r-2 border-gray-200">
                <div className="logo-container space-x-2 flex items-center">
          <img src={Logo} alt={"Logo"} className="w-14" />{" "}
          <span className="text-2xl text-[#4f6bfe]">
            <strong>Vendors</strong> Store{" "}
          </span>
         
        </div>
                <div className="mt-3">
                   <h1 className="text-3xl font-bold text-[#4f6bfe]">Create Account</h1>
          <small className="text-gray-300">Kindly Enter your details to create your account</small>
                </div>
                <ToastContainer />
                <Form onSubmit={submitHandler}>
                    <Grid container>
                    <div className="relative w-full">
                      <Input
                            name="firstname"
                            placeholder="Enter your First Name"
                            id="firstname"
                            value={formData.firstname.value}
                            onChange={changeHandler}
                            error={errors.firstname}
                        />
                        <span className="absolute text-[#4f6bfe] top-5 right-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg></span>
                    </div>
                    <div className="relative w-full">
                     <Input
                            name="lastname"
                            placeholder="Enter your Last Name"
                            id="lastname"
                            value={formData.lastname.value}
                            onChange={changeHandler}
                            error={errors.lastname}
                        />
                        <span className="absolute text-[#4f6bfe] top-5 right-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg></span>
                    </div>
                    <div className="relative w-full">
                          <Input
                            name="phonenumber"
                            placeholder="Enter your Phone Number"
                            id="phonenumebr"
                            value={formData.phonenumber.value}
                            onChange={changeHandler}
                            error={errors.phonenumber}
                        />
                        <span className="absolute text-[#4f6bfe] top-5 right-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg></span>
                        </div>
                  
                        <div className="relative w-full">
                            <Input
                            name="email"
                            placeholder="Enter your Email"
                            id="name"
                            value={formData.email.value}
                            onChange={changeHandler}
                            error={errors.email}
                        /> <span className="absolute text-[#4f6bfe] top-5 right-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg></span></div>
                    
                        <div className="relative w-full">
                          <Input
                            name="password"
                            placeholder="Enter your Password"
                            id="password"
                            type="password"
                            value={formData.password.value}
                            onChange={changeHandler}
                            error={errors.password}
                        />
                        <span className="absolute text-[#4f6bfe] top-5 right-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
</svg>
                        </span>
                        </div>
                      <div className="relative w-full">
                      <Input
                            name="confirmpassword"
                            placeholder="Enter your Confirm Password"
                            id="confirmpassword"
                            type="password"
                            value={formData.confirmpassword.value}
                            onChange={changeHandler}
                            error={errors.confirmpassword}
                        />
                        <span className="absolute text-[#4f6bfe] top-5 right-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
</svg></span>
                      </div>
                        
                        <div className="w-full ml-2">
                         <div className="bg-[rgb(79,107,254)] w-[92%] text-center py-2 rounded-lg text-white w-full" onClick={() => setOpenPopup(true)}>
                            <button type="submit" className="text-center focus:outline-none"> Create Account <i className={buttonloader === true ? "fa fa-spinner fa-spin" : ''}></i></button>
                        </div>
                        <div>
                            Already have an account <Link to="/user/login" className="hover:underline">Login</Link>
                        </div>
                        </div>
                    </Grid>
                </Form>
            </div>
            {/* Hero-Img */}
            <div className="image-container p-3">
                <img src={heroImg} alt="hero_img"/>
            </div>
  <Popup setOpenPopup={setOpenPopup} openPopup={openPopup}>
<SuccessModal />
  </Popup>
           
        </div>

    )
}



function mapStateToProps(state) {
    return {
        loading: state.userReducer.loader,
        user: state.userReducer.user,
        triggerLogging: state.userReducer.triggerLogging,
        buttonloader: state.utilityReducer.buttonloader,
        isRegisterSuccessful: state.utilityReducer.isRegisterSuccessful
    };
}
const mapDispatchToProps = (dispatch) => ({

    RegisterUser(payload) {
        dispatch({ type: "REGISTER_USER", payload });
    },
    SetError() {
        dispatch({ type: "API_ERRORED" });
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterComponent);

