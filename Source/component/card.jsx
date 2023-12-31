'use client'
import React from 'react'
import CardLG from './cardLG';
import CardSM from './cardSM';
import { styled } from '@mui/material';

export default function Card() {

    const SmallScreen = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    }));
    const LargeScreen = styled('div')(({ theme }) => ({
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }));
    return (
        <>
        <SmallScreen>
            <CardLG />
        </SmallScreen>
        <LargeScreen>
            <CardSM/>
        </LargeScreen>
        </>
    )
}

