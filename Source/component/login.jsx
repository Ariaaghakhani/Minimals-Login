'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';
import { Alert, Box, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, ThemeProvider, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';

import { useFormik } from 'formik';
import * as yup from 'yup'
import { useRouter } from 'next/navigation';





const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Email must be a valid email address')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export default function login() {

    let data

    useEffect(() => {
        async function myFetch() {
            let response = await fetch('https://658aa139ba789a9622377164.mockapi.io/login');
            data = await response.json();
            setMyData(data)
        }
        myFetch()
    }, [])

    const route = useRouter()

    const formik = useFormik({
        initialValues: {

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const blck = '#212b36'

    const theme = createTheme({
        palette: {
            primary: {
                main: blck,
                light: alpha(blck, 0.5),
                dark: alpha(blck, 0.9),
                contrastText: getContrastRatio(blck, '#fff') > 4.5 ? '#fff' : '#111',
            }
        }
    })

    const [valid, setValid] = useState(true)

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const VisibilityOff = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001c0-.001 0 0 0 0l.003.009l.021.045c.02.042.051.108.094.194c.086.172.219.424.4.729a13.37 13.37 0 0 0 1.67 2.237a11.966 11.966 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.706 8.706 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13.053 13.053 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14.045 14.045 0 0 1-.741 1.348a15.368 15.368 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a11.81 11.81 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.406 15.406 0 0 1-1.87-2.519a13.457 13.457 0 0 1-.591-1.107a5.418 5.418 0 0 1-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314" clipRule="evenodd"></path></svg>
        )
    }

    const [myData, setMyData] = useState('')

    return (
        <div className='flex content-center p-16 mt-24 mx-auto relative max-w-[600px]'>
            <figure className='fixed top-4 left-4 w-[40px] h-[40px] block md:hidden'>
                <img src="./logo.png" alt="" />
            </figure>
            <Box>
                <Typography color={'rgb(33,43,54)'} fontSize={24} fontWeight={700} mb={2}>Sign in to Minimal</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Typography color={'rgb(33,43,54)'} fontSize={14} mb={5}>
                        New user?
                        <Link href={'/register'} className='ml-1 text-[rgb(0,167,111)] hover:underline font-[600] '>
                            Create an account
                        </Link>
                    </Typography>
                </Box>
                <div className={(valid ? 'hidden' : 'flex')}>
                    <Alert sx={{ borderRadius: '0.5rem', mb: 2 }} severity="warning" fullWidth>Incorrect username or password.</Alert>
                </div>
                <Alert sx={{ borderRadius: '0.5rem', mb: 4 }} severity="info">Use email : <strong>demo@ariaag.com</strong> / password : <strong>Aria.demo1234</strong></Alert>

                <Box
                    component="form"
                    sx={{ display: 'flex', borderRadius: '0.5rem' }}
                    autoComplete="on"
                    onSubmit={() => {
                        if (formik.values.email && formik.values.password) {
                            myData.map((val) => {
                                if (formik.values.email == val.email && formik.values.password == val.password) {
                                    setStatus(true)
                                    alert('success')
                                    route.push('./dashboard')
                                }
                                else {
                                    setValid(false)
                                }
                            })
                        }
                    }}
                >
                    <TextField
                        id="email"
                        name="email"
                        label="Email address"
                        variant="outlined"
                        required
                        sx={{ borderRadius: '0.5rem', color: 'black' }}
                        fullWidth
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}


                    />
                </Box>
                <Box
                    component="form"
                    sx={{ mt: 2, mb: 2, display: 'flex', borderRadius: '0.5rem' }}
                    autoComplete="on"
                >
                    <FormControl
                        fullWidth
                        required
                        variant="outlined"
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        value={formik.values.password}

                    >

                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>

                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            id='password'
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    if (formik.values.email && formik.values.password) {
                                        myData.map((val) => {
                                            if (formik.values.email == val.email && formik.values.password == val.password) {
                                                setStatus(true)
                                                alert('success')
                                                route.push('./dashboard')
                                            }
                                            else {
                                                setValid(false)
                                            }
                                        })
                                    }
                                }
                            }}
                        />

                    </FormControl>

                </Box>
                <Typography align='right' fontSize={14} color={'rgb(33,43,54)'} sx={{ textDecoration: 'underline', mb: 2 }}>
                    <Link href={'#'}>Forgot password?</Link>
                </Typography>

                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        fullWidth
                        className='bg-[#212b36]'
                        sx={{ textTransform: 'none', p: 1.5, borderRadius: '0.5rem' }}
                        type='submit'
                        onSubmit={() => {
                            if (formik.values.email && formik.values.password) {
                                myData.map((val) => {
                                    if (formik.values.email == val.email && formik.values.password == val.password) {

                                        route.push('./dashboard')
                                    }
                                    else {
                                        setValid(false)
                                    }
                                })
                            }
                        }}
                        onClick={() => {
                            if (formik.values.email && formik.values.password) {
                                myData.map((val) => {
                                    if (formik.values.email == val.email && formik.values.password == val.password) {
                                        route.push('./dashboard')
                                    }
                                    else {
                                        setValid(false)
                                    }
                                })
                            }
                        }}
                    >Login</Button>
                </ThemeProvider>
            </Box>
        </div>
    )
}