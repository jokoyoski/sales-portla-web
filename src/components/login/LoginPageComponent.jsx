import "./login.styles.scss";
import Logo from "../../assets/images/BizinCLOUD Logo Main.png";
import { connect } from "react-redux";
import React, { Component } from "react";
import { ReactDOM } from "react";
import { Grid } from "@material-ui/core";
import { Form } from "../../controls/useForm";
import useForm from "../../formData/useForm";
import validate from "../../formData/validate";
import Input from "../../controls/Input/InputCompnent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../controls/Input/form.styles.scss";
import Imagesign from "../../assets/images/Rectangle1.png";
import { cacNumber } from "../utils/constants";
import Button from "react-bootstrap/Button";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePasswordToggle from "./usePasswordToggle";
import heroImg from "../../assets/images/Pretty-grouped.png";
import { Link } from "react-router-dom";

const initialState = {
  passwords: {
    value: "",
    required: true,
  },
  email: {
    value: "",
    required: true,
  },
};

export const LoginPageComponent = ({
  LoginUser,
  triggerLogging,
  loginbuttonloader,
}) => {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  const { formData, errors, changeHandler, setErrors } = useForm(
    initialState,
    validate
  );
  const submitHandler = (e) => {
    e.preventDefault();

    const userDetails = {
      email: formData.email.value,
      password: formData.passwords.value,
      cacNumber: cacNumber,
    };
    LoginUser(userDetails);
  };

  return (
    // <div className="sm:grid sm:grid-cols-2 bg-white login-continer  p-10 lg:gap-5 md:items-center">
    //   <div className="md:border-r-2 md:border-gray-200">
    //     <div className="logo-container space-x-2 flex items-center">
    //       <img src={Logo} alt={"Logo"} className="w-14" />{" "}
    //       <span className="text-2xl text-[#4f6bfe]">
    //         <strong>Vendors</strong> Store{" "}
    //       </span>
    //     </div>
    //     <div className="mt-3">
    //       <h1 className="text-[#4f6bfe] font-bold">Welcome Back</h1>
    //       <small className="text-gray-400">
    //         continue with unbeatable fun shopping at{" "}
    //         <strong>Vendor'sStore</strong>
    //       </small>
    //     </div>
    //     <div>
    //       <div className="mt-5 ml-2">
    //         <p className="text-primary">Enter your Login details</p>
    //       </div>
    //       <ToastContainer />
    //       <Form onSubmit={submitHandler}>
    //         <Grid container>
    //           <div className="w-full relative">
    //             <Input
    //               name="email"
    //               placeholder="Enter your Email"
    //               id="name"
    //               value={formData.email.value}
    //               onChange={changeHandler}
    //               error={errors.email}
    //             />
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               class="h-5 w-5 absolute top-5 right-20"
    //               viewBox="0 0 20 20"
    //               fill="#4f6bfe"
    //             >
    //               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    //               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    //             </svg>
    <>
      {/* Vendors Logo */}
      <div className="bg-white md:overflow-hidden lg:h-screen sm:h-full">
        <div className="logo-container  space-x-2 flex items-center lg:px-20 md:px-14 sm:px-10  py-3 xm:px-5">
          <img src={Logo} alt={"Logo"} className="sm:w-14 w-[2rem]" />{" "}
          <span className="sm:text-2xl text-lg text-[#4f6bfe]">
            <strong>Vendors</strong> Store{" "}
          </span>
        </div>
        {/* End Vendor's Logo */}
        <div className=" sm:grid sm:grid-cols-2 flex flex-col-reverse justify-center login-continer md:h-screen lg:px-20 md:px-14 sm:px-10 sm:py-0 xm:p-5">
          <div className="sm:border-r-2 sm:border-gray-200 mx-3 mt-3">
            <div className="xm:text-center">
              <h1 className="text-[#4f6bfe] font-bold">Welcome Back</h1>
              <small className="text-gray-400 text-lg">
                continue with unbeatable fun shopping at
                <span className="font-bold"> Vendor's Store</span>
              </small>
            </div>
            <div>
              <div className="mt-5 ml-2">
                <p className="text-primary">Enter your Login details</p>
              </div>
              <ToastContainer />
              <Form onSubmit={submitHandler}>
                <Grid container>
                  <div className="w-full relative">
                    <Input
                      name="email"
                      placeholder="Enter your Email"
                      id="name"
                      value={formData.email.value}
                      onChange={changeHandler}
                      error={errors.email}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 absolute top-5 right-20"
                      viewBox="0 0 20 20"
                      fill="#4f6bfe"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
              <div className="w-100 p-0 m-0" style={{ position: "relative" }}>
                <Input
                  name="passwords"
                  placeholder="Enter your Password"
                  className="text-primary p-0 m-0"
                  id="password"
                  type={PasswordInputType}
                  value={formData.passwords.value}
                  onChange={changeHandler}
                  error={errors.passwords}
                />

                <span
                  className="password-toggle-icon text-[#4f6bfe]"
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "5rem",
                    cursor: "pointer",
                  }}
                >
                  {ToggleIcon}
                </span>
                <small className="ml-2">
                  {" "}
                  <span className="text-gray-300">Forgot Password? </span>{" "}
                  <span className="font-bold text-[#4f6bfe] hover:underline cursor-pointer">
                    ResetPassword
                  </span>
                </small>
              </div>
              <div className="mt-5 ml-2 w-full">
                <div className="w-[90%] ">
                  <button
                    className="bg-[rgb(103,126,240)] border-none focus:outline-none font-semibold py-2 rounded-lg text-white w-full"
                    type="submit"
                  >
                    {" "}
                    Sign in{" "}
                    <i
                      className={
                        loginbuttonloader === true
                          ? "fa fa-spinner fa-spin"
                          : ""
                      }
                    ></i>
                  </button>
                </div>
                <div className="">
                  <span>Dont have an account </span>{" "}
                  <Link
                    to="/user/register"
                    className="hover:underline text-[#4f6bfe]"
                  >
                    {" "}
                    Sign Up{" "}
                  </Link>
                </div>
              </div>
            </Grid>
          </Form>
        </div>
      </div>

      {/* <div className="">
        <div>
          <img src={heroImg} alt="hero_img" />
                  <div
                    className="w-100 p-0 m-0"
                    style={{ position: "relative" }}
                  >
                    <Input
                      name="passwords"
                      placeholder="Enter your Password"
                      className="text-primary p-0 m-0"
                      id="password"
                      type={PasswordInputType}
                      value={formData.passwords.value}
                      onChange={changeHandler}
                      error={errors.passwords}
                    />

                    <span
                      className="password-toggle-icon text-[#4f6bfe]"
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "5rem",
                        cursor: "pointer",
                      }}
                    >
                      {ToggleIcon}
                    </span>
                    <small className="ml-2">
                      {" "}
                      <span className="text-gray-300">
                        Forgot Password?{" "}
                      </span>{" "}
                      <span className="font-bold text-[#4f6bfe] hover:underline cursor-pointer">
                        ResetPassword
                      </span>
                    </small>
                  </div>
                  <div className="mt-5 ml-2 w-full">
                    <div className="w-[90%] ">
                      <button
                        className="bg-[rgb(103,126,240)] border-none focus:outline-none font-semibold py-2 rounded-lg text-white w-full"
                        type="submit"
                      >
                        {" "}
                        Sign in{" "}
                        <i
                          className={
                            loginbuttonloader === true
                              ? "fa fa-spinner fa-spin"
                              : ""
                          }
                        ></i>
                      </button>
                    </div>
                    <div className="">
                      <span>Dont have an account </span>{" "}
                      <Link
                        to="/user/register"
                        className="hover:underline text-[#4f6bfe]"
                      >
                        {" "}
                        Sign Up{" "}
                      </Link>
                    </div>
                  </div>
                </Grid>
          </Form>
              </div> */}

              {/* Second Starts Here */}
          <div className="sm:px-3 sm:pb-5  sm:bg-transparent bg-[#E0F9FE] rounded-2xl">
            <div>
              <img src={heroImg} alt="hero_img" />
            </div>
          </div>
          {/* End Second Here */}
          </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    loading: state.userReducerSales.loader,
    user: state.userReducerSales.user,
    triggerLogging: state.userReducerSales.triggerLogging,
    loginbuttonloader: state.utilityReducerSales.loginbuttonloader,
  };
}
const mapDispatchToProps = (dispatch) => ({
  LoginUser(payload) {
    dispatch({ type: "LOGIN_USER", payload });
  },
  SetError() {
    dispatch({ type: "API_ERRORED" });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);
