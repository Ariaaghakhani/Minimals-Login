import { Box, List, ListItem, Paper, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { Icon } from '@iconify/react';

export default function Country() {
    return (
        // <Box sx={{ padding: '0rem 0.5rem', pb: '1rem', minWidth: '500px' }}>


        <List sx={{ padding: '0rem 0.5rem', pb: '1rem', minWidth: '500px',height:'fit-content' }}>
            {/* Germany */}
            <ListItem sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5, minWidth: '100px' }}>
                    <Box sx={{ borderRadius: '0.125rem', overflow: 'hidden', mr: 1 }}><Icon icon="flagpack:de" width={24} /></Box>
                    <Typography fontWeight={700} fontSize={14} color={'#000'}>Germany</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5 }}>
                    <Icon icon="basil:android-solid" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>9.91k</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5 }}>
                    <Icon icon="ri:windows-fill" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>1.95k</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                    <Icon icon="mdi:apple" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>1.95k</Typography>
                </Box>
            </ListItem>


            {/* England */}

            <ListItem sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5, minWidth: '100px' }}>
                    <Box sx={{ borderRadius: '0.125rem', overflow: 'hidden', mr: 1 }}><Icon icon="flagpack:gb-ukm" width={24} /></Box>
                    <Typography fontWeight={700} fontSize={14} color={'#000'}>England</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5 }}>
                    <Icon icon="basil:android-solid" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>1.95k</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5 }}>
                    <Icon icon="ri:windows-fill" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>9.12k</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                    <Icon icon="mdi:apple" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>9.12k</Typography>
                </Box>
            </ListItem>


            {/* France */}

            <ListItem sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5, minWidth: '100px' }}>
                    <Box sx={{ borderRadius: '0.125rem', overflow: 'hidden', mr: 1 }}><Icon icon="flagpack:fr" width={24} /></Box>
                    <Typography fontWeight={700} fontSize={14} color={'#000'}>France</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5 }}>
                    <Icon icon="basil:android-solid" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>9.12k</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5 }}>
                    <Icon icon="ri:windows-fill" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>6.98k</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                    <Icon icon="mdi:apple" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>6.98k</Typography>
                </Box>
            </ListItem>


            {/* Korea */}

            <ListItem sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5, minWidth: '100px' }}>
                    <Box sx={{ borderRadius: '0.125rem', overflow: 'hidden', mr: 1 }}><Icon icon="flagpack:kr" width={24} /></Box>
                    <Typography fontWeight={700} fontSize={14} color={'#000'}>Korea</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5 }}>
                    <Icon icon="basil:android-solid" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>6.98k</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5 }}>
                    <Icon icon="ri:windows-fill" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>8.49k</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                    <Icon icon="mdi:apple" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>8.49k</Typography>
                </Box>
            </ListItem>


            {/* USA */}

            <ListItem sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5, minWidth: '100px' }}>
                    <Box sx={{ borderRadius: '0.125rem', overflow: 'hidden', mr: 1 }}><Icon icon="flagpack:us" width={24} /></Box>
                    <Typography fontWeight={700} fontSize={14} color={'#000'}>USA</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5 }}>
                    <Icon icon="basil:android-solid" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>8.49k</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 5 }}>
                    <Icon icon="ri:windows-fill" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>2.03k</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                    <Icon icon="mdi:apple" color='rgb(145, 158, 171)' />
                    <Typography fontSize={14} sx={{ ml: 1 }} color={'#000'}>2.03k</Typography>
                </Box>
            </ListItem>
        </List>
        // </Box>
    )
}

