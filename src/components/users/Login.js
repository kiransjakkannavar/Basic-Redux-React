import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import background from '../../assests/images/background.jpg'

import { addEmail, addPassword, loginSuccess, loginFailure } from '../../redux/actions/users'


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/kiransjakkannavar">
                kiransjakkannavar-github
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const styles = (theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${background})`,//'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Login extends Component {

    constructor(props) {
        super(props)
    }


    handleEmail = (event) => {
        let email = event.target.value
        this.props.dispatch(addEmail(email))
    }

    handlePassword = (event) => {
        let password = event.target.value
        this.props.dispatch(addPassword(password))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let authenticatedEmail = "hruday@gmail.com"
        let authenticatedPassword = "hruday123"


        const { email, password } = this.props.user
        if (email.length == 0) {
            let error = "Please add a valid Email"
            this.props.dispatch(loginFailure(error))
        } else if (password.length == 0) {
            let error = "Please enter a password"
            this.props.dispatch(loginFailure(error))
        } else if (email != authenticatedEmail) {
            let error = "Invalid Email or Password"
            this.props.dispatch(loginFailure(error))
        } else if (password != authenticatedPassword) {
            let error = "Invalid Email or Password"
            this.props.dispatch(loginFailure(error))
        } else {
            this.props.dispatch(loginSuccess())
        }

    }

    render() {
        const { classes } = this.props
        const { email, password, redirect, isAuthenticated, error } = this.props.user

        return (
            <Grid container component="main" className={classes.root}>
                {redirect && this.props.history.push('/dashboard')}
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
          </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={this.handleEmail}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={this.handlePassword}
                            />

                            <Button

                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleSubmit}
                            >
                                Sign In
            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Typography variant="h5" align="center" style={{ color: '#FF4B4B' }}>
                                        {error ? error : ""}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state, 'state value')
    return { user: state.user }
}

export default connect(mapStateToProps)(withStyles(styles)(Login))