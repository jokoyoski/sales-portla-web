
import './login.styles.scss';
import Logo from '../../assets/images/BizinCLOUD Logo Main.png'
import { connect } from "react-redux";
import React, { Component } from 'react'
import { ReactDOM } from 'react';
import { Grid, } from '@material-ui/core';
import { Form } from '../../controls/useForm';
import useForm from '../../formData/useForm';
import validate from '../../formData/validate';
import Input from '../../controls/Input/InputCompnent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../controls/Input/form.styles.scss';
import Imagesign from '../../assets/images/Rectangle1.png'
import Button from 'react-bootstrap/Button';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePasswordToggle from "./usePasswordToggle";





const initialState = {
    passwords: {
        value: '',
        required: true
    },
    email: {
        value: '',
        required: true
    },
}


export const LoginPageComponent = ({ LoginUser, triggerLogging, loginbuttonloader }) => {

    const eye = <FontAwesomeIcon icon={faEye} />;
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();




    const { formData, errors, changeHandler, setErrors } = useForm(initialState, validate);
    const submitHandler = (e) => {
        e.preventDefault();

        var userDetails = {
            email: formData.email.value,
            password: formData.passwords.value
        }
        LoginUser(userDetails)
    }




    return (
        <div className="container-fluid login-continer m-0 p-0">
            <div className="row">
                <div className="col-md-6 m-0 p-0 first-box"
                    style={{ backgroundImage: `url(${Imagesign})`, backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
                >
                </div>


                <div className="col-md-6 col-sm-12 m-0 p-0">
                    <div className="text-center mt-5">
                        <img src={Logo} alt={"Logo"} width="100px" />
                        <h4 style={{ weight: "700" }}> <strong>Welcome Back</strong></h4>
                        <p className="text-primary">Enter your Login details</p>
                    </div>
                    <ToastContainer />
                    <Form onSubmit={submitHandler}>
                        <Grid container>
                            <Input
                                label="Email*"
                                name="email"
                                placeholder="Enter your Email"
                                id="name"
                                value={formData.email.value}
                                onChange={changeHandler}
                                error={errors.email}
                            />
                            <div className="w-100" style={{ position: "relative" }}>
                                <Input
                                    label="Password*"
                                    name="passwords"
                                    placeholder="Enter your Password"
                                    className="text-primary"
                                    id="password"
                                    type={PasswordInputType}
                                    value={formData.passwords.value}
                                    onChange={changeHandler}
                                    error={errors.passwords}
                                />
                                <span
                                    className="password-toggle-icon"
                                    style={{
                                        position: "absolute",
                                        bottom: "1rem",
                                        right: "4rem",
                                        cursor: "pointer",
                                    }}
                                >
                                    {ToggleIcon}
                                </span>
                            </div>


                            <div className="text-center container justify-content-center align-items-center row mt-3 mb-3">
                                <Button className="" type="submit"> Sign in <i className={loginbuttonloader === true ? "fa fa-spinner fa-spin" : ''}></i></Button>
                            </div>
                            <div className="row container-fluid">
                                <div className="col">
                                    <div className="d-flex justify-content-start">
                                        Dont have an account <a href="/user/register"> Sign Up </a>
                                    </div>
                                </div>

                            </div>
                        </Grid>
                    </Form>

                </div>
            </div>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        loading: state.userReducer.loader,
        user: state.userReducer.user,
        triggerLogging: state.userReducer.triggerLogging,
        loginbuttonloader: state.utilityReducer.loginbuttonloader
    };
}
const mapDispatchToProps = (dispatch) => ({

    LoginUser(payload) {
        dispatch({ type: "LOGIN_USER", payload });
    },
    SetError() {
        dispatch({ type: "API_ERRORED" });
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPageComponent);



