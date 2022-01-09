import React from 'react'
import { Link } from 'react-router-dom';
import "./account.scss"
import SideBar from '../layout/Sidebar';
import Header from '../header/Header';
import useForm from '../../formData/useForm';
import validate from '../../formData/validate';
import Input from '../../controls/Input/InputCompnent';

const Account = ({match}) => {
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
                <div style={{marginRight:'20px'}} className='side'>
                    <SideBar path={match.url} />
                </div>
                <div className='account'>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>Account Overview</span>

                        <hr />
                        <span style={{ color: '#777777' }}>PROFILE INFORMATION</span>
                        <div style={{ display: 'flex' }}>
                            <Input
                                label="First Name"
                                name="firstname"
                                placeholder="Enter your First Name"
                                id="firstname"
                                value={formData.firstname.value}
                                onChange={changeHandler}
                                error={errors.firstname}
                            />
                            <Input
                                label="Last Name"
                                name="firstname"
                                placeholder="Enter your First Name"
                                id="firstname"
                                value={formData.firstname.value}
                                onChange={changeHandler}
                                error={errors.firstname}
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Input
                                label="Email"
                                name="firstname"
                                placeholder="Enter your First Name"
                                id="firstname"
                                value={formData.firstname.value}
                                onChange={changeHandler}
                                error={errors.firstname}
                                readOnly
                            />
                            <Input
                                label="Phone Number"
                                name="firstname"
                                placeholder="Enter your First Name"
                                id="firstname"
                                value={formData.firstname.value}
                                onChange={changeHandler}
                                error={errors.firstname}
                            />
                        </div>
                        <hr />
                        <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent:'space-around' }}>
                            <div className='address'>
                                <div style={{ fontWeight: 'bold', margin: '10px' }}> OLADEINDE ADEOLA </div>
                                <div style={{ margin: '10px' }}>No 6 , dental center street oke ijeun Abeokutrhrhrrhrha</div>
                                <div style={{ margin: '10px' }}>07070777777</div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                                    <i

                                        class="fas fa-trash"
                                        style={{ color: 'red' }}
                                    />
                                    &nbsp;
                                    <i

                                        class="fas fa-edit"
                                    />

                                </div>

                            </div>
                            <div className='address'>
                                <div style={{ fontWeight: 'bold', margin: '10px' }}> OLADEINDE ADEOLA </div>
                                <div style={{ margin: '10px' }}>No 6 , dental center street oke ijeun Abeokutrhrhrrhrha</div>
                                <div style={{ margin: '10px' }}>07070777777</div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                                    <i

                                        class="fas fa-trash"
                                        style={{ color: 'red' }}
                                    />
                                    &nbsp;
                                    <i

                                        class="fas fa-edit"
                                    />

                                </div>

                            </div>



                            <div className='address'>
                                <div style={{ fontWeight: 'bold', margin: '10px' }}> OLADEINDE ADEOLA </div>
                                <div style={{ margin: '10px' }}>No 6 , dental center street oke ijeun Abeokutrhrhrrhrha</div>
                                <div style={{ margin: '10px' }}>07070777777</div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                                    <i

                                        class="fas fa-trash"
                                        style={{ color: 'red' }}
                                    />
                                    &nbsp;
                                    <i

                                        class="fas fa-edit"
                                    />

                                </div>

                            </div>


                            <div className='address'>
                                <div style={{ fontWeight: 'bold', margin: '10px' }}> OLADEINDE ADEOLA </div>
                                <div style={{ margin: '10px' }}>No 6 , dental center street oke ijeun Abeokutrhrhrrhrha</div>
                                <div style={{ margin: '10px' }}>07070777777</div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                                    <i

                                        class="fas fa-trash"
                                        style={{ color: 'red' }}
                                    />
                                    &nbsp;
                                    <i

                                        class="fas fa-edit"
                                    />

                                </div>

                            </div>



                        </div>
                    </div>




                </div>
            </div>

        </div >
    );
}


export default Account