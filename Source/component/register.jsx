'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';
import { Alert, Box, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, ThemeProvider, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';

import { useFormik } from 'formik';
import * as yup from 'yup'



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

    function myFetch(val) {
        async function myPost() {
            fetch('https://658aa139ba789a9622377164.mockapi.io/login', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(val)
            }).then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            myPost()
        }
    }

    const request = () => {
        if (formik.values.first && formik.values.last && formik.values.email && formik.values.password) {
            let user = {
                "fname": formik.values.first,
                "lname": formik.values.last,
                "email": formik.values.email,
                "password": formik.values.password,
            }
            user = user.json()
            myFetch(user)
        }
    }

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
            <Box className={'flex flex-wrap w-full'}>
                <Typography color={'rgb(33,43,54)'} fontSize={24} fontWeight={700} mb={2} className='w-full'>Get started absolutely free</Typography>
                <Box className='w-full' sx={{ display: 'flex' }}>
                    <Typography color={'rgb(33,43,54)'} fontSize={14} mb={5}>
                        Already have an account?
                        <Link href={'/login'} className='ml-1 text-[rgb(0,167,111)] hover:underline font-[600] '>
                            Sign in
                        </Link>
                    </Typography>
                </Box>

                <Box className={'w-full flex justify-between mb-4 flex-wrap md:flex-nowrap'}>
                    <div className='w-full md:mr-4 mb-4 md:mb-0 mr-0'>
                        <TextField
                            id="first"
                            name="first"
                            label="First name"
                            variant="outlined"
                            required
                            sx={{ borderRadius: '0.5rem', color: 'black' }}
                            fullWidth
                            value={formik.values.first}

                        />
                    </div>

                    <div className='w-full'>
                        <TextField
                            id="last"
                            name="last"
                            label="Last name"
                            variant="outlined"
                            required
                            fullWidth
                            sx={{ borderRadius: '0.5rem', color: 'black' }}
                            value={formik.values.last}
                        />
                    </div>
                </Box>

                <Box
                    component="form"
                    sx={{ display: 'flex', borderRadius: '0.5rem' }}
                    autoComplete="on"
                    onSubmit={formik.handleSubmit}
                    className='w-full'
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
                    />
                </Box>
                <Box
                    component="form"
                    sx={{ mt: 2, mb: 2, display: 'flex', borderRadius: '0.5rem' }}
                    autoComplete="on"
                    className='w-full'
                >
                    <FormControl
                        fullWidth
                        required
                        variant="outlined"
                        error={formik.touched.password && Boolean(formik.errors.password)}
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
                        />

                    </FormControl>

                </Box>


                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        fullWidth
                        className='bg-[#212b36]'
                        sx={{ textTransform: 'none', p: 1.5, borderRadius: '0.5rem' }}
                        type='submit'
                        onClick={request}
                    >Create Account</Button>
                </ThemeProvider>
                <Typography align='center' sx={{ width: '100%', mt: 4, color: 'rgb(99,115,129)', fontSize: 12 }}>
                    By signing up, I agree to <span className='underline hover:decoration-black text-[rgb(33,43,54)] decoration-[rgb(99,115,129)]'>Terms of Service</span> and <span className='underline hover:decoration-black text-[rgb(33,43,54)] decoration-[rgb(99,115,129)]'>Privacy Policy</span>.
                </Typography>
            </Box>

        </div>
    )
}