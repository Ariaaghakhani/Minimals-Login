'use client'

import { Box, Button, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import React from 'react'
import { NoSsr } from '@mui/base/NoSsr';
import Embla from '../../../component/slider/src/js/Index'
import Colchart from '../../../component/colchart'
import Top from '../../../component/topApps'
import Country from '../../../component/country';
import Card from '../../../component/card';
import dynamic from 'next/dynamic';
import Author from '../../../component/author';

const Piechart = dynamic(() => import('../../../component/piechart'), { ssr: false })
const Linechart = dynamic(() => import('../../../component/linechart'), { ssr: false })
const Invoice = dynamic(() => import('../../../component/Invoice'), { ssr: false })
const Progress = dynamic(() => import('./../../../component/progressPie'), { ssr: false })







function page() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '1rem',
    height: '100%',
    overflow: 'hidden',
    boxShadow: '5px 5px 10px 0.1px #a0a0a08c'
  }));




  return (
    <>
      <div className='pt-[100px] bg-white px-4 md:px-12 w-full h-full overflow-x-hidden'>
        <Box sx={{ width: '100%', display: 'grid' }}>
          <Grid container spacing={3} mb={12}>
            <Grid item xs={12} md={8} >
              <Item sx={{ boxShadow: '2px_2px_10px_10px_rgba(black,1)' }}>
                <Card />
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ background: 'black' }}>
                <Embla />
              </Item>
            </Grid>

            <Grid item xs={12} md={4}>
              <Item>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column', padding: '1.5rem', justifyContent: 'start' }}>
                    <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: '600', color: 'black', mb: 2 }}>Total Active Users</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24px" height="24px" viewBox="0 0 24 24"><path fill="rgb(0,167,111)" d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z" opacity=".5"></path><path fill="rgb(0,167,111)" fillRule="evenodd" d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057" clipRule="evenodd"></path></svg>
                      <Typography sx={{ ml: 1, fontWeight: 600 }}>+2.6%</Typography>
                    </Box>
                    <Typography sx={{ textAlign: 'left', fontSize: '32px', fontWeight: '700', color: 'black' }}>18,765</Typography>
                  </Box>
                  <Box sx={{ width: '50%' }}>
                    <Colchart _color='#13D8AA' />
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                <Box sx={{ display: 'flex' }}>
                  <Box sx={{ width: '80%' }}>
                    <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column', padding: '1.5rem', justifyContent: 'start' }}>
                      <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: '600', color: 'black', mb: 2 }}>Total Installed</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24px" height="24px" viewBox="0 0 24 24"><path fill="rgb(0,167,111)" d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z" opacity=".5"></path><path fill="rgb(0,167,111)" fillRule="evenodd" d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057" clipRule="evenodd"></path></svg>
                        <Typography sx={{ ml: 1, fontWeight: 600 }}>+0.2%</Typography>
                      </Box>
                      <Typography sx={{ textAlign: 'left', fontSize: '32px', fontWeight: '700', color: 'black' }}>4,876</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: '50%' }}>
                    <Colchart _color='#69D2E7' _data={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]} />
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                <Box sx={{ display: 'flex' }}>
                  <Box sx={{ width: '80%' }}>
                    <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column', padding: '1.5rem', justifyContent: 'start' }}>
                      <Typography sx={{ textAlign: 'left', fontSize: '14px', fontWeight: '600', color: 'black', mb: 2 }}>Total Downloads</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24px" height="24px" viewBox="0 0 24 24"><path fill="rgb(255,86,48)" d="M5 6.25a.75.75 0 0 0-.488 1.32l7 6c.28.24.695.24.976 0l7-6A.75.75 0 0 0 19 6.25z" opacity=".5"></path><path fill="rgb(255,86,48)" fillRule="evenodd" d="M4.43 10.512a.75.75 0 0 1 1.058-.081L12 16.012l6.512-5.581a.75.75 0 1 1 .976 1.139l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.058" clipRule="evenodd"></path></svg>
                        <Typography sx={{ ml: 1, fontWeight: 600 }}>-0.1%</Typography>
                      </Box>
                      <Typography sx={{ textAlign: 'left', fontSize: '32px', fontWeight: '700', color: 'black' }}>678</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: '50%' }}>
                    <Colchart _color='#F9CE1D' _data={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]} />
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ pb: 8 }}>
                <Typography sx={{ padding: '1.5rem', fontSize: '18px', fontWeight: 700, color: 'black', textAlign: 'left' }}>
                  Current Download
                </Typography>
                <NoSsr>
                  <Piechart />
                </NoSsr>
              </Item>
            </Grid>
            <Grid item xs={12} md={8}>
              <Item sx={{ pb: 8 }}>
                <Typography sx={{ padding: '1.5rem', fontSize: '18px', fontWeight: 700, color: 'black', textAlign: 'left' }}>
                  Area Installed
                </Typography>
                <Linechart />
              </Item>
            </Grid>
            <Grid item xs={12} md={12} lg={8}>
              <Item>
                <Typography sx={{ padding: '1.5rem', fontSize: '18px', fontWeight: 700, color: 'black', textAlign: 'left' }}>
                  New Invoice
                </Typography>
                <Box sx={{ overflowX: 'scroll' }} >
                  <Invoice />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item sx={{ pb: '1.5rem' }}>
                <Typography sx={{ padding: '1.5rem ', fontSize: '18px', fontWeight: 700, color: 'black', textAlign: 'left' }}>
                  Top Related Applications
                </Typography>
                <Top />
              </Item>
            </Grid>

            <Grid item xs={12} md={6} lg={4}  >
              <Item >
                <Typography sx={{ padding: '1.5rem ', fontSize: '18px', fontWeight: 700, color: 'black', textAlign: 'left', width: 'fit-content' }}>
                  Top Installed Countries
                </Typography>
                <Box sx={{ overflowX: 'scroll' }} >
                  <Country />
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={4} >
              <Item>
                <Typography sx={{ paddingTop: '1.5rem ', paddingLeft: '1.5rem', fontSize: '18px', fontWeight: 700, color: 'black', textAlign: 'left' }}>
                  Top Authors
                </Typography>
                <Author />
              </Item>
            </Grid>

            <Grid container item xs={12} md={4} direction={'row'}>
              <Grid sx={{ width: '100%' }}>
                <Item sx={{ mb: 3, backgroundColor: 'rgb(0,120,103)', height: 130, display: 'flex', justifyContent: 'start', alignItems: 'center', position: 'relative' }}>
                  <Box width={140} height={120} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Progress color={'#00E396'} percent={48} />
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', height: '100%', alignContent: 'center', pl: 1 }}>
                    <Typography color={'white'} align='left' fontSize={24} fontWeight={700} width={'100%'}>38,566</Typography>
                    <Typography color={'white'} align='left' fontSize={14} fontWeight={500} width={'100%'} sx={{ opacity: '0.5' }}>Conversion</Typography>
                  </Box>
                  <Box sx={{ position: 'absolute', right: '-10%' }}>
                    <svg opacity={0.08} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="120px" height="120px" viewBox="0 0 24 24"><circle cx="12" cy="6" r="4" fill="#fff"></circle><ellipse cx="12" cy="17" fill="#fff" rx="7" ry="4"></ellipse></svg>
                  </Box>
                </Item>

                <Item sx={{ height: 130, backgroundColor: 'rgb(0, 108, 156)', display: 'flex', justifyContent: 'start', alignItems: 'center', position: 'relative' }}>
                  <Box width={140} height={120} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Progress color={'#00B1F2'} percent={75} />
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', height: '100%', alignContent: 'center', pl: 1 }}>
                    <Typography color={'white'} align='left' fontSize={24} fontWeight={700} width={'100%'}>55,566</Typography>
                    <Typography color={'white'} align='left' fontSize={14} fontWeight={500} width={'100%'} sx={{ opacity: '0.5' }}>Applications</Typography>
                  </Box>
                  <Box sx={{ position: 'absolute', right: '-10%' }}>
                    <svg opacity={0.08} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="120px" height="120px" viewBox="0 0 24 24"><path fill="#fff" d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0zM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919zh13.5z"></path></svg>
                  </Box>
                </Item>
              </Grid>
            </Grid>

          </Grid>
        </Box>
      </div>
    </>
  )
}

export default page