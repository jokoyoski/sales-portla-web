import React, { useEffect, useState } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../../controls/Controls";
import { useForm, Form } from '../../../controls/useForm';
import { request } from '../../../../api/Service'
import { store } from '../../../../redux-store/store';


const initialFValues = {
    id: 0,
    contactName: '',
    locationName: '',
    contactPhoneNumber: '',
    locationAddress: '',
    locationTypeId: '',
    dateCreated: new Date(),
    locationAddress2: '',
    locationContactAddress: '',
    locationDescription: '',
    zipcode: '',
}

export default function AddLocationForm(props) {
    const { addOrEdit, recordForEdit, cacNumber, userType } = props
    const [states, setStates] = useState(store.getState().pickUpStationReducer.allStates);
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('locationAddress2' in fieldValues)
            temp.locationAddress2 = fieldValues.locationAddress2 ? "" : "This field is required."
           if ('zipcode' in fieldValues)
            temp.zipcode = fieldValues.zipcode ? "" : "This field is required."
        if ('city' in fieldValues)
            temp.city = fieldValues.city ? "" : "This field is required."
        if ('countryId' in fieldValues)
            temp.countryId = fieldValues.countryId !== "" ? "" : "Select a Country"
        if ('contactName' in fieldValues)
            temp.contactName = fieldValues.contactName ? "" : "This field is required."
        if ('locationName' in fieldValues)
            temp.locationName = fieldValues.locationName ? "" : "This locationName is required."
        if ('contactPhoneNumber' in fieldValues)
            temp.contactPhoneNumber = fieldValues.contactPhoneNumber ? "" : "This contactPhoneNumber is required."
        if ('locationAddress' in fieldValues)
            temp.locationAddress = fieldValues.locationAddress ? "" : "Required"
        if ('locationTypeId' in fieldValues)
            temp.locationTypeId = fieldValues.locationTypeId !== "" ? "" : "Select a Location Type"
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
        request('get', {}, `api/Admin/get-states-dropdown/${value}`).then(data => {
            console.log(data)
            setStates(data)
        })
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
            var result = { ...values, 'companyId': localStorage.getItem("companyId") }
            addOrEdit(result, resetForm);
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
                <Grid item xs={6}>
                    <Controls.Input
                        name="contactName"
                        label="Contact Name*"
                        value={values.contactName || ''}
                        onChange={handleInputChange}
                        error={errors.contactName}
                    />
                    <Controls.Input
                        label="location Name*"
                        name="locationName"
                        value={values.locationName || ''}
                        onChange={handleInputChange}
                        error={errors.locationName}
                    />
                    <Controls.Input
                        label="City*"
                        name="city"
                        value={values.city || ''}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                       <Controls.Input
                        label="Address Line 1*"
                        name="locationAddress"

                        value={values.locationAddress || ''}
                        onChange={handleInputChange}
                        error={errors.locationAddress}
                    />
                      <Controls.Input
                        label="Address Line 2" 
                        name="locationAddress2"
                        value={values.locationAddress2 || ''}
                        onChange={handleInputChange}
                        error={errors.locationAddress2}
                    />
                  

                    <Controls.Select
                        name="locationTypeId"
                        label="Location Types*"
                        value={values.locationTypeId || ''}
                        onChange={handleInputChange}
                        options={props.locationTypes}
                        error={errors.locationTypeId}
                    />
                   
              
                </Grid>
                <Grid item xs={6}>
                <Controls.Input
                        label="Zip code*"
                        name="zipcode"
                        value={values.zipcode || ''}
                        onChange={handleInputChange}
                        error={errors.zipcode}
                    />
                    <Controls.Input
                        label="contact Phone Number*"
                        name="contactPhoneNumber"
                        value={values.contactPhoneNumber || ''}
                        onChange={handleInputChange}
                        error={errors.contactPhoneNumber}
                    />
                   
                    <Controls.Select
                        name="countryId"
                        label="Countries*"
                        value={values.countryId || ''}
                        onChange={handleSelectChange}
                        options={props.countries}
                        error={errors.countryId}
                    />
                    <Controls.Select
                        name="stateId"
                        label="State"
                        value={values.stateId || ''}
                        onChange={handleInputChange}
                        options={states}
                        error={errors.stateId}
                    />
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
