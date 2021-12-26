import React, { useState, useEffect } from 'react'
import LocationForm from "./LocationForm";
import { Column, Row } from 'simple-flexbox';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../../utilities/useTable";
import { ToastContainer } from 'react-toastify';
import StatComponent from '../../stat-page/StatComponent';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import Controls from "../../../controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../../utilities/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from "../../../utilities/Notification";
import ConfirmDialog from "../../../utilities/ConfirmDialog";
import AddLocationForm from './AddLocationForm';
import { store } from '../../../../redux-store/store';
import PuffLoader from "react-spinners/PuffLoader";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '25%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


const headCells = [
    { id: 'locationName', label: 'Location Name' },
    { id: 'contactName', label: 'Contact Name' },
    { id: 'locationAddress', label: 'Location Address' },
    { id: 'isActive', label: 'Is Active' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export function Locations({ locations, states, countries, UpdateLocation, LoadLocations, cacNumber, AddLocation,
    DeleteLocation, locationTypes, userLocations, companyLocations }) {


    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [addOpenPopup, setAddOpenPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(store.getState().locationReducer.locations, headCells, filterFn);
    useEffect(() => {
        store.dispatch({ type: "LOAD_LOCATIONS" })
        return () => {
        }
    }, [])

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {

                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.locationName.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (Location, resetForm) => {
        if (Location.id === 0)
            AddLocation(Location)
        else
            var data = { ...Location, 'companyId': localStorage.getItem("companyId") }
        store.dispatch({ type: "UPDATE_LOCATION", payload: data });
        resetForm()
        // setRecordForEdit(null)
        setOpenPopup(false)
        setAddOpenPopup(false)
    }




    const addLocation = (location, resetForm) => {
        store.dispatch({ type: "ADD_LOCATION", payload: location });
        resetForm()
        setRecordForEdit(null)
        setAddOpenPopup(false)
        setOpenPopup(false)
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }
    const onDelete = id => {
        store.dispatch({ type: "DELETE_LOCATION", payload: id });
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
    }
    return (
        <>
            <div className="container" style={{ paddingTop: '40px', marginTop: '-5rem' }}>
                <div>
                    <Column flexGrow={1}>
                        <ToastContainer />
                        <div className="mt-4" style={{ position: "relative" }}>
                            <Controls.Input
                                // label="Search Locations by Location Name"
                                placeholder="Search Locations by Location Name"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (<InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>)
                                }}
                                onChange={handleSearch}
                            />
                        </div>
                        <Paper className={classes.pageContent}>
                            <h4> <strong> Locations </strong></h4>
                            <Toolbar>
                                <Controls.Button
                                    text="Add New"
                                    variant="outlined"
                                    startIcon={<AddIcon />}
                                    className={classes.newButton}
                                    onClick={() => { setAddOpenPopup(true); setRecordForEdit(null); }}
                                />
                            </Toolbar>
                            <TblContainer>
                                <TblHead />
                                <TableBody>
                                    {

                                        recordsAfterPagingAndSorting().map(item =>
                                        (<TableRow key={item.id}>
                                            <TableCell>{item.locationName}</TableCell>
                                            <TableCell>{item.contactName}</TableCell>
                                            <TableCell>{item.locationAddress}</TableCell>
                                            <TableCell>{item.isActive?.toString()}</TableCell>


                                            <TableCell>
                                                <Controls.ActionButton
                                                    color="primary"
                                                    onClick={() => {
                                                        openInPopup(item)
                                                    }}>
                                                    <EditOutlinedIcon fontSize="small" />
                                                </Controls.ActionButton>
                                                <Controls.ActionButton
                                                    color="secondary"
                                                    onClick={() => {
                                                        setConfirmDialog({
                                                            isOpen: true,
                                                            title: 'Are you sure to delete this record?',
                                                            subTitle: "You can't undo this operation",
                                                            onConfirm: () => { onDelete(item.id) }
                                                        })
                                                    }}>
                                                    <CloseIcon fontSize="small" />
                                                </Controls.ActionButton>
                                            </TableCell>
                                        </TableRow>)
                                        )
                                    }
                                </TableBody>
                            </TblContainer>
                            <TblPagination />
                        </Paper>
                        <Popup
                            title="Location Form"
                            openPopup={openPopup}
                            setOpenPopup={setOpenPopup}
                        >
                            <LocationForm
                                recordForEdit={recordForEdit}
                                addOrEdit={addOrEdit}
                                states={states}
                                countries={store.getState().locationReducer.countries}
                                locationTypes={store.getState().locationReducer.locationTypes} />
                        </Popup>

                        <Popup
                            title="Add Location Form"
                            openPopup={addOpenPopup}
                            setOpenPopup={setAddOpenPopup}
                        >

                            <AddLocationForm
                                recordForEdit={recordForEdit}
                                addLocation={addLocation}
                                companyLocations={store.getState().userReducer.companyLocations}
                                userLocations={store.getState().userReducer.userLocations}
                                cacNumber={store.getState().userReducer.cacNumber}
                                states={states}
                                countries={store.getState().locationReducer.countries}
                                locationTypes={store.getState().locationReducer.locationTypes} />
                        </Popup>
                        <Notification
                            notify={notify}
                            setNotify={setNotify}
                        />
                        <ConfirmDialog
                            confirmDialog={confirmDialog}
                            setConfirmDialog={setConfirmDialog}
                        />
                    </Column>
                </div>
            </div>
        </>
    )
}





function mapStateToProps(state) {
    console.log(state)
    return {
        buttonloader: state.utilityReducer.buttonloader,
        user: state.userReducer.user,
        cacNumber: state.userReducer.cacNumber,
        locations: state.locationReducer.locations,
        states: state.locationReducer.states,
        countries: state.locationReducer.countries,
        companyId: state.userReducer.companyId,
        locationTypes: state.locationReducer.locationTypes,
        userLocations: state.locationReducer.userLocations,
        companyLocations: state.locationReducer.companyLocations

    };
    console.log(state.locationReducer.locations);
}
const mapDispatchToProps = (dispatch) => ({

    UpdateLocation(payload) {
        dispatch({ type: "UPDATE_LOCATION", payload });
    },

    LoadLocations(payload) {
        dispatch({ type: "LOAD_LOCATIONS", payload });
    },
    AddLocation(payload) {
        dispatch({ type: "ADD_LOCATION", payload });
    },


    DeleteLocation(payload) {
        dispatch({ type: "DELETE_LOCATION", payload });
    },

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations);