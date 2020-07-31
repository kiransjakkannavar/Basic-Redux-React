import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {

    const { component: Component, ...rest } = props
    console.log('pro', props)
    const { user } = props
    return (

        <Route {...rest} render={(props) => (

            user.authenticated
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />

    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(PrivateRoute)