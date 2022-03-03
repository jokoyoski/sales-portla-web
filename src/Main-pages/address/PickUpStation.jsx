import React, { useEffect, useState } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../controls/Controls";
import { useForm, Form } from '../../controls/useForm';
import { request } from '../../api/Service'
import { store } from '../../redux-store/store';
import { companyId } from "../../../src/components/utils/constants";


const initialFValues = {
    id: 0,
    fullName: '',
    cityId: '',
    countryId: '',
    stateId: '',
    phoneNumber: '',
    address: '',
}


export default function PickUpStation({ statesV }) {
    //  const { addLocation, recordForEdit, locationTypes } = props
    const [states, setState] = useState(statesV)
    const [cities, setCity] = useState([])
    const [pickUpStations, setPickUpStations] = useState([])


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

    var updated_location = [];
    const handleSelectChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        validate({ [name]: value })
        if (name == 'stateId') {
            request('get', {}, `api/Admin/get-Locations/${companyId}`).then(data => {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].stateId == value) {
                        updated_location.push(data[i]);
                    }
                }
                setPickUpStations(updated_location)
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
            var payload = { ...values, firstName: values.fullName, lastName: values.fullName }
            store.dispatch({ type: "GET_PICK_UP_STATION", payload });
        }
    }

    useEffect(() => {

    }, [])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>

                <Controls.Select
                    name="stateId"
                    label="State*"
                    value={values.stateId || ''}
                    onChange={handleSelectChange}
                    options={states}
                    error={errors.stateId}
                />
            </Grid>
            <div>
                <Controls.Button
                    type="submit"
                    text="Submit" />
            </div>
            <br />
            <br />
            <br />


            {
                pickUpStations.length > 0 ?
                    pickUpStations.map(add => {
                        return <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    value={add.id}
                                    onChange={() => localStorage.setItem("pick_up", add.id)}
                                    name="flexRadioDefault77"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1"> <strong>{add.locationName}</strong><br />

                                </label>
                            </div>
                        </div>
                    }) : "No Pick Up Station Close"
            }
        </Form>
    )
}
