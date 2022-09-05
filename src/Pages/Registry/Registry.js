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
import { createUser } from 'src/services/users';
import Login from "./Login";


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

const userInit = {
    name: "",
    secondname: "",
    lastname: "",
    email: "",
    password: "",
    secondpass: "",
}

const Registry = () => {

    const [validUser, setValidUser] = useState(userInit);
    const [loginPass, setLoginPass] = useState(localStorage.getItem('user') !== null ? false : true);
    const [isValid, setIsValid] = useState(false);


    useEffect(() => {
        if (validUser.password === validUser.secondpass && validUser.password !== "" && validUser.secondpass !== "") {
            setIsValid(true)
        } else {
            setIsValid(false)
        }

        if (localStorage.getItem('user') !== null) { setLoginPass(false) }
    }, [validUser])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const status = await createUser(validUser);
        alert(status)
    };


    return (
        loginPass ? (
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
                                            onChange={(event) => setValidUser({ ...validUser, name: event.target.value })}
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            value={validUser.name}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            onChange={(event) => setValidUser({ ...validUser, secondname: event.target.value })}
                                            fullWidth
                                            id="secondName"
                                            label="Second Name"
                                            name="secondName"
                                            value={validUser.secondname}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            onChange={(event) => setValidUser({ ...validUser, lastname: event.target.value })}
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"
                                            value={validUser.lastname}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={(event) => setValidUser({ ...validUser, email: event.target.value })}
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            value={validUser.email}
                                            type={"email"}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={(event) => setValidUser({ ...validUser, password: event.target.value })}
                                            type={"password"}
                                            required
                                            fullWidth
                                            id="password"
                                            label="Password"
                                            name="password"
                                            value={validUser.password}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={(event) => setValidUser({ ...validUser, secondpass: event.target.value })}
                                            type={"password"}
                                            required
                                            fullWidth
                                            id="confirmPass"
                                            label="Confirm Password"
                                            name="confirmPass"
                                            value={validUser.secondpass}
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
        ) : (<Login />)
    );
}


export default Registry
