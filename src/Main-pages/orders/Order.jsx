import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./orders.scss"
import SideBar from '../layout/Sidebar';
import Header from '../header/Header';
import useForm from '../../formData/useForm';
import validate from '../../formData/validate';
import Input from '../../controls/Input/InputCompnent';

const Orders = ({ match }) => {


    var ac1 = () => {
        setActive1(true)
        setActive2(false)
    }

    var ac2 = () => {
        setActive2(true)
        setActive1(false)
    }

    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
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
        <div class="main">
            <Header />
            <div className='flex-v'>
                <div style={{ marginRight: '20px' }} className='side'>
                    <SideBar path={match.url} />
                </div>
                <div className='orders'>
                    My Orders
                    <hr />

                    <a style={{ cursor: 'pointer' }} className={`font-v ${active1 ? 'active-l' : ''}`} onClick={ac1}>OPEN ORDERS</a>

                    <a  className={`font-v ${active2 ? 'active-l' : ''}`} style={{ marginLeft: '50px',cursor:'pointer' }}  onClick={ac2}>CLOSED ORDERS</a>


                    <div className='order-list'>
                        <div style={{}}>
                            <div>45585858585858</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{
                                    color: '#207724', backgroundColor: '#E8FFE9',
                                    fontWeight: '400', width: '15%', textAlign: 'center',
                                    marginTop: '10px', display: 'flex', justifyContent: 'space-between'
                                }}>
                                    DELIVERED
                                </div>
                                <a style={{ color: '#4D69FF' }}>See More Details</a>

                            </div>


                            <div style={{ marginTop: '10px', display: 'inline-block', fontWeight: 'bold' }}>9th January , 2026</div>


                        </div>


                        <div>

                        </div>

                    </div>
                    <div className='order-list'>
                        <div style={{}}>
                            <div>45585858585858</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{
                                    color: '#207724', backgroundColor: '#E8FFE9',
                                    fontWeight: '400', width: '15%', textAlign: 'center',
                                    marginTop: '10px', display: 'flex', justifyContent: 'space-between'
                                }}>
                                    DELIVERED
                                </div>
                                <a style={{ color: '#4D69FF' }}>See More Details</a>

                            </div>


                            <div style={{ marginTop: '10px', display: 'inline-block', fontWeight: 'bold' }}>9th January , 2026</div>


                        </div>


                        <div>

                        </div>

                    </div>
                    <div className='order-list'>
                        <div style={{}}>
                            <div>45585858585858</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{
                                    color: '#207724', backgroundColor: '#E8FFE9',
                                    fontWeight: '400', width: '15%', textAlign: 'center',
                                    marginTop: '10px', display: 'flex', justifyContent: 'space-between'
                                }}>
                                    DELIVERED
                                </div>
                                <a style={{ color: '#4D69FF' }}>See More Details</a>

                            </div>


                            <div style={{ marginTop: '10px', display: 'inline-block', fontWeight: 'bold' }}>9th January , 2026</div>


                        </div>


                        <div>

                        </div>

                    </div>
                    <div className='order-list'>
                        <div style={{}}>
                            <div>45585858585858</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{
                                    color: '#207724', backgroundColor: '#E8FFE9',
                                    fontWeight: '400', width: '15%', textAlign: 'center',
                                    marginTop: '10px', display: 'flex', justifyContent: 'space-between'
                                }}>
                                    DELIVERED
                                </div>
                                <a style={{ color: '#4D69FF' }}>See More Details</a>

                            </div>


                            <div style={{ marginTop: '10px', display: 'inline-block', fontWeight: 'bold' }}>9th January , 2026</div>


                        </div>


                        <div>

                        </div>

                    </div>
                    <div className='order-list'>
                        <div style={{}}>
                            <div>45585858585858</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{
                                    color: '#207724', backgroundColor: '#E8FFE9',
                                    fontWeight: '400', width: '15%', textAlign: 'center',
                                    marginTop: '10px', display: 'flex', justifyContent: 'space-between'
                                }}>
                                    DELIVERED
                                </div>
                                <a style={{ color: '#4D69FF' }}>See More Details</a>

                            </div>


                            <div style={{ marginTop: '10px', display: 'inline-block', fontWeight: 'bold' }}>9th January , 2026</div>


                        </div>


                        <div>

                        </div>

                    </div>

                </div>
            </div>

        </div >
    );
}


export default Orders