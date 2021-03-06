import React, { useEffect, useState } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../controls/Controls";
import { useForm, Form } from '../../controls/useForm';
import { request } from '../../api/Service'
import { store } from '../../redux-store/store';
import { companyId } from '../../components/utils/constants';


const initialFValues = {
    id: 0,
    fullName: '',
    cityId: '',
    countryId: '',
    stateId: '',
    phoneNumber: '',
    address: '',
}


export default function AddLocationForm(props) {
    const { addLocation, recordForEdit, locationTypes } = props
    const [states, setState] = useState([])
    const [cities, setCity] = useState([])
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('cityId' in fieldValues)
            temp.cityId = fieldValues.cityId ? "" : "This field is required."
        if ('countryId' in fieldValues)
            temp.countryId = fieldValues.countryId !== "" ? "" : "Select a Country"
        if ('stateId' in fieldValues)
            temp.stateId = fieldValues.stateId !== "" ? "" : "Select a State"
        if ('phoneNumber' in fieldValues)
            temp.phoneNumber = fieldValues.phoneNumber ? "" : "This phoneNumber is required."
        if ('address' in fieldValues)
            temp.address = fieldValues.address ? "" : "Required"
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const handleSelectChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        validate({ [name]: value })
        if (name == 'stateId') {
            request('get', {}, `api/Admin/get-cities-dropdown/${value}`).then(data => {
                setCity(data)
            })
        } else if (name == 'countryId') {
            request('get', {}, `api/Admin/get-states-dropdown/${value}`).then(data => {
                setState(data)
            })
        }


    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            var payload={...values, firstName: values.fullName, lastName: values.fullName,companyId:companyId}
            store.dispatch({ type: "ADD_ADDRESS", payload });
        }
    }

    useEffect(() => {
        if (recordForEdit !== null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Controls.Input
                    label="Full Name*"
                    name="fullName"
                    value={values.fullName || ''}
                    onChange={handleInputChange}
                    error={errors.fullName}
                />
                <Controls.Select
                    name="countryId"
                    label="Countries*"
                    value={values.countryId || ''}
                    onChange={handleSelectChange}
                    options={JSON.parse(localStorage.getItem("countries"))}
                    error={errors.countryId}
                />
                <Controls.Select
                    name="stateId"
                    label="State*"
                    value={values.stateId || ''}
                    onChange={handleSelectChange}
                    options={states}
                    error={errors.stateId}
                />
                <Controls.Select
                    label="City*"
                    name="cityId"
                    value={values.cityId || ''}
                    onChange={handleSelectChange}
                    options={cities}
                    error={errors.cityId}
                />
                <Controls.Input
                    label="contact Phone Number*"
                    name="phoneNumber"
                    value={values.phoneNumber || ''}
                    onChange={handleInputChange}
                    error={errors.phoneNumber}
                />
                <Controls.Input
                    label="Address*"
                    name="address"
                    value={values.address || ''}
                    onChange={handleInputChange}
                    error={errors.address}
                />
            </Grid>
            <div>
                <Controls.Button
                    type="submit"
                    text="Submit" />
            </div>
        </Form>
    )
}
