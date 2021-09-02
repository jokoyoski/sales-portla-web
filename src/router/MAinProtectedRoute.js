import React, { memo } from 'react'
import { Route, Redirect } from 'react-router-dom'

const MainProtectedRoute = memo(({ component: Component, isHaveCompany: isHaveCompany, isAuthenticated: isAuthenticated, ...rest }) => {

    return (

        <Route {...rest} render={props => {
            if (!isAuthenticated) {
                return (<Redirect to={{ pathname: "/user/login", state: { from: props.location } }} />)
            }
            if (isHaveCompany) {
                return (<Component {...props} />)
                   
               
            } else {
                return (
                    <Redirect to={{ pathname: "/add-company", state: { from: props.location } }} />
                );
            }

        }} />
    )
})


const MainSalesProtectedRoute = memo(({ component: Component, isHaveCompany: isHaveCompany, isAuthenticated: isAuthenticated, ...rest }) => {

    return (

        <Route {...rest} render={props => {
            if (!isAuthenticated) {
                return (<Redirect to={{ pathname: "/user/login", state: { from: props.location } }} />)
            }
            if (isHaveCompany) {
                return (<Component {...props} />)
            } else {
                return (
                    <Redirect to={{ pathname: "/add-company", state: { from: props.location } }} />
                );
            }

        }} />
    )
})

export { MainProtectedRoute, MainSalesProtectedRoute }