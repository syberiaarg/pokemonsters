import React, { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Registry.css'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Login from "../Login";
import { isSignedUp } from "src/utils/localStorage";
import { useUser } from "../../hooks";
import InfoAlert from "src/Components/Alert";


const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Pokemonsters
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Registry = () => {
    const [isValid, setIsValid] = useState(false);
    const [confirmPass, setConfirmPass] = useState(null)
    const { user, setUser, regisryNewUser, showAlert } = useUser();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const isPasswordMatch = ({ target: { value } }, confirm) => !confirm ?
        setUser({ ...user, password: value }) : setConfirmPass(value)


    useEffect(() => {
        if (user.password === confirmPass) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [confirmPass, user.password])

    const handleSubmit = async (event) => {
        event.preventDefault();
        regisryNewUser()
    };

    console.log(showAlert);


    return (
        !isSignedUp() ? (
            <>
                {showAlert.show && <InfoAlert severity={showAlert.severity} message={showAlert.message} />}
                <div className='teamForm'>
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="sm">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 3, bgcolor: 'primary.main', width: 48, height: 48 }}>
                                    <CatchingPokemonIcon />
                                </Avatar>
                                <Typography component="h1" variant="h3">
                                    GET YOUR TEAM
                                </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                id="name"
                                                name="name"
                                                onChange={handleChange}
                                                autoComplete="given-name"
                                                required
                                                fullWidth
                                                label="First Name"
                                                autoFocus
                                                value={user.name}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                onChange={handleChange}
                                                fullWidth
                                                id="secondName"
                                                label="Second Name"
                                                name="secondName"
                                                value={user.secondName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                onChange={handleChange}
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="family-name"
                                                value={user.lastName}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                onChange={handleChange}
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                value={user.email}
                                                type="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                onChange={(event) => isPasswordMatch(event, false)}
                                                type="password"
                                                required
                                                fullWidth
                                                id="password"
                                                label="Password"
                                                name="password"
                                                value={user.password}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="confirmPass"
                                                name="confirmPass"
                                                label="Confirm Password"
                                                type="password"
                                                required
                                                fullWidth
                                                disabled={user.password === ''}
                                                onChange={(event) => isPasswordMatch(event, true)}
                                                error={!isValid && user.password}
                                                helperText={!isValid && user.password ? "Passwords don't match" : ""}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        disabled={!isValid}
                                    >
                                        SIGN UP
                                    </Button>
                                </Box>
                            </Box>
                            <Copyright sx={{ mt: 5 }} />
                        </Container>
                    </ThemeProvider>
                </div>
            </>
        ) : <Login />
    );
}


export default Registry
