import { Box, Button, Tooltip } from '@mui/material'
import React from 'react'

function SvgBox() {
    return (
        <div>
            <Box sx={{ display: 'flex'}}>

                <Box mr={2}>
                    <Tooltip title={'JWT'} >
                        <div className='grayscale'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="none">
                                <path d="M13.4848 7.37999L13.4648 2H10.46L10.4801 7.37999L11.9824 9.44004L13.4848 7.37999Z" fill="white" />
                                <path d="M10.48 16.6V22H13.4848V16.6L11.9824 14.54L10.48 16.6Z" fill="white" />
                                <path d="M13.4937 16.6217L16.6588 20.9887L19.0826 19.2259L15.9175 14.8589L13.4937 14.0776V16.6217Z" fill="#00F2E6" />
                                <path d="M10.489 7.38696L7.30384 3.01998L4.87998 4.78281L8.04506 9.14979L10.489 9.93103V7.38696Z" fill="#00F2E6" />
                                <path d="M8.04969 9.14266L2.92144 7.48L2 10.3245L7.12818 12.0072L9.55203 11.2059L8.04969 9.14266Z" fill="#00B9F1" />
                                <path d="M14.4198 12.7885L15.9221 14.8518L21.0504 16.5144L21.9718 13.6699L16.8437 12.0072L14.4198 12.7885Z" fill="#00B9F1" />
                                <path d="M16.8437 12.0072L21.9718 10.3245L21.0504 7.48L15.9221 9.14266L14.4198 11.2059L16.8437 12.0072Z" fill="#D63AFF" />
                                <path d="M7.12818 12.0072L2 13.6699L2.92144 16.5144L8.04969 14.8518L9.55203 12.7885L7.12818 12.0072Z" fill="#D63AFF" />
                                <path d="M8.04506 14.8589L4.87998 19.2259L7.30384 20.9887L10.489 16.6217V14.0776L8.04506 14.8589Z" fill="#FB015B" />
                                <path d="M15.9175 9.14979L19.0826 4.78281L16.6588 3.01998L13.4937 7.38696V9.93103L15.9175 9.14979Z" fill="#FB015B" />
                            </svg>
                        </div>
                    </Tooltip>
                </Box>

                <Box mr={2}>
                    <Tooltip title={'Firebase'}>
                        <div className='grayscale '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M14.428 8.94328L12.2266 10.9913L10.1841 6.87117L11.2411 4.50146C11.516 4.02037 11.9449 4.02587 12.2129 4.50146L14.428 8.94328Z" fill="#FFA000" />
                                <path d="M10.1841 6.87117L12.2266 10.9913L4 18.6441L10.1841 6.87117Z" fill="#F57F17" />
                                <path d="M16.8354 5.81277C17.2286 5.43477 17.6354 5.56398 17.7392 6.09936L19.8807 18.5424L12.7826 22.8034C12.5352 22.9409 11.8754 23 11.8754 23C11.8754 23 11.2747 22.9285 11.0459 22.7938L4 18.6441L16.8354 5.81277Z" fill="#FFCA28" />
                                <path d="M10.1841 6.87117L4.00067 18.6441L6.75456 1.4383C6.85628 0.902226 7.16142 0.850681 7.43358 1.32352L10.1841 6.87117Z" fill="#FFA000" />
                            </svg>
                        </div>
                    </Tooltip>
                </Box>

                <Box mr={2}>
                    <Tooltip title={'Amplify'}>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M5.78751 17.619H11.9842L13.5714 20.4127H1L7.26392 9.56064L8.85208 12.3126L5.78751 17.619ZM8.09856 8.11212L9.62343 5.4699L18.2533 20.4127H15.1971L8.09856 8.11212ZM10.4722 4H13.5243L23 20.4127H19.944L10.4722 4Z" fill="url(#paint0_linear_134_65809)" />
                                <defs>
                                    <linearGradient id="paint0_linear_134_65809" x1="2201" y1="367.9" x2="349.821" y2="1748.94" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF9900" />
                                        <stop offset="1" stopColor="#FFC300" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </Tooltip>
                </Box>

                <Box mr={2}>
                    <Tooltip title={'Auth0'}>
                        <div className='grayscale'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M17.3636 18.1794L15.333 12L20.648 8.18125H14.0792L12.0489 2H18.6214L20.6545 8.18125C21.8317 11.765 20.6177 15.8437 17.3639 18.1791L17.3636 18.1794ZM6.73141 18.1794L12.0467 22L17.3639 18.1791L12.0489 14.3606L6.73141 18.1794ZM3.44516 8.17938C2.20266 11.9606 3.64516 15.9659 6.72641 18.1816V18.1794L8.76047 12L3.44547 8.17938L10.0158 8.18156L12.0467 2H5.47609L3.44516 8.17938Z" fill="#EB5424" />
                            </svg>
                        </div>
                    </Tooltip>
                </Box>


                    <Tooltip title={'Supabase'}>
                        <div className='grayscale'>
                            <img src={'./supabase.png'} alt="Supabase" width={32} height={32} />
                        </div>
                    </Tooltip>



            </Box>

        </div>
    )
}

export default SvgBox