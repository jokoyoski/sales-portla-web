import React from 'react'
import { Link } from 'react-router-dom';
import "./saved-items.scss"
import SideBar from '../layout/Sidebar';
import Header from '../header/Header';
import useForm from '../../formData/useForm';
import validate from '../../formData/validate';
import Input from '../../controls/Input/InputCompnent';

const SavedItems = ({ match }) => {
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
                    <SideBar path={"/saved-items"} />
                </div>
                <div className='orders'>
                    Saved Items
                    <hr />
                    <div className='flex-o'>
                        <div className='order'>
                        <i style={{color:'red'}} class="far fa-heart"></i>
                            <img
                                src={"https://digitalcontent.api.tesco.com/v2/media/ghs/1fb611a8-e3de-4b59-bf4e-3f73f4c7a82e/snapshotimagehandler_336503178.jpeg?h=540&w=540"}
                                class="img-fluid"
                                alt=""
                                height={'500px'}
                                 style={{margin:'0 auto'}}
                                width="100px"
                            />
                            <div>
                                <div style={{ fontWeight: '200', color: 'black', textAlign: 'center' }}>Ankara Stuff</div>
                                <div style={{ fontWeight: '100', color: 'black', textAlign: 'center' }}>₦600,00</div>
                            </div>

                        </div>
                        <div className='order'>
                        <i style={{color:'red'}} class="far fa-heart"></i>
                            <img
                                src={"https://digitalcontent.api.tesco.com/v2/media/ghs/1fb611a8-e3de-4b59-bf4e-3f73f4c7a82e/snapshotimagehandler_336503178.jpeg?h=540&w=540"}
                                class="img-fluid"
                                alt=""
                                height={'500px'}
                                 style={{margin:'0 auto'}}
                                width="100px"
                            />
                            <div>
                                <div style={{ fontWeight: '200', color: 'black', textAlign: 'center' }}>Ankara Stuff</div>
                                <div style={{ fontWeight: '100', color: 'black', textAlign: 'center' }}>₦600,00</div>
                            </div>

                        </div>
                        <div className='order'>
                        <i style={{color:'red'}} class="far fa-heart"></i>
                            <img
                                src={"https://digitalcontent.api.tesco.com/v2/media/ghs/1fb611a8-e3de-4b59-bf4e-3f73f4c7a82e/snapshotimagehandler_336503178.jpeg?h=540&w=540"}
                                class="img-fluid"
                                alt=""
                                height={'500px'}
                                 style={{margin:'0 auto'}}
                                width="100px"
                            />
                            <div>
                                <div style={{ fontWeight: '200', color: 'black', textAlign: 'center' }}>Ankara Stuff</div>
                                <div style={{ fontWeight: '100', color: 'black', textAlign: 'center' }}>₦600,00</div>
                            </div>

                        </div>
                        <div className='order'>
                        <i style={{color:'red'}} class="far fa-heart"></i>
                            <img
                                src={"https://digitalcontent.api.tesco.com/v2/media/ghs/1fb611a8-e3de-4b59-bf4e-3f73f4c7a82e/snapshotimagehandler_336503178.jpeg?h=540&w=540"}
                                class="img-fluid"
                                alt=""
                                height={'500px'}
                                 style={{margin:'0 auto'}}
                                width="100px"
                            />
                            <div>
                                <div style={{ fontWeight: '200', color: 'black', textAlign: 'center' }}>Ankara Stuff</div>
                                <div style={{ fontWeight: '100', color: 'black', textAlign: 'center' }}>₦600,00</div>
                            </div>

                        </div>
                        <div className='order'>
                        <i style={{color:'red'}} class="far fa-heart"></i>
                            <img
                                src={"https://digitalcontent.api.tesco.com/v2/media/ghs/1fb611a8-e3de-4b59-bf4e-3f73f4c7a82e/snapshotimagehandler_336503178.jpeg?h=540&w=540"}
                                class="img-fluid"
                                alt=""
                                height={'500px'}
                                 style={{margin:'0 auto'}}
                                width="100px"
                            />
                            <div>
                                <div style={{ fontWeight: '200', color: 'black', textAlign: 'center' }}>Ankara Stuff</div>
                                <div style={{ fontWeight: '100', color: 'black', textAlign: 'center' }}>₦600,00</div>
                            </div>

                        </div>
                        <div className='order'>
                        <i style={{color:'red'}} class="far fa-heart"></i>
                            <img
                                src={"https://digitalcontent.api.tesco.com/v2/media/ghs/1fb611a8-e3de-4b59-bf4e-3f73f4c7a82e/snapshotimagehandler_336503178.jpeg?h=540&w=540"}
                                class="img-fluid"
                                alt=""
                                height={'500px'}
                                 style={{margin:'0 auto'}}
                                width="100px"
                            />
                            <div>
                                <div style={{ fontWeight: '200', color: 'black', textAlign: 'center' }}>Ankara Stuff</div>
                                <div style={{ fontWeight: '100', color: 'black', textAlign: 'center' }}>₦600,00</div>
                            </div>

                        </div>
                        <div className='order'>
                        <i style={{color:'red'}} class="far fa-heart"></i>
                            <img
                                src={"https://digitalcontent.api.tesco.com/v2/media/ghs/1fb611a8-e3de-4b59-bf4e-3f73f4c7a82e/snapshotimagehandler_336503178.jpeg?h=540&w=540"}
                                class="img-fluid"
                                alt=""
                                height={'500px'}
                                 style={{margin:'0 auto'}}
                                width="100px"
                            />
                            <div>
                                <div style={{ fontWeight: '200', color: 'black', textAlign: 'center' }}>Ankara Stuff</div>
                                <div style={{ fontWeight: '100', color: 'black', textAlign: 'center' }}>₦600,00</div>
                            </div>

                        </div>
                        <div className='order'>
                        <i style={{color:'red'}} class="far fa-heart"></i>
                            <img
                                src={"https://digitalcontent.api.tesco.com/v2/media/ghs/1fb611a8-e3de-4b59-bf4e-3f73f4c7a82e/snapshotimagehandler_336503178.jpeg?h=540&w=540"}
                                class="img-fluid"
                                alt=""
                                height={'500px'}
                                 style={{margin:'0 auto'}}
                                width="100px"
                            />
                            <div>
                                <div style={{ fontWeight: '200', color: 'black', textAlign: 'center' }}>Ankara Stuff</div>
                                <div style={{ fontWeight: '100', color: 'black', textAlign: 'center' }}>₦600,00</div>
                            </div>

                        </div>
                        <div className='order'>
                        <i style={{color:'red'}} class="far fa-heart"></i>
                            <img
                                src={"https://digitalcontent.api.tesco.com/v2/media/ghs/1fb611a8-e3de-4b59-bf4e-3f73f4c7a82e/snapshotimagehandler_336503178.jpeg?h=540&w=540"}
                                class="img-fluid"
                                alt=""
                                height={'500px'}
                                 style={{margin:'0 auto'}}
                                width="100px"
                            />
                            <div>
                                <div style={{ fontWeight: '200', color: 'black', textAlign: 'center' }}>Ankara Stuff</div>
                                <div style={{ fontWeight: '100', color: 'black', textAlign: 'center' }}>₦600,00</div>
                            </div>

                        </div>
                        <div className='order'>
                        <i style={{color:'red'}} class="far fa-heart"></i>
                            <img
                                src={"https://digitalcontent.api.tesco.com/v2/media/ghs/1fb611a8-e3de-4b59-bf4e-3f73f4c7a82e/snapshotimagehandler_336503178.jpeg?h=540&w=540"}
                                class="img-fluid"
                                alt=""
                                height={'500px'}
                                 style={{margin:'0 auto'}}
                                width="100px"
                            />
                            <div>
                                <div style={{ fontWeight: '200', color: 'black', textAlign: 'center' }}>Ankara Stuff</div>
                                <div style={{ fontWeight: '100', color: 'black', textAlign: 'center' }}>₦600,00</div>
                            </div>

                        </div>
                        <div className='order'>
                        <i  style={{color:'red',width:'20px'}} class="far fa-heart"></i>
                            <img
                                src={"https://digitalcontent.api.tesco.com/v2/media/ghs/1fb611a8-e3de-4b59-bf4e-3f73f4c7a82e/snapshotimagehandler_336503178.jpeg?h=540&w=540"}
                                class="img-fluid"
                                alt=""
                                height={'500px'}
                                 style={{margin:'0 auto'}}
                                width="100px"
                            />
                            <div>
                                <div style={{ fontWeight: '200', color: 'black', textAlign: 'center' }}>Ankara Stuff</div>
                                <div style={{ fontWeight: '100', color: 'black', textAlign: 'center' }}>₦600,00</div>
                            </div>

                        </div>

                      


                    </div>





                </div>
            </div>

        </div >
    );
}


export default SavedItems