import React, { useState } from "react";
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
    email: "",
    password: "",
    secondpass: "",
}


const Registry = () => {

    const [validUser, setValidUser] = useState(userInit);
    const [loginPass, setLoginPass] = useState(true);


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('firstName'),
            secondname: data.get('secondName'),
            lastname: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password')
        });
        createUser({
            name: data.get('firstName'),
            secondname: data.get('secondName'),
            lastname: data.get('lastName'),
            email: data.get('email'),
        })
        setValidUser({
            email: data.get('email'),
            password: data.get('password'),
            secondpass: data.get('confirmPass')
        })
        setLoginPass(!loginPass)
    };

    return (
        loginPass ? (
            <div className='teamForm'>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xl">
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
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth
                                            id="secondName"
                                            label="Second Name"
                                            name="secondName"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            type={"password"}
                                            required
                                            fullWidth
                                            id="password"
                                            label="Password"
                                            name="password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            type={"password"}
                                            required
                                            fullWidth
                                            id="confirmPass"
                                            label="Confirm Password"
                                            name="confirmPass"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    SIGN UP
                                </Button>
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 5 }} />
                    </Container>
                </ThemeProvider>
            </div>
        ) : (validUser.password == validUser.secondpass ? (<Login validUser={validUser} />) : (<Registry />))
    );
}


export default Registry
