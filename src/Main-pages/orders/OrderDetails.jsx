import React from 'react'
import { Link } from 'react-router-dom';
import "./orders.scss"
import "./order-details.scss"
import SideBar from '../layout/Sidebar';
import Header from '../header/Header';
import useForm from '../../formData/useForm';
import validate from '../../formData/validate';
import Input from '../../controls/Input/InputCompnent';

const OrderDetails = ({ match }) => {
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
                    <SideBar path={"/select"} />
                </div>
                <div className='orders'>
                    <i class="fas fa-arrow-left"></i> &nbsp;
                    <span style={{ color: 'black' }}></span>Order Details
                    <hr />
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>


                        6 Items
                        <br />
                        Placed on
                        <br />
                        Total ₦600,00


                        <span>
                            ORDER DELIVERED
                        </span>

                    </div>
                    <hr />
                    <span style={{ fontStyle: 'bold', fontWeight: '600', color: 'black' }}>ITEMS IN THIS ORDER</span>

                    <div className='order-details'>

                        <img
                            src={"../../assets/images/jacket.jpeg"}
                            class="img-fluid"
                            alt=""
                            height={'500px'}
                            width="100px"
                        />
                        <div className='desc'>
                            <span style={{ color: '#333333', fontStyle: 'normal', fontWeight: '500' }}>JACKET 2.0</span>
                            <br />
                            <br />
                            <span>
                                QTY 1
                            </span>
                            <br />
                            <br />
                            <br />
                            <span style={{ fontWeight: '500', color: 'black' }}>₦600,00</span>
                        </div>

                    </div>

                    <div className='payment-info'>

                        <div className='f1'>
                            <br />
                            <br />
                            <span style={{ fontWeight: '500', color: 'black' }}>PAYMENT INFORMATION</span>
                            <br />
                            <br />
                            <div className='bord'>
                                <div style={{ fontWeight: '500', color: 'black' }}>Payment Method</div>
                                <div>Cash On Delivery</div>
                            </div>

                        </div>

                        <div>
                        </div>



                        <div className='f2'>
                            <br />
                            <br />
                            <span style={{ fontWeight: '500', color: 'black' }}>PAYMENT INFORMATION</span>
                            <br />
                            <br />
                            <div className='bord'>
                                <div style={{ fontWeight: '500', color: 'black' }}>Delivery Method</div>
                                <br />
                                <div>Standard Delivery</div>

                                <br />
                                <br />
                                <div style={{ fontWeight: '500', color: 'black' }}>Shipping Address</div>
                                <br />
                                <div>Adeola Oladeinde</div>

                                <div>No, 6 Dental Center stree oke ijeun Abeokuta</div>
                            </div>

                        </div>

                        <div>
                        </div>

                    </div>





                </div>
            </div>

        </div >
    );
}


export default OrderDetails