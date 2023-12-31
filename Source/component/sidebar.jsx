'use client'

import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Circle } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';





export default function NestedList() {

    const [openOver, setOpenOver] = React.useState(true)
    const [openMan, setOpenMan] = React.useState(true)
    const [openUser, setOpenUser] = React.useState(false)
    const [openProduct, setOpenProduct] = React.useState(false)
    const [openOrder, setOpenOrder] = React.useState(false)
    const [openInvoice, setOpenInvoice] = React.useState(false)
    const [openBlog, setOpenBlog] = React.useState(false)
    const [openJob, setOpenJob] = React.useState(false)
    const [openTour, setOpenTour] = React.useState(false)


    const [opUser, setOpUser] = React.useState('0.5')
    const [opProduct, setOpProduct] = React.useState('0.5')
    const [opOrder, setOpOrder] = React.useState('0.5')
    const [opInvoice, setOpInvoice] = React.useState('0.5')
    const [opBlog, setOpBlog] = React.useState('0.5')
    const [opJob, setOpJob] = React.useState('0.5')
    const [opTour, setOpTour] = React.useState('0.5')


    const handleClickOverview = () => {
        setOpenOver(!openOver);
    };
    const handleClickManage = () => {
        setOpenMan(!openMan);
    };

    const handleClickUser = () => {
        setOpenUser(!openUser);
        openUser ? setOpUser('0.5') : setOpUser('1')

    }
    const handleClickProdcut = () => {
        setOpenProduct(!openProduct);
        openProduct ? setOpProduct('0.5') : setOpProduct('1')
    }
    const handleClickOrder = () => {
        setOpenOrder(!openOrder);
        openOrder ? setOpOrder('0.5') : setOpOrder('1')
    }
    const handleClickInvoice = () => {
        setOpenInvoice(!openInvoice);
        openInvoice ? setOpInvoice('0.5') : setOpInvoice('1')
    }
    const handleClickBlog = () => {
        setOpenBlog(!openBlog);
        openBlog ? setOpBlog('0.5') : setOpBlog('1')
    }
    const handleClickJob = () => {
        setOpenJob(!openJob);
        openJob ? setOpJob('0.5') : setOpJob('1')
    }
    const handleClickTour = () => {
        setOpenTour(!openTour);
        openTour ? setOpTour('0.5') : setOpTour('1')
    }


    return (
        <>
            <section className='w-full flex flex-wrap'>

                {/* Overview */}

                <Button variant="text" onClick={handleClickOverview} sx={{
                    color: 'black',
                    fontSize: '11px',
                    fontWeight: '700',
                    marginLeft: '1.25rem',
                    opacity: '0.4',
                    transition: '.2s ease',
                    background: 'none',
                    ":hover": {
                        opacity: '1',
                        transition: '.4s',
                        background: 'none',
                    }
                }}>
                    Overview
                </Button>

                <Collapse in={openOver} sx={{ width: '100%', padding: '0 0.75rem' }}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton sx={{ borderRadius: '0.5rem', backgroundColor: 'rgba(0,167,111,0.12)', marginBottom: '0.25rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" d="M21.1808 16.9703C20.8971 17.6255 20.2225 18 19.5086 18H14.8154C14.8462 17.9145 14.8735 17.8269 14.8971 17.7373C15.1709 16.6974 14.8825 15.639 14.2214 14.8963C14.4654 12.9091 14.6177 10.8733 14.7108 9.26516C14.7569 8.46731 13.7795 8.20081 13.4274 8.91526C12.7178 10.3553 11.8493 12.1958 11.0842 14.041C10.1467 14.3479 9.3768 15.1177 9.10295 16.1576C8.93642 16.7899 8.97782 17.4291 9.18451 18H4.49141C3.77747 18 3.10288 17.6255 2.81918 16.9703C2.29212 15.7533 2 14.4108 2 13C2 7.47715 6.47715 3 12 3C17.5229 3 22 7.47715 22 13C22 14.4108 21.7079 15.7533 21.1808 16.9703Z" fill="#00A76F" />
                                <path d="M14.7108 9.26516C14.7569 8.46731 13.7795 8.20081 13.4274 8.91526C12.7178 10.3553 11.8493 12.1958 11.0842 14.041C10.1467 14.3479 9.3768 15.1177 9.10295 16.1576C8.6742 17.7856 9.62375 19.459 11.2238 19.8953C12.8238 20.3315 14.4684 19.3654 14.8971 17.7373C15.1709 16.6974 14.8825 15.639 14.2214 14.8963C14.4654 12.9091 14.6177 10.8733 14.7108 9.26516Z" fill="#00A76F" />
                            </svg>
                            <ListItemText primary="App" sx={{ marginLeft: '16px', fontSize: '14px', color: '#00A76F', fontWeight: 500 }} disableTypography />
                        </ListItemButton>

                        <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                <path opacity="0.32" d="M4.32992 6C3.84871 6 3.43524 6.34385 3.34854 6.8172C1.98294 14.2724 1.75 18 1.75 18H22.25C22.25 18 22.017 14.2724 20.6514 6.8172C20.5647 6.34385 20.1513 6 19.67 6H4.32992Z" fill="#637381" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.25 18H1.75C1.75 18 1.75 18.695 1.80122 19.6754C1.87282 21.0459 2.95622 22.0861 4.32766 22.138C5.855 22.1959 8.2782 22.25 12 22.25C15.7218 22.25 18.145 22.1959 19.6723 22.138C21.0438 22.0861 22.1272 21.0459 22.1988 19.6754C22.25 18.695 22.25 18 22.25 18Z" fill="#637381" />
                                <path d="M12 1C9.2386 1 7 3.23857 7 6H9C9 4.34314 10.3432 3 12 3C13.6568 3 15 4.34314 15 6H17C17 3.23857 14.7614 1 12 1Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="E-Commerce" sx={{ marginLeft: '16px', fontSize: '14px', opacity: '0.5', fontWeight: 500 }} disableTypography />
                        </ListItemButton>

                        <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g opacity="0.32">
                                    <path d="M2.60946 22.9843C1.77292 22.9631 1.13928 22.4599 1.07089 21.6259C1.02993 21.1264 1 20.4398 1 19.5C1 18.5602 1.02993 17.8736 1.07089 17.3741C1.13928 16.5401 1.77292 16.0369 2.60946 16.0157C2.97545 16.0064 3.43306 16 4 16C4.56694 16 5.02455 16.0064 5.39055 16.0157C6.2271 16.0369 6.8607 16.5401 6.9291 17.3741C6.97005 17.8736 7 18.5602 7 19.5C7 20.4398 6.97005 21.1264 6.9291 21.6259C6.8607 22.4599 6.2271 22.9631 5.39055 22.9843C5.02455 22.9936 4.56694 23 4 23C3.43306 23 2.97545 22.9936 2.60946 22.9843Z" fill="#637381" />
                                    <path d="M18.8455 22.9792C17.8709 22.9408 17.1875 22.2557 17.1243 21.2823C17.0588 20.2731 17 18.6337 17 16C17 13.3663 17.0588 11.727 17.1243 10.7177C17.1875 9.74435 17.8709 9.0592 18.8455 9.02075C19.1671 9.00805 19.5489 9 20 9C20.4511 9 20.8329 9.00805 21.1545 9.02075C22.1291 9.0592 22.8125 9.74435 22.8757 10.7177C22.9412 11.727 23 13.3663 23 16C23 18.6337 22.9412 20.2731 22.8757 21.2823C22.8125 22.2557 22.1291 22.9408 21.1545 22.9792C20.8329 22.9919 20.4511 23 20 23C19.5489 23 19.1671 22.9919 18.8455 22.9792Z" fill="#637381" />
                                    <path d="M10.7766 22.9832C9.8427 22.9548 9.162 22.3419 9.0949 21.41C9.0422 20.6775 9 19.5936 9 18C9 16.4064 9.0422 15.3225 9.0949 14.59C9.162 13.6581 9.8427 13.0453 10.7766 13.0169C11.1121 13.0067 11.5163 13 12 13C12.4837 13 12.8879 13.0067 13.2234 13.0169C14.1573 13.0453 14.838 13.6581 14.9051 14.59C14.9578 15.3225 15 16.4064 15 18C15 19.5936 14.9578 20.6775 14.9051 21.41C14.838 22.3419 14.1573 22.9548 13.2234 22.9832C12.8879 22.9934 12.4837 23 12 23C11.5163 23 11.1121 22.9934 10.7766 22.9832Z" fill="#637381" />
                                </g>
                                <path d="M20.9603 6.0506C20.9106 7.03855 19.9709 7.40975 19.242 6.741C18.9106 6.4369 18.5138 6.06255 18.0418 5.60285C16.9756 6.5731 15.322 8.08585 13.3506 9.91645C12.8329 10.3972 11.992 10.3435 11.5397 9.8007L11.5394 9.8003C10.6518 8.73835 9.75755 7.6807 8.8322 6.6514C7.7509 7.4453 5.81 8.95825 3.88389 10.8844C3.39573 11.3725 2.60427 11.3725 2.11612 10.8844C1.62796 10.3962 1.62796 9.60475 2.11612 9.1166C4.00573 7.227 6.079 5.4545 8.30255 3.96314L8.306 3.96082C8.30685 3.96027 8.3066 3.96042 8.3066 3.96042C8.8024 3.6299 9.46255 3.69527 9.8839 4.1166C10.8519 5.08455 11.7265 6.14925 12.6118 7.19265C14.1169 5.80065 15.3848 4.64087 16.274 3.8314C15.8705 3.41506 15.5362 3.06006 15.26 2.75898C14.591 2.02997 14.9624 1.08998 15.9506 1.04025C17.2115 0.976795 18.5055 0.939456 19.7511 1.17232C20.3119 1.27718 20.7233 1.68863 20.8281 2.24948C21.061 3.49521 21.0238 4.78949 20.9603 6.0506Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Analytics" sx={{ marginLeft: '16px', fontSize: '14px', opacity: '0.5', fontWeight: 500 }} disableTypography />
                        </ListItemButton>

                        <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g opacity="0.32">
                                    <path d="M12 10.75C16.7038 10.75 19.4773 10.6481 20.868 10.5745C21.5117 10.5404 22 10.0077 22 9.36312V8.19432C22 7.74462 21.8551 7.30342 21.5366 6.98592C19.6683 5.12352 15.3747 2.72326 12.465 2.08812C12.1576 2.021 11.8424 2.021 11.535 2.08812C8.62535 2.72326 4.33171 5.12352 2.4634 6.98592C2.1449 7.30342 2 7.74462 2 8.19432V9.36312C2 10.0077 2.48829 10.5404 3.13195 10.5745C4.52271 10.6481 7.29615 10.75 12 10.75Z" fill="#637381" />
                                    <path d="M2.1787 18.7287C2.30863 18.3515 2.68627 18.1799 3.0846 18.1573C4.11911 18.0986 6.6517 18 12 18C17.3483 18 19.8809 18.0986 20.9154 18.1573C21.3137 18.1799 21.6914 18.3515 21.8213 18.7287C21.9176 19.0082 22 19.4175 22 20C22 20.5825 21.9176 20.9919 21.8213 21.2714C21.6914 21.6486 21.3137 21.8201 20.9154 21.8427C19.8809 21.9015 17.3483 22 12 22C6.6517 22 4.11911 21.9015 3.0846 21.8427C2.68627 21.8201 2.30863 21.6486 2.1787 21.2714C2.08243 20.9919 2 20.5825 2 20C2 19.4175 2.08243 19.0082 2.1787 18.7287Z" fill="#637381" />
                                </g>
                                <path d="M12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z" fill="#637381" />
                                <path d="M13.9467 10.7438C13.3382 10.7478 12.6899 10.75 12 10.75C11.3101 10.75 10.6618 10.7478 10.0533 10.7438C10.0277 11.3951 10 12.5511 10 14.5C10 16.2195 10.0216 17.3217 10.0442 18.0047C10.65 18.0017 11.3009 18 12 18C12.6991 18 13.35 18.0017 13.9558 18.0047C13.9784 17.3217 14 16.2195 14 14.5C14 12.5511 13.9723 11.3951 13.9467 10.7438Z" fill="#637381" />
                                <path d="M16.0542 10.7212C16.0284 11.3682 16 12.5284 16 14.5C16 16.2343 16.022 17.3407 16.0448 18.0223C17.8468 18.0443 19.1022 18.0792 19.9521 18.1123C19.976 17.4396 20 16.3128 20 14.5C20 12.4185 19.9684 11.2414 19.9415 10.6177C19.0121 10.6562 17.7369 10.6956 16.0542 10.7212Z" fill="#637381" />
                                <path d="M4.05845 10.6177C4.98788 10.6562 6.26314 10.6956 7.94583 10.7212C7.97163 11.3682 8 12.5284 8 14.5C8 16.2343 7.97805 17.3407 7.9552 18.0223C6.15324 18.0443 4.89779 18.0792 4.04791 18.1123C4.024 17.4396 4 16.3128 4 14.5C4 12.4185 4.03165 11.2414 4.05845 10.6177Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Banking" sx={{ marginLeft: '16px', fontSize: '14px', opacity: '0.5', fontWeight: 500 }} disableTypography />
                        </ListItemButton>

                        <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M2.625 20.25C2.32663 20.25 2.04048 20.3685 1.8295 20.5795C1.61853 20.7905 1.5 21.0766 1.5 21.375C1.5 21.6734 1.61853 21.9595 1.8295 22.1705C2.04048 22.3815 2.32663 22.5 2.625 22.5H21.375C21.6734 22.5 21.9595 22.3815 22.1705 22.1705C22.3815 21.9595 22.5 21.6734 22.5 21.375C22.5 21.0766 22.3815 20.7905 22.1705 20.5795C21.9595 20.3685 21.6734 20.25 21.375 20.25H2.625Z" fill="#637381" />
                                <path opacity="0.32" d="M12.453 6.22499C12.5805 6.02999 12.726 5.82449 12.888 5.61299L12.912 5.57999C13.31 5.05215 13.7681 4.57242 14.277 4.15049C14.8665 3.67049 15.5805 3.25949 16.3995 3.08549C16.6725 3.02849 16.959 2.99849 17.2545 2.99999C19.281 3.01349 20.8125 4.39499 21.7515 5.55599C21.87 5.70149 21.9765 5.84249 22.0755 5.97749L22.1175 6.03599C22.218 6.17399 22.2975 6.31799 22.3575 6.46349L22.3695 6.49199C22.7655 7.49999 22.227 8.58899 21.3 9.04949C21.2283 9.08553 21.1547 9.11758 21.0795 9.14549L17.7315 10.3725L13.0725 17.0925C11.6655 19.122 8.4915 17.7345 9.027 15.3225L9.495 13.212L4.8375 14.5245C4.44734 14.6345 4.037 14.6527 3.63864 14.5776C3.24029 14.5025 2.86474 14.3361 2.54143 14.0916C2.21813 13.847 1.95585 13.5309 1.77517 13.168C1.59449 12.8052 1.5003 12.4054 1.5 12V7.73999C1.5 5.92499 3.957 5.35949 4.749 6.99449L5.6565 8.86799L10.8045 7.51199C11.4525 7.34249 12.0285 6.86999 12.4545 6.22499H12.453ZM6.516 6.85949L6.666 7.05149L10.4235 6.06149C10.6215 6.01049 10.92 5.82449 11.202 5.39849C11.3516 5.17038 11.5087 4.94726 11.673 4.72949L9.762 3.41999C9.36328 3.14641 8.89106 2.99998 8.4075 2.99999C6.42 2.99999 5.2965 5.28749 6.516 6.85949Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Booking" sx={{ marginLeft: '16px', fontSize: '14px', opacity: '0.5', fontWeight: 500 }} disableTypography />
                        </ListItemButton>

                        <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" fillRule="evenodd" clipRule="evenodd" d="M20.9114 8.22695C19.4717 8.5891 17.7718 8.61315 16.3035 8.1646C15.6828 7.97495 15.1988 7.4914 14.9893 6.8771C14.4674 5.34677 14.3385 3.47362 14.722 2.0318C13.9279 2.01186 13.0248 2 12 2C8.51575 2 6.43945 2.13682 5.26285 2.26379C4.39116 2.35785 3.71902 2.94826 3.5558 3.80967C3.30175 5.15055 3 7.65725 3 12C3 16.3428 3.30175 18.8494 3.5558 20.1903C3.71902 21.0518 4.39116 21.6422 5.26285 21.7362C6.43945 21.8631 8.51575 22 12 22C15.4843 22 17.5606 21.8631 18.7372 21.7362C19.6089 21.6422 20.281 21.0518 20.4442 20.1903C20.6982 18.8494 21 16.3428 21 12C21 10.5445 20.9661 9.2952 20.9114 8.22695ZM8 13C7.4477 13 7 12.5523 7 12C7 11.4477 7.4477 11 8 11H12C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13H8ZM8 17.5C7.4477 17.5 7 17.0523 7 16.5C7 15.9477 7.4477 15.5 8 15.5H15C15.5523 15.5 16 15.9477 16 16.5C16 17.0523 15.5523 17.5 15 17.5H8Z" fill="#637381" />
                                <path d="M7 16.5C7 17.0523 7.4477 17.5 8 17.5H15C15.5523 17.5 16 17.0523 16 16.5C16 15.9477 15.5523 15.5 15 15.5H8C7.4477 15.5 7 15.9477 7 16.5Z" fill="#637381" />
                                <path d="M7 12C7 12.5523 7.4477 13 8 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H8C7.4477 11 7 11.4477 7 12Z" fill="#637381" />
                                <path d="M20.9114 8.22695C19.4717 8.5891 17.7718 8.61315 16.3036 8.1646C15.6828 7.97495 15.1988 7.4914 14.9893 6.8771C14.4674 5.34675 14.3384 3.47357 14.722 2.03174C14.722 2.03174 15.9461 2.49994 18.1961 4.74994C20.4461 6.99995 20.9114 8.22695 20.9114 8.22695Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="File" sx={{ marginLeft: '16px', fontSize: '14px', opacity: '0.5', fontWeight: 500 }} disableTypography />
                        </ListItemButton>

                    </List>
                </Collapse>


                {/* Management */}

                <Button variant="text" onClick={handleClickManage} sx={{
                    color: 'black',
                    fontSize: '11px',
                    fontWeight: '700',
                    marginLeft: '1.25rem',
                    opacity: '0.4',
                    transition: '0.4s',
                    background: 'none',
                    ":hover": {
                        opacity: '1',
                        transition: '.4s',
                        background: 'none',
                    }
                }}>
                    Management

                </Button>

                <Collapse in={openMan} sx={{ width: '100%', padding: '0 0.75rem', marginBottom: '48px' }}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >


                        {/* User */}


                        <ListItemButton sx={{ borderRadius: '0.5rem', marginBottom: '0.25rem' }} onClick={handleClickUser}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" d="M2.28099 19.6575C2.36966 20.5161 2.93261 21.1957 3.77688 21.3755C5.1095 21.6592 7.6216 22 12 22C16.3784 22 18.8905 21.6592 20.2232 21.3755C21.0674 21.1957 21.6303 20.5161 21.719 19.6575C21.8505 18.3844 22 16.0469 22 12C22 7.95305 21.8505 5.6156 21.719 4.34251C21.6303 3.48389 21.0674 2.80424 20.2231 2.62451C18.8905 2.34081 16.3784 2 12 2C7.6216 2 5.1095 2.34081 3.77688 2.62451C2.93261 2.80424 2.36966 3.48389 2.28099 4.34251C2.14952 5.6156 2 7.95305 2 12C2 16.0469 2.14952 18.3844 2.28099 19.6575Z" fill="#637381" />
                                <path d="M13.9382 13.8559C15.263 13.1583 16.1663 11.7679 16.1663 10.1666C16.1663 7.8655 14.3008 6 11.9996 6C9.69841 6 7.83291 7.8655 7.83291 10.1666C7.83291 11.768 8.73626 13.1584 10.0612 13.856C8.28691 14.532 6.93216 16.1092 6.51251 18.0529C6.45446 18.3219 6.60246 18.5981 6.87341 18.6471C7.84581 18.8231 9.45616 19 12.0006 19C14.545 19 16.1554 18.8231 17.1278 18.6471C17.3977 18.5983 17.5454 18.3231 17.4876 18.0551C17.0685 16.1103 15.7133 14.5321 13.9382 13.8559Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="User" sx={{ marginLeft: '16px', fontSize: '14px', fontWeight: 500, opacity: opUser }} disableTypography />
                            {openUser ? <ExpandMore sx={{ opacity: '50%', fontSize: '18px' }} /> : <ChevronRightIcon sx={{ opacity: '50%', fontSize: '18px' }} />}
                        </ListItemButton>
                        <Collapse in={openUser} >
                            <List
                                sx={{ width: '100%', paddingLeft: '6px' }}
                                component='nav'
                                aria_labelledby='nested-list'
                            >
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Profile' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Card' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='List' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Create' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Edit' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Account' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>


                            </List>
                        </Collapse>


                        {/* Product */}

                        <ListItemButton sx={{ borderRadius: '0.5rem', marginBottom: '0.25rem' }} onClick={handleClickProdcut}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" d="M10.286 3.91C10.286 3.342 10.824 2.75 11.66 2.75C12.496 2.75 13.034 3.342 13.034 3.91C13.034 4.221 12.922 4.491 12.74 4.69C12.6165 4.82138 12.4898 4.94975 12.36 5.075L12.28 5.155C12.0958 5.33334 11.9193 5.51951 11.751 5.713C11.486 6.025 11.198 6.436 11.093 6.943C10.4552 7.04826 9.84904 7.29496 9.319 7.665L2.224 12.657C1.297 13.309 1.058 14.359 1.396 15.239C1.728 16.105 2.59 16.75 3.702 16.75H6.01C6.026 16.113 6.071 15.63 6.194 15.25H3.704C3.201 15.25 2.903 14.977 2.797 14.702C2.697 14.441 2.743 14.126 3.087 13.883L10.183 8.893C10.6617 8.56204 11.2291 8.38325 11.811 8.38C12.3987 8.36959 12.9758 8.53765 13.466 8.862L20.899 13.872C21.255 14.113 21.305 14.432 21.207 14.695C21.104 14.973 20.807 15.25 20.298 15.25H17.808C17.931 15.63 17.976 16.113 17.992 16.75H20.298C21.423 16.75 22.288 16.093 22.614 15.216C22.944 14.326 22.687 13.269 21.737 12.629L14.304 7.619C13.8163 7.29185 13.2672 7.0673 12.69 6.959C12.74 6.878 12.808 6.787 12.895 6.685C13.021 6.536 13.169 6.387 13.335 6.221L13.41 6.149C13.55 6.009 13.705 5.857 13.845 5.704C14.288 5.224 14.535 4.589 14.535 3.909C14.535 2.367 13.171 1.25 11.661 1.25C10.151 1.25 8.786 2.367 8.786 3.91C8.786 4.10891 8.86502 4.29968 9.00567 4.44033C9.14632 4.58098 9.33709 4.66 9.536 4.66C9.73492 4.66 9.92568 4.58098 10.0663 4.44033C10.207 4.29968 10.286 4.10891 10.286 3.91Z" fill="#637381" />
                                <path d="M6 18C6 16.114 6 15.172 6.586 14.586C7.172 14 8.114 14 10 14H14C15.886 14 16.828 14 17.414 14.586C18 15.172 18 16.114 18 18C18 19.886 18 20.828 17.414 21.414C16.828 22 15.886 22 14 22H10C8.114 22 7.172 22 6.586 21.414C6 20.828 6 19.886 6 18Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Product" sx={{ marginLeft: '16px', fontSize: '14px', fontWeight: 500, opacity: opProduct }} disableTypography />
                            {openProduct ? <ExpandMore sx={{ opacity: '50%', fontSize: '18px' }} /> : <ChevronRightIcon sx={{ opacity: '50%', fontSize: '18px' }} />}
                        </ListItemButton>
                        <Collapse in={openProduct} >
                            <List
                                sx={{ width: '100%', paddingLeft: '6px' }}
                                component='nav'
                                aria_labelledby='nested-list'
                            >
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='List' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Details' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>

                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Create' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Edit' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>


                        {/* Order */}

                        <ListItemButton sx={{ borderRadius: '0.5rem', marginBottom: '0.25rem' }} onClick={handleClickOrder}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" d="M3.41016 2.00012C2.71981 2.00012 2.16016 2.55977 2.16016 3.25012C2.16016 3.94048 2.71981 4.50012 3.41016 4.50012H4.25251C4.48986 4.50012 4.69436 4.66605 4.74281 4.89837C4.96591 5.96777 5.59766 8.95907 6.10461 11.0001C6.73135 13.5236 7.29935 15.342 7.6574 16.4029C8.09928 16.1467 8.61259 16 9.16016 16C10.446 16 11.5429 16.809 11.9697 17.9457C12.7178 17.9791 13.5912 18.0001 14.6046 18.0001C15.462 18.0001 16.2042 17.9851 16.8452 17.9602C17.2681 16.8159 18.3689 16 19.6602 16C20.2143 16 20.7334 16.1503 21.1789 16.4123C21.5323 15.5226 22.0073 14.0331 22.4102 11.7501C22.6992 10.1123 22.8768 8.88287 22.986 7.99032C23.1201 6.89392 22.2647 6.00012 21.1602 6.00012H7.66016L7.03891 3.51505C6.81631 2.62472 6.01636 2.00012 5.09861 2.00012H3.41016Z" fill="#637381" />
                                <path d="M17.5505 10.5941C17.6091 10.0083 17.1491 9.5 16.5604 9.5C16.0492 9.5 15.6212 9.88735 15.5703 10.3961L15.2694 13.4059C15.2108 13.9917 15.6708 14.5 16.2595 14.5C16.7707 14.5 17.1987 14.1126 17.2496 13.6039L17.5505 10.5941Z" fill="#637381" />
                                <path d="M12.7496 10.3961C12.6987 9.88735 12.2707 9.5 11.7595 9.5C11.1708 9.5 10.7108 10.0083 10.7694 10.5941L11.0703 13.6039C11.1212 14.1126 11.5492 14.5 12.0604 14.5C12.6491 14.5 13.1091 13.9917 13.0505 13.4059L12.7496 10.3961Z" fill="#637381" />
                                <path d="M16.6602 19C16.6602 20.6569 18.0033 22 19.6602 22C21.317 22 22.6602 20.6569 22.6602 19C22.6602 17.3432 21.317 16 19.6602 16C18.0033 16 16.6602 17.3432 16.6602 19Z" fill="#637381" />
                                <path d="M6.16016 19C6.16016 20.6569 7.50331 22 9.16016 22C10.817 22 12.1602 20.6569 12.1602 19C12.1602 17.3432 10.817 16 9.16016 16C7.50331 16 6.16016 17.3432 6.16016 19Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Order" sx={{ marginLeft: '16px', fontSize: '14px', fontWeight: 500, opacity: opOrder }} disableTypography />
                            {openOrder ? <ExpandMore sx={{ opacity: '50%', fontSize: '18px' }} /> : <ChevronRightIcon sx={{ opacity: '50%', fontSize: '18px' }} />}
                        </ListItemButton>
                        <Collapse in={openOrder} >
                            <List
                                sx={{ width: '100%', paddingLeft: '6px' }}
                                component='nav'
                                aria_labelledby='nested-list'
                            >
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='List' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Details' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>


                        {/* Invoice */}

                        <ListItemButton sx={{ borderRadius: '0.5rem', marginBottom: '0.25rem' }} onClick={handleClickInvoice}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" fillRule="evenodd" clipRule="evenodd" d="M17.7556 2.30079C17.3519 2.11371 17.1172 2.08917 17.0632 2.08595C15.766 2.03476 14.1085 2 11.999 2C7.72437 2 5.30557 2.14276 3.97974 2.27571C3.04019 2.36993 2.36895 3.04117 2.27473 3.98072C2.14178 5.30655 1.99902 7.72535 1.99902 12C1.99902 16.6448 2.16757 19.604 2.30894 21.2694C2.37429 22.039 3.24545 22.378 3.83887 21.8834L5.49902 20.5L6.86612 21.8671C7.22642 22.2274 7.80002 22.2592 8.19792 21.9408L9.99902 20.5L11.2919 21.7929C11.6824 22.1834 12.3156 22.1834 12.7061 21.7929L13.999 20.5L15.8001 21.9408C16.198 22.2592 16.7716 22.2274 17.1319 21.8671L18.499 20.5L20.1592 21.8834C20.7526 22.378 21.6238 22.039 21.6891 21.2694C21.8305 19.604 21.999 16.6448 21.999 12C21.999 9.87288 21.9637 8.20528 21.9118 6.90321C21.4743 6.95701 20.8561 7.00045 20 7.00045C19.3705 7.00045 18.8696 6.97695 18.4746 6.94315C17.6146 6.8695 17.0559 6.21195 17.0228 5.3494C17.0092 4.99245 17 4.54875 17 4.00045C17 3.11398 17.0239 2.50092 17.0522 2.08594C17.0522 2.08594 17.2925 2.08635 17.7556 2.30079ZM11.6589 15.2672C12.2031 15.2672 12.5962 15.1752 12.8381 14.9912C13.0901 14.8072 13.2161 14.5817 13.2161 14.3149C13.2161 14.0757 13.1203 13.8825 12.9288 13.7352C12.7373 13.588 12.4501 13.4592 12.0671 13.3488L11.2355 13.1004C10.8223 12.9807 10.4493 12.8519 10.1167 12.7139C9.78412 12.5759 9.50192 12.4103 9.27007 12.217C9.03827 12.0238 8.85682 11.7938 8.72582 11.527C8.59477 11.2601 8.52927 10.9427 8.52927 10.5746C8.52927 9.94895 8.74092 9.4291 9.16427 9.01505C9.58757 8.601 10.1923 8.32495 10.9785 8.18695V7.7944C10.9785 7.3862 11.2613 7.0214 11.6691 7.00345C11.7215 7.00115 11.7736 7 11.8252 7C12.1981 7 12.4652 7.0598 12.6265 7.1794C12.7978 7.29905 12.8835 7.51525 12.8835 7.8281V8.13175C13.5285 8.19615 14.0527 8.33875 14.4558 8.5596C14.859 8.7712 15.0606 9.05185 15.0606 9.4015C15.0606 9.55725 15.0194 9.70145 14.9481 9.8323C14.7585 10.1803 14.2851 10.1546 13.9096 10.0279C13.8023 9.99165 13.687 9.9577 13.5638 9.92595C13.1808 9.81555 12.7625 9.76035 12.309 9.76035C11.805 9.76035 11.427 9.83855 11.1751 9.995C10.9331 10.1422 10.8122 10.3354 10.8122 10.5746C10.8122 10.7679 10.8928 10.9243 11.0541 11.0439C11.2254 11.1635 11.4825 11.2739 11.8252 11.3751L12.6718 11.6098C13.5789 11.8674 14.2744 12.2078 14.7582 12.6311C15.2521 13.0543 15.499 13.6248 15.499 14.3425C15.499 14.9774 15.2773 15.5157 14.8338 15.9573C14.3903 16.3898 13.7402 16.6796 12.8835 16.8268V17.2056C12.8835 17.6138 12.6007 17.9786 12.1929 17.9965C12.1405 17.9988 12.0884 18 12.0368 18C11.6639 18 11.3918 17.9402 11.2204 17.8206C11.0591 17.7009 10.9785 17.4847 10.9785 17.1719V16.8958C10.2427 16.8222 9.64302 16.6612 9.17937 16.4128C8.72582 16.1551 8.49902 15.8331 8.49902 15.4466C8.49902 15.2209 8.58567 15.0249 8.72467 14.8601C8.97352 14.5651 9.41662 14.6382 9.75947 14.8155C9.90572 14.8911 10.0651 14.9634 10.2377 15.0326C10.6509 15.189 11.1247 15.2672 11.6589 15.2672Z" fill="#637381" />
                                <path d="M21.9128 6.9031C21.4752 6.95695 20.8567 7.00045 20 7.00045C19.3705 7.00045 18.8696 6.97695 18.4746 6.94315C17.6146 6.8695 17.0559 6.21195 17.0228 5.3494C17.0092 4.99245 17 4.54875 17 4.00045C17 3.11398 17.0239 2.50092 17.0522 2.08594C17.0522 2.08594 18.0872 2.08772 20 4.00045C21.9128 5.9132 21.9128 6.9031 21.9128 6.9031Z" fill="#637381" />
                                <path d="M11.6599 15.2672C12.2041 15.2672 12.5972 15.1752 12.8391 14.9912C13.091 14.8072 13.217 14.5817 13.217 14.3149C13.217 14.0757 13.1213 13.8825 12.9298 13.7352C12.7383 13.588 12.4511 13.4592 12.0681 13.3488L11.2365 13.1004C10.8232 12.9807 10.4503 12.8519 10.1177 12.7139C9.7851 12.5759 9.5029 12.4103 9.27105 12.217C9.03925 12.0238 8.8578 11.7938 8.7268 11.527C8.59575 11.2601 8.53025 10.9427 8.53025 10.5746C8.53025 9.94895 8.7419 9.4291 9.16525 9.01505C9.58855 8.601 10.1933 8.32495 10.9795 8.18695V7.7944C10.9795 7.3862 11.2623 7.0214 11.6701 7.00345C11.7225 7.00115 11.7745 7 11.8261 7C12.199 7 12.4661 7.0598 12.6274 7.1794C12.7988 7.29905 12.8844 7.51525 12.8844 7.8281V8.13175C13.5295 8.19615 14.0537 8.33875 14.4568 8.5596C14.86 8.7712 15.0616 9.05185 15.0616 9.4015C15.0616 9.55725 15.0203 9.70145 14.9491 9.8323C14.7594 10.1803 14.2861 10.1546 13.9106 10.0279C13.8032 9.99165 13.688 9.9577 13.5648 9.92595C13.1818 9.81555 12.7635 9.76035 12.3099 9.76035C11.806 9.76035 11.428 9.83855 11.1761 9.995C10.9341 10.1422 10.8132 10.3354 10.8132 10.5746C10.8132 10.7679 10.8938 10.9243 11.0551 11.0439C11.2264 11.1635 11.4834 11.2739 11.8261 11.3751L12.6728 11.6098C13.5799 11.8674 14.2754 12.2078 14.7592 12.6311C15.2531 13.0543 15.5 13.6248 15.5 14.3425C15.5 14.9774 15.2783 15.5157 14.8348 15.9573C14.3913 16.3898 13.7412 16.6796 12.8844 16.8268V17.2056C12.8844 17.6138 12.6016 17.9786 12.1938 17.9965C12.1415 17.9988 12.0894 18 12.0378 18C11.6648 18 11.3928 17.9402 11.2214 17.8206C11.0601 17.7009 10.9795 17.4847 10.9795 17.1719V16.8958C10.2437 16.8222 9.644 16.6612 9.18035 16.4128C8.7268 16.1551 8.5 15.8331 8.5 15.4466C8.5 15.2209 8.58665 15.0249 8.72565 14.8601C8.9745 14.5651 9.4176 14.6382 9.76045 14.8155C9.9067 14.8911 10.0661 14.9634 10.2387 15.0326C10.6519 15.189 11.1257 15.2672 11.6599 15.2672Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Invoice" sx={{ marginLeft: '16px', fontSize: '14px', fontWeight: 500, opacity: opInvoice }} disableTypography />
                            {openInvoice ? <ExpandMore sx={{ opacity: '50%', fontSize: '18px' }} /> : <ChevronRightIcon sx={{ opacity: '50%', fontSize: '18px' }} />}
                        </ListItemButton>
                        <Collapse in={openInvoice} >
                            <List
                                sx={{ width: '100%', paddingLeft: '6px' }}
                                component='nav'
                                aria_labelledby='nested-list'
                            >
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='List' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Details' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>

                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Create' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Edit' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>


                        {/* Blog */}

                        <ListItemButton sx={{ borderRadius: '0.5rem', marginBottom: '0.25rem' }} onClick={handleClickBlog}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g opacity="0.32">
                                    <path d="M21 8H13C12.7348 8 12.4804 7.89464 12.2929 7.70711C12.1054 7.51957 12 7.26522 12 7C12 6.73478 12.1054 6.48043 12.2929 6.29289C12.4804 6.10536 12.7348 6 13 6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8ZM21 12H13C12.7348 12 12.4804 11.8946 12.2929 11.7071C12.1054 11.5196 12 11.2652 12 11C12 10.7348 12.1054 10.4804 12.2929 10.2929C12.4804 10.1054 12.7348 10 13 10H21C21.2652 10 21.5196 10.1054 21.7071 10.2929C21.8946 10.4804 22 10.7348 22 11C22 11.2652 21.8946 11.5196 21.7071 11.7071C21.5196 11.8946 21.2652 12 21 12Z" fill="#637381" />
                                    <path d="M21 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H21C21.2652 14 21.5196 14.1054 21.7071 14.2929C21.8946 14.4804 22 14.7348 22 15C22 15.2652 21.8946 15.5196 21.7071 15.7071C21.5196 15.8946 21.2652 16 21 16ZM13 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19C2 18.7348 2.10536 18.4804 2.29289 18.2929C2.48043 18.1054 2.73478 18 3 18H13C13.2652 18 13.5196 18.1054 13.7071 18.2929C13.8946 18.4804 14 18.7348 14 19C14 19.2652 13.8946 19.5196 13.7071 19.7071C13.5196 19.8946 13.2652 20 13 20Z" fill="#637381" />
                                </g>
                                <rect x="2" y="4" width="8" height="8" rx="2" fill="#637381" />
                            </svg>
                            <ListItemText primary="Blog" sx={{ marginLeft: '16px', fontSize: '14px', fontWeight: 500, opacity: opBlog }} disableTypography />
                            {openBlog ? <ExpandMore sx={{ opacity: '50%', fontSize: '18px' }} /> : <ChevronRightIcon sx={{ opacity: '50%', fontSize: '18px' }} />}
                        </ListItemButton>
                        <Collapse in={openBlog} >
                            <List
                                sx={{ width: '100%', paddingLeft: '6px' }}
                                component='nav'
                                aria_labelledby='nested-list'
                            >
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='List' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Details' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>

                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Create' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Edit' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>

                        {/* Job */}

                        <ListItemButton sx={{ borderRadius: '0.5rem', marginBottom: '0.25rem' }} onClick={handleClickJob}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" d="M2.162 8.5C2 9.603 2 11.05 2 13C2 16.771 2 18.657 3.172 19.828C4.343 21 6.229 21 10 21H14C17.771 21 19.657 21 20.828 19.828C22 18.657 22 16.771 22 13C22 11.05 22 9.603 21.838 8.5C19.561 9.98 18.102 10.923 16.75 11.505V12C16.7511 12.0985 16.7327 12.1962 16.696 12.2876C16.6593 12.379 16.6049 12.4623 16.536 12.5327C16.3968 12.6748 16.2069 12.7559 16.008 12.758C15.8091 12.7601 15.6175 12.6831 15.4753 12.544C15.3332 12.4048 15.2521 12.2149 15.25 12.016C13.1197 12.5776 10.8803 12.5776 8.75 12.016C8.74788 12.2149 8.66683 12.4048 8.52467 12.544C8.38252 12.6831 8.19091 12.7601 7.992 12.758C7.79309 12.7559 7.60317 12.6748 7.46401 12.5327C7.32486 12.3905 7.24788 12.1989 7.25 12V11.504C5.898 10.924 4.44 9.98 2.162 8.5Z" fill="#637381" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.581 2.24999H10.561C10.447 2.24999 10.359 2.24999 10.275 2.25499C9.75542 2.28658 9.25549 2.46498 8.8333 2.76945C8.4111 3.07392 8.084 3.49197 7.88999 3.97499C7.84737 4.08839 7.80736 4.20276 7.76999 4.31799L7.76599 4.32999C7.66284 4.60265 7.48845 4.84265 7.26099 5.02499C7.03399 5.03299 6.81699 5.04199 6.60899 5.05499C4.96499 5.15099 3.92199 5.42099 3.17099 6.17199C2.92699 6.41599 2.73299 6.69199 2.58099 7.00999C2.63945 7.03005 2.69521 7.05726 2.74699 7.09099C4.84699 8.45599 6.16699 9.31099 7.26299 9.85799C7.29767 9.67415 7.3998 9.5099 7.54935 9.39749C7.69889 9.28507 7.88506 9.23261 8.0713 9.25039C8.25753 9.26818 8.4304 9.35493 8.55597 9.49361C8.68154 9.6323 8.75074 9.81291 8.74999 9.99999V10.458C10.87 11.098 13.13 11.098 15.25 10.458V9.99999C15.2505 9.81382 15.3203 9.6345 15.4458 9.49692C15.5712 9.35933 15.7433 9.27332 15.9286 9.25561C16.114 9.2379 16.2993 9.28976 16.4485 9.4011C16.5977 9.51243 16.7002 9.67529 16.736 9.85799C17.833 9.30999 19.153 8.45599 21.253 7.09099C21.3051 7.05722 21.3612 7.03001 21.42 7.00999C21.2719 6.69896 21.0716 6.41554 20.828 6.17199C20.078 5.42199 19.035 5.15199 17.391 5.05399C17.194 5.04299 16.988 5.03399 16.773 5.02599C16.5214 4.82098 16.3271 4.55433 16.209 4.25199L16.205 4.24299C16.169 4.13599 16.141 4.05199 16.11 3.97399C15.9158 3.49116 15.5887 3.07332 15.1665 2.76903C14.7443 2.46474 14.2445 2.28649 13.725 2.25499C13.6297 2.2505 13.5344 2.24883 13.439 2.24999H10.581ZM14.818 4.81599L14.813 4.80499L14.808 4.79299L14.803 4.78099L14.8 4.77099L14.798 4.76599L14.794 4.75399L14.79 4.74199L14.788 4.73599L14.785 4.72799L14.783 4.72099L14.781 4.71499C14.7615 4.65414 14.7405 4.59378 14.718 4.53399C14.6298 4.31442 14.4812 4.12437 14.2893 3.98594C14.0974 3.84751 13.8702 3.76638 13.634 3.75199C13.5624 3.74949 13.4907 3.74882 13.419 3.74999H10.581C10.438 3.74999 10.398 3.74999 10.366 3.75199C10.1298 3.76638 9.90258 3.84751 9.71069 3.98594C9.5188 4.12437 9.37014 4.31442 9.28199 4.53399L9.27899 4.54099L9.27099 4.56199C9.24331 4.63808 9.2173 4.71476 9.19299 4.79199L9.19199 4.79799L9.18899 4.80499L9.18699 4.81299L9.18499 4.81899L9.18099 4.83099L9.17599 4.84299L9.17499 4.84799L9.17099 4.85799L9.16599 4.86999L9.16199 4.88199L9.15699 4.89199C9.14306 4.92829 9.12839 4.9653 9.11299 5.00099L9.99999 4.99999H14.896C14.8676 4.93955 14.8423 4.87818 14.818 4.81599Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Job" sx={{ marginLeft: '16px', fontSize: '14px', fontWeight: 500, opacity: opJob }} disableTypography />
                            {openJob ? <ExpandMore sx={{ opacity: '50%', fontSize: '18px' }} /> : <ChevronRightIcon sx={{ opacity: '50%', fontSize: '18px' }} />}
                        </ListItemButton>
                        <Collapse in={openJob} >
                            <List
                                sx={{ width: '100%', paddingLeft: '6px' }}
                                component='nav'
                                aria_labelledby='nested-list'
                            >
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='List' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Details' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>

                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Create' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Edit' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>


                        {/* Tour */}


                        <ListItemButton sx={{ borderRadius: '0.5rem', marginBottom: '0.25rem' }} onClick={handleClickTour}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" d="M12 22C17.5228 22 22 20.433 22 18.5C22 16.567 17.5228 15 12 15C6.47715 15 2 16.567 2 18.5C2 20.433 6.47715 22 12 22Z" fill="#637381" />
                                <path d="M12 1.25C12.1989 1.25 12.3897 1.32902 12.5303 1.46967C12.671 1.61032 12.75 1.80109 12.75 2V3.036L17.758 5.54L17.812 5.567C18.546 5.934 19.172 6.247 19.608 6.551C20.05 6.86 20.514 7.307 20.514 8C20.514 8.693 20.05 9.14 19.608 9.449C19.172 9.753 18.546 10.066 17.812 10.433L12.75 12.963V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V2C11.25 1.80109 11.329 1.61032 11.4697 1.46967C11.6103 1.32902 11.8011 1.25 12 1.25Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Tour" sx={{ marginLeft: '16px', fontSize: '14px', fontWeight: 500, opacity: opTour }} disableTypography />
                            {openTour ? <ExpandMore sx={{ opacity: '50%', fontSize: '18px' }} /> : <ChevronRightIcon sx={{ opacity: '50%', fontSize: '18px' }} />}
                        </ListItemButton>
                        <Collapse in={openTour} >
                            <List
                                sx={{ width: '100%', paddingLeft: '6px' }}
                                component='nav'
                                aria_labelledby='nested-list'
                            >
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='List' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Details' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>

                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Create' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '0.5rem', paddingLeft: '24px' }}>
                                    <Circle sx={{ fontSize: '6px', opacity: '50%', marginRight: '20px' }} />
                                    <ListItemText primary='Edit' sx={{ opacity: '0.5', fontSize: '14px' }} disableTypography>

                                    </ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>

                        {/* File Manager */}

                        <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" d="M9.4295 3.52977C8.82565 2.82611 7.93185 2.4354 7.01215 2.50878C5.54285 2.626 4.50415 2.78455 3.79502 2.92833C2.94163 3.10136 2.36415 3.78264 2.27276 4.65587C2.14336 5.89235 2 8.11915 2 11.9167C2 15.7144 2.14336 17.9412 2.27276 19.1776C2.36415 20.0509 2.94075 20.7319 3.79413 20.905C5.13115 21.1762 7.6404 21.5 12 21.5C12.9291 21.5 13.7742 21.4853 14.5418 21.4595C14.5349 20.9401 14.5279 20.2894 14.5216 19.4853C14.2858 19.477 14.0907 19.4662 13.9366 19.4557C13.6861 19.4386 13.5 19.229 13.5 18.9779V18.5222C13.5 18.2711 13.6861 18.0616 13.9366 18.0444C14.0886 18.0341 14.2804 18.0234 14.5119 18.0152C14.5087 17.4045 14.5059 16.7294 14.5038 15.9846C14.276 15.9764 14.0869 15.9659 13.9366 15.9557C13.6861 15.9386 13.5 15.729 13.5 15.4779V15.0222C13.5 14.7711 13.6861 14.5616 13.9366 14.5444C14.0862 14.5342 14.2744 14.5238 14.5009 14.5156C14.5003 14.035 14.5 13.5302 14.5 13.0001L14.5001 12.4845C14.2739 12.4763 14.0861 12.4659 13.9366 12.4557C13.6861 12.4386 13.5 12.229 13.5 11.9779V11.5222C13.5 11.2711 13.6861 11.0616 13.9366 11.0444C14.0864 11.0342 14.2747 11.0238 14.5016 11.0156C14.5029 10.28 14.5049 9.60436 14.5073 8.98476C14.2779 8.97651 14.0876 8.96596 13.9366 8.95566C13.6861 8.93856 13.5 8.72896 13.5 8.47791V8.02216C13.5 7.77111 13.6861 7.56156 13.9366 7.54441C14.0892 7.53401 14.2819 7.52336 14.5146 7.51511C14.5197 6.66621 14.5258 5.95346 14.5321 5.35986H15.9679C15.9742 5.95151 15.9802 6.66146 15.9853 7.50661C16.2599 7.51341 16.4658 7.52461 16.6176 7.53641C16.8443 7.55406 17 7.74196 17 7.96931V8.53081C17 8.75816 16.8443 8.94606 16.6176 8.96366C16.4671 8.97536 16.2636 8.98651 15.9927 8.99331C15.9951 9.60816 15.9971 10.2781 15.9984 11.007C16.2664 11.0138 16.4682 11.0248 16.6176 11.0364C16.8443 11.0541 17 11.242 17 11.4693V12.0308C17 12.2582 16.8443 12.4461 16.6176 12.4637C16.4685 12.4753 16.2673 12.4863 15.9999 12.4931L16 13.0001C16 13.527 15.9997 14.029 15.9991 14.507C16.2668 14.5138 16.4683 14.5248 16.6176 14.5364C16.8443 14.5541 17 14.742 17 14.9693V15.5308C17 15.7582 16.8443 15.9461 16.6176 15.9637C16.4678 15.9753 16.2654 15.9864 15.9961 15.9932C15.9941 16.7311 15.9914 17.4006 15.9881 18.0067C16.2613 18.0135 16.4663 18.0247 16.6176 18.0364C16.8443 18.0541 17 18.242 17 18.4693V19.0308C17 19.2582 16.8443 19.4461 16.6176 19.4637C16.4645 19.4756 16.2565 19.4869 15.9784 19.4937C15.9724 20.2611 15.9657 20.8886 15.9591 21.3953C17.9869 21.2777 19.3414 21.0804 20.2059 20.905C21.0592 20.7319 21.6358 20.0509 21.7272 19.1776C21.8566 17.9412 22 15.7144 22 11.9167C22 10.429 21.978 9.1823 21.9435 8.14175C21.8912 6.5679 20.5912 5.35985 19.0301 5.35985H11.9139C11.3335 5.35985 10.7817 5.10545 10.4018 4.66279L9.4295 3.52977Z" fill="#637381" />
                                <path d="M15.9591 21.3953C15.519 21.4209 15.0471 21.4426 14.5418 21.4596C14.5349 20.9402 14.5279 20.2894 14.5216 19.4853C14.2858 19.477 14.0907 19.4662 13.9366 19.4557C13.6861 19.4386 13.5 19.229 13.5 18.9779V18.5222C13.5 18.2711 13.6861 18.0616 13.9366 18.0444C14.0886 18.0341 14.2804 18.0234 14.5119 18.0152C14.5087 17.4045 14.5059 16.7294 14.5038 15.9846C14.276 15.9764 14.0869 15.9659 13.9366 15.9557C13.6861 15.9386 13.5 15.729 13.5 15.4779V15.0222C13.5 14.7711 13.6861 14.5616 13.9366 14.5444C14.0862 14.5342 14.2743 14.5238 14.5009 14.5156C14.5003 14.035 14.5 13.5302 14.5 13.0001L14.5001 12.4845C14.2739 12.4763 14.0861 12.4659 13.9366 12.4557C13.6861 12.4386 13.5 12.229 13.5 11.9779V11.5222C13.5 11.2711 13.6861 11.0616 13.9366 11.0444C14.0864 11.0342 14.2747 11.0238 14.5016 11.0156C14.5029 10.28 14.5049 9.60436 14.5073 8.98476C14.2779 8.97651 14.0876 8.96596 13.9366 8.95566C13.6861 8.93856 13.5 8.72896 13.5 8.47791V8.02216C13.5 7.77111 13.6861 7.56156 13.9366 7.54441C14.0892 7.53401 14.2819 7.52336 14.5146 7.51511C14.5197 6.66621 14.5258 5.95346 14.5321 5.35986H15.9679C15.9742 5.95151 15.9802 6.66146 15.9853 7.50661C16.2599 7.51341 16.4658 7.52461 16.6176 7.53641C16.8443 7.55406 17 7.74196 17 7.96931V8.53081C17 8.75816 16.8443 8.94606 16.6176 8.96366C16.4671 8.97536 16.2636 8.98651 15.9927 8.99331C15.9951 9.60816 15.9971 10.2781 15.9984 11.007C16.2665 11.0138 16.4682 11.0248 16.6176 11.0364C16.8443 11.0541 17 11.242 17 11.4693V12.0308C17 12.2582 16.8443 12.4461 16.6176 12.4637C16.4685 12.4753 16.2672 12.4863 15.9999 12.4931L16 13.0001C16 13.527 15.9997 14.029 15.9991 14.507C16.2668 14.5138 16.4683 14.5248 16.6176 14.5364C16.8443 14.5541 17 14.742 17 14.9693V15.5308C17 15.7582 16.8443 15.9461 16.6176 15.9637C16.4678 15.9753 16.2654 15.9864 15.9961 15.9932C15.9941 16.7311 15.9914 17.4006 15.9881 18.0067C16.2614 18.0135 16.4663 18.0247 16.6176 18.0364C16.8443 18.0541 17 18.242 17 18.4693V19.0308C17 19.2582 16.8443 19.4461 16.6176 19.4637C16.4645 19.4756 16.2565 19.4869 15.9784 19.4937C15.9724 20.2612 15.9657 20.8887 15.9591 21.3953Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="File Manager" sx={{ marginLeft: '16px', fontSize: '14px', opacity: '0.5', fontWeight: 500 }} disableTypography />
                        </ListItemButton>

                        {/* Mail */}

                        <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" d="M4 9.95495V5C4 3.34315 5.34315 2 7 2H17C18.6568 2 20 3.34315 20 5V9.95495C20 10.6097 19.6819 11.2218 19.1343 11.5806C17.4417 12.6896 13.71 15 12 15C10.29 15 6.55835 12.6896 4.86571 11.5806C4.31808 11.2218 4 10.6097 4 9.95495Z" fill="#637381" />
                                <path d="M3.99902 6.251C3.48952 6.62919 3.03925 6.97507 2.67796 7.2576C2.07597 7.72835 1.69861 8.4226 1.64768 9.1851C1.57839 10.2227 1.49902 11.9645 1.49902 14.5C1.49902 16.8978 1.64098 18.5858 1.77362 19.6396C1.88298 20.5085 2.46471 21.1975 3.32241 21.3746C4.69765 21.6585 7.32372 22 11.999 22C16.6743 22 19.3004 21.6585 20.6756 21.3746C21.5333 21.1975 22.1151 20.5085 22.2244 19.6396C22.3571 18.5858 22.499 16.8978 22.499 14.5C22.499 11.9645 22.4197 10.2227 22.3504 9.1851C22.2994 8.4226 21.9221 7.72835 21.3201 7.2576C20.9588 6.97507 20.5085 6.62919 19.999 6.251V9.95495C19.999 10.6097 19.6809 11.2218 19.1333 11.5806C17.4407 12.6896 13.709 15 11.999 15C10.289 15 6.55737 12.6896 4.86473 11.5806C4.3171 11.2218 3.99902 10.6097 3.99902 9.95495V6.251Z" fill="#637381" />
                                <path d="M6.99902 5.75C6.99902 5.3358 7.33482 5 7.74902 5H12.249C12.6632 5 12.999 5.3358 12.999 5.75C12.999 6.1642 12.6632 6.5 12.249 6.5H7.74902C7.33482 6.5 6.99902 6.1642 6.99902 5.75Z" fill="#637381" />
                                <path d="M6.99902 9.25C6.99902 8.8358 7.33482 8.5 7.74902 8.5H15.249C15.6632 8.5 15.999 8.8358 15.999 9.25C15.999 9.6642 15.6632 10 15.249 10H7.74902C7.33482 10 6.99902 9.6642 6.99902 9.25Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Mail" sx={{ marginLeft: '16px', fontSize: '14px', opacity: '0.5', fontWeight: 500 }} disableTypography />
                            <Box sx={{ borderRadius: '0.5rem', color: 'rgb(183, 29, 24)', bgcolor: 'rgba(255, 86, 48, 0.16)', padding: '4px', fontSize: '12px', fontWeight: 700 }}>+32</Box>
                        </ListItemButton>


                        {/* Chat */}

                        <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" fillRule="evenodd" clipRule="evenodd" d="M4.12319 2.24369C5.3177 2.12083 7.30475 2 10.5 2C13.6952 2 15.6823 2.12083 16.8768 2.24369C17.8972 2.34863 18.6398 3.10549 18.7572 4.12444C18.8797 5.18775 19 6.7933 19 9C19 11.2067 18.8797 12.8123 18.7572 13.8756C18.6398 14.8945 17.8973 15.6514 16.877 15.7563C15.822 15.8648 14.1489 15.9717 11.571 15.9952C11.1714 15.9989 10.7875 16.1592 10.507 16.4437L8.816 18.1584C8.08185 18.9029 6.8125 18.4707 6.6853 17.4328L6.55145 16.3414C6.52175 16.099 6.3197 15.9137 6.0759 15.9011C5.26545 15.859 4.62502 15.8079 4.12397 15.7564C3.10365 15.6515 2.36022 14.8945 2.24278 13.8756C2.12023 12.8123 2 11.2067 2 9C2 6.7933 2.12023 5.18775 2.24278 4.12444C2.36022 3.10549 3.10287 2.34863 4.12319 2.24369ZM7 6C6.4477 6 6 6.4477 6 7C6 7.5523 6.4477 8 7 8H14C14.5523 8 15 7.5523 15 7C15 6.4477 14.5523 6 14 6H7ZM7 10.5C6.4477 10.5 6 10.9477 6 11.5C6 12.0523 6.4477 12.5 7 12.5H11C11.5523 12.5 12 12.0523 12 11.5C12 10.9477 11.5523 10.5 11 10.5H7Z" fill="#637381" />
                                <path d="M5.99925 7C5.99925 6.4477 6.44695 6 6.99925 6H13.9993C14.5516 6 14.9993 6.4477 14.9993 7C14.9993 7.5523 14.5516 8 13.9993 8H6.99925C6.44695 8 5.99925 7.5523 5.99925 7Z" fill="#637381" />
                                <path d="M5.99925 11.5C5.99925 10.9477 6.44695 10.5 6.99925 10.5H10.9993C11.5516 10.5 11.9993 10.9477 11.9993 11.5C11.9993 12.0523 11.5516 12.5 10.9993 12.5H6.99925C6.44695 12.5 5.99925 12.0523 5.99925 11.5Z" fill="#637381" />
                                <path d="M10.0259 16.9308L10.5063 16.4437C10.7868 16.1592 11.1707 15.9989 11.5703 15.9952C14.1481 15.9717 15.8213 15.8648 16.8763 15.7563C17.8966 15.6514 18.6391 14.8945 18.7565 13.8755C18.8365 13.1809 18.9156 12.2547 18.9608 11.0808C19.4676 11.1109 19.8667 11.1462 20.1775 11.1811C20.803 11.2514 21.2617 11.7033 21.3395 12.3279C21.4208 12.9808 21.4993 13.9995 21.4993 15.5C21.4993 17.0005 21.4208 18.0192 21.3395 18.6721C21.2617 19.2967 20.8024 19.7486 20.1769 19.8189C19.7588 19.8659 19.1811 19.9136 18.3964 19.9483C18.1644 19.9585 17.9675 20.1252 17.9226 20.3531L17.7519 21.219C17.6399 21.7868 16.9541 22.0192 16.52 21.6364L15.0714 20.3589C14.8031 20.1223 14.4578 19.9901 14.1001 19.9816C12.7852 19.9504 11.9012 19.884 11.3225 19.819C10.697 19.7488 10.2369 19.2967 10.1591 18.6721C10.1068 18.2528 10.0558 17.6826 10.0259 16.9308Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Chat" sx={{ marginLeft: '16px', fontSize: '14px', opacity: '0.5', fontWeight: 500 }} disableTypography />
                        </ListItemButton>



                        {/* Calendar */}

                        <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" fillRule="evenodd" clipRule="evenodd" d="M2.12411 8H21.8758C21.9467 9.20109 22 10.8266 22 13C22 16.4843 21.8631 18.5605 21.7362 19.7371C21.6422 20.6088 21.0518 21.281 20.1903 21.4442C18.8494 21.6983 16.3428 22 12 22C7.65725 22 5.15055 21.6983 3.80967 21.4442C2.94826 21.281 2.35785 20.6088 2.26379 19.7371C2.13682 18.5605 2 16.4843 2 13C2 10.8266 2.05324 9.20109 2.12411 8ZM6.5 12.6815C6.5 12.0806 6.93315 11.6082 7.5337 11.5868C8.3136 11.559 9.6669 11.5275 12 11.5069C14.5069 11.4848 15.8826 11.5197 16.6312 11.5599C17.1554 11.5881 17.5 11.9946 17.5 12.5196V12.9107C17.5 13.4726 17.1157 13.9093 16.5543 13.934C15.7898 13.9675 14.4235 14 12 14C9.5765 14 8.21025 13.9675 7.44565 13.934C6.88435 13.9093 6.5 13.4726 6.5 12.9107V12.6815ZM6.5 17.0891C6.5 16.5276 6.8844 16.0793 7.44515 16.0503C7.97275 16.0231 8.7795 16.0001 10 16.0001C11.2205 16.0001 12.0272 16.0231 12.5548 16.0503C13.1156 16.0793 13.5 16.5276 13.5 17.0891V17.4111C13.5 17.9726 13.1156 18.4208 12.5548 18.4498C12.0272 18.4771 11.2205 18.5001 10 18.5001C8.7795 18.5001 7.97275 18.4771 7.44515 18.4498C6.8844 18.4208 6.5 17.9726 6.5 17.4111V17.0891Z" fill="#637381" />
                                <path d="M17.915 2.03126C18.2276 2.05703 18.4424 2.28598 18.4636 2.59889C18.4831 2.88636 18.5 3.32917 18.5 4C18.5 4.10776 18.4995 4.20964 18.4987 4.30593C19.1999 4.38632 19.7561 4.47356 20.1902 4.55581C21.0516 4.71901 21.642 5.39115 21.7361 6.26285C21.7839 6.7055 21.833 7.27555 21.8758 8H2.12402C2.16677 7.27555 2.21593 6.7055 2.2637 6.26285C2.35776 5.39115 2.94817 4.71902 3.80958 4.55581C4.24369 4.47355 4.8 4.3863 5.50125 4.30591C5.50045 4.20962 5.5 4.10775 5.5 4C5.5 3.32917 5.5169 2.88636 5.5364 2.59889C5.5576 2.28598 5.7724 2.05703 6.08495 2.03126C6.29765 2.01372 6.5938 2 7 2C7.4062 2 7.70235 2.01372 7.91505 2.03126C8.2276 2.05703 8.4424 2.28598 8.4636 2.59889C8.4831 2.88636 8.5 3.32917 8.5 4C8.5 4.0254 8.5 4.05047 8.49995 4.07521C9.50645 4.02844 10.6666 4 11.9999 4C13.3332 4 14.4935 4.02845 15.5 4.07522L15.5 4C15.5 3.32917 15.5169 2.88636 15.5364 2.59889C15.5576 2.28598 15.7724 2.05703 16.0849 2.03126C16.2976 2.01372 16.5938 2 17 2C17.4062 2 17.7023 2.01372 17.915 2.03126Z" fill="#637381" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.5337 11.5868C6.93315 11.6081 6.5 12.0805 6.5 12.6815V12.9107C6.5 13.4725 6.88435 13.9093 7.44565 13.9339C8.21025 13.9674 9.5765 14 12 14C14.4235 14 15.7897 13.9674 16.5543 13.9339C17.1156 13.9093 17.5 13.4725 17.5 12.9107V12.5196C17.5 11.9946 17.1554 11.5881 16.6312 11.5599C15.8825 11.5196 14.5069 11.4847 12 11.5069C9.6669 11.5274 8.3136 11.559 7.5337 11.5868ZM7.44515 16.0503C6.8844 16.0793 6.5 16.5275 6.5 17.089V17.411C6.5 17.9725 6.8844 18.4208 7.44515 18.4498C7.97275 18.477 8.7795 18.5 10 18.5C11.2205 18.5 12.0272 18.477 12.5548 18.4498C13.1156 18.4208 13.5 17.9725 13.5 17.411V17.089C13.5 16.5275 13.1156 16.0793 12.5548 16.0503C12.0272 16.023 11.2205 16 10 16C8.7795 16 7.97275 16.023 7.44515 16.0503Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Calendar" sx={{ marginLeft: '16px', fontSize: '14px', opacity: '0.5', fontWeight: 500 }} disableTypography />
                        </ListItemButton>

                        {/* Kanban */}

                        <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.32" d="M22 10.5C22 13.2058 21.9268 15.3259 21.8596 16.7018C21.8139 17.6385 20.9066 18.311 19.9771 18.1857C18.4531 17.9803 15.8791 17.75 12 17.75C8.1209 17.75 5.54695 17.9803 4.02285 18.1857C3.09341 18.311 2.18614 17.6385 2.14039 16.7018C2.07321 15.3259 2 13.2058 2 10.5C2 7.79427 2.07321 5.67417 2.14039 4.29829C2.18614 3.36156 3.09341 2.68909 4.02285 2.81433C5.54695 3.0197 8.1209 3.25002 12 3.25002C15.8791 3.25002 18.4531 3.0197 19.9771 2.81433C20.9066 2.68909 21.8139 3.36156 21.8596 4.29829C21.9268 5.67417 22 7.79427 22 10.5Z" fill="#637381" />
                                <path d="M5.59096 18.0097C5.28385 18.7424 4.94579 19.6106 4.65668 20.5001C4.5685 20.7714 4.73269 21.0577 5.01662 21.0853C5.48092 21.1304 5.97612 21.1092 6.35562 21.0767C6.76872 21.0413 7.13172 20.805 7.35657 20.4567C7.94702 19.5421 8.51881 18.5894 8.97868 17.8008C7.63073 17.8484 6.50815 17.9246 5.59096 18.0097Z" fill="#637381" />
                                <path d="M15.022 17.8009C15.4818 18.5895 16.0536 19.5421 16.6441 20.4567C16.8689 20.805 17.2319 21.0413 17.645 21.0767C18.0245 21.1092 18.5197 21.1304 18.984 21.0853C19.268 21.0577 19.4321 20.7714 19.344 20.5001C19.0549 19.6106 18.7168 18.7424 18.4097 18.0097C17.4925 17.9247 16.37 17.8484 15.022 17.8009Z" fill="#637381" />
                            </svg>
                            <ListItemText primary="Kanban" sx={{ marginLeft: '16px', fontSize: '14px', opacity: '0.5', fontWeight: 500 }} disableTypography />
                        </ListItemButton>


                    </List>
                </Collapse>


                <Box sx={{ width: '100%', padding: '40px 0 80px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>


                    <Avatar alt="Remy Sharp" src='/avatar_25.jpg' />
                    <Badge color="success" overlap="circular" badgeContent="Free" anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }} sx={{ transform: 'translate(10%,-10%)' }}>
                    </Badge>

                    <Typography sx={{ width: '100%', textAlign: 'center', marginTop: '10px', fontWeight: 600, fontSize: '14px' }}>
                        Aria Aghakhani
                    </Typography>
                    <Typography sx={{ width: '100%', textAlign: 'center', marginTop: '10px', opacity: '0.5', fontSize: '12px', fontWeight: 500, marginBottom: '24px' }}>
                        contact@dev-aria.com
                    </Typography>
                    
                    <Box sx={{padding:'10px', background:'black',color:'white',cursor:'pointer', borderRadius:'0.5rem',fontSize:'12px',fontWeight:500,":hover":{
                        opacity:'0.8'
                    }}}>
                        Upgrade to Basic
                    </Box>
                </Box>


            </section>
        </>
    );
}

