import { Box, List, ListItem, Rating, Typography } from '@mui/material'
import React from 'react'

import chrome from '../public/top-chrome.svg'
import drive from '../public/top-drive.svg'
import drop from '../public/top-drop.svg'
import ever from '../public/top-ever.svg'
import git from '../public/top-git.svg'
import Image from 'next/image'

function Top() {
    return (
        <>
            <List sx={{ padding: '0 0.5rem',minWidth:'250px',overflowX:'scroll'}}>

                {/* Chrome */}

                <ListItem sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{ bgcolor: 'rgb(244,246,248)', borderRadius: '0.5rem', mr: 1, display:'flex', justifyContent:'center',alignItems:'center'}} width={40} height={40}>
                        <Image src={chrome} alt="Chrome" width={24} height={24} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '150px' }}>
                        <Typography width={100} sx={{ fontWeight: '700', fontSize: '14px' }}>Chrome</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="14px" height="14px" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="m13.064 6.685l.745-.306c.605-.24 1.387-.485 2.31-.33c1.891.318 3.195 1.339 3.972 2.693c.3.522.058 1.21-.502 1.429a2.501 2.501 0 0 0 .133 4.706c.518.17.81.745.64 1.263c-.442 1.342-1.078 2.581-1.831 3.581c-.744.988-1.652 1.808-2.663 2.209c-.66.26-1.368.163-2.045-.005l-.402-.107l-.597-.173c-.271-.079-.55-.147-.824-.147c-.275 0-.553.068-.824.147l-.597.173l-.402.107c-.677.168-1.386.266-2.045.005c-1.273-.504-2.396-1.68-3.245-3.067a13.453 13.453 0 0 1-1.784-4.986c-.227-1.554-.104-3.299.615-4.775c.74-1.521 2.096-2.705 4.163-3.053c.84-.141 1.562.048 2.14.265l.331.13l.584.241c.4.157.715.249 1.064.249c.348 0 .664-.092 1.064-.249m-1.296-3.917c.976-.977 2.475-1.061 2.828-.707c.354.353.27 1.852-.707 2.828c-.976.976-2.475 1.06-2.828.707c-.354-.353-.27-1.852.707-2.828"></path></g></svg>
                            <Typography sx={{ fontSize: '12px', margin: '0 0.5rem' }}>Mac</Typography>
                            <Box sx={{ fontSize: '12px', fontWeight: 700, color: 'rgb(17,141,87)', bgcolor: 'rgba(34,197,94,0.16)', padding: '5px', borderRadius: '0.5rem' }}>Free</Box>
                        </Box>
                    </Box>
                    <Box>
                        <Rating readOnly defaultValue={4} precision={0.5} size='small'/>
                        <Typography align='right' fontSize='12px' color='rgb(99,115,129)'>9.91k reviews</Typography>
                    </Box>
                </ListItem>

                {/* Drive  */}


                <ListItem sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{ bgcolor: 'rgb(244,246,248)', borderRadius: '0.5rem', mr: 1, display:'flex', justifyContent:'center',alignItems:'center'}} width={40} height={40}>
                        <Image src={drive} alt="Drive" width={24} height={24} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '150px' }}>
                        <Typography width={100} sx={{ fontWeight: '700', fontSize: '14px' }}>Drive</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="14px" height="14px" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="m13.064 6.685l.745-.306c.605-.24 1.387-.485 2.31-.33c1.891.318 3.195 1.339 3.972 2.693c.3.522.058 1.21-.502 1.429a2.501 2.501 0 0 0 .133 4.706c.518.17.81.745.64 1.263c-.442 1.342-1.078 2.581-1.831 3.581c-.744.988-1.652 1.808-2.663 2.209c-.66.26-1.368.163-2.045-.005l-.402-.107l-.597-.173c-.271-.079-.55-.147-.824-.147c-.275 0-.553.068-.824.147l-.597.173l-.402.107c-.677.168-1.386.266-2.045.005c-1.273-.504-2.396-1.68-3.245-3.067a13.453 13.453 0 0 1-1.784-4.986c-.227-1.554-.104-3.299.615-4.775c.74-1.521 2.096-2.705 4.163-3.053c.84-.141 1.562.048 2.14.265l.331.13l.584.241c.4.157.715.249 1.064.249c.348 0 .664-.092 1.064-.249m-1.296-3.917c.976-.977 2.475-1.061 2.828-.707c.354.353.27 1.852-.707 2.828c-.976.976-2.475 1.06-2.828.707c-.354-.353-.27-1.852.707-2.828"></path></g></svg>
                            <Typography sx={{ fontSize: '12px', margin: '0 0.5rem' }}>Mac</Typography>
                            <Box sx={{ fontSize: '12px', fontWeight: 700, color: 'rgb(17,141,87)', bgcolor: 'rgba(34,197,94,0.16)', padding: '5px', borderRadius: '0.5rem' }}>Free</Box>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'end'}}>
                        <Rating readOnly defaultValue={3.5} precision={0.5} size='small'/>
                        <Typography align='right' fontSize='12px' color='rgb(99, 115, 129)'>1.95k reviews</Typography>
                    </Box>
                </ListItem>


                {/* Dropbox */}

                <ListItem sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{ bgcolor: 'rgb(244,246,248)', borderRadius: '0.5rem', mr: 1, display:'flex', justifyContent:'center',alignItems:'center'}} width={40} height={40}>
                        <Image src={drop} alt="Dropbox" width={24} height={24} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '150px' }}>
                        <Typography width={100} sx={{ fontWeight: '700', fontSize: '14px' }}>Dropbox</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  width="14px" height="14px" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M21 13v7.434a1.5 1.5 0 0 1-1.553 1.499l-.133-.011L12 21.008V13zm-11 0v7.758l-5.248-.656A2 2 0 0 1 3 18.117V13zm9.314-10.922a1.5 1.5 0 0 1 1.68 1.355l.006.133V11h-9V2.992zM10 3.242V11H3V5.883a2 2 0 0 1 1.752-1.985z"></path></g></svg>

                            <Typography sx={{ fontSize: '12px', margin: '0 0.5rem' }}>Windows</Typography>
                            <Box sx={{ fontSize: '12px', fontWeight: 700, color: 'rgb(183,29,24)', bgcolor: 'rgba(255,86,48,0.16)', padding: '5px', borderRadius: '0.5rem' }}>$68.71</Box>
                        </Box>
                    </Box>
                    <Box>
                        <Rating readOnly defaultValue={4.5} precision={0.5} size='small'/>
                        <Typography align='right' fontSize='12px' color='rgb(99, 115, 129)'>9.12k reviews</Typography>
                    </Box>
                </ListItem>


                {/* Evernote */}


                <ListItem sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{ bgcolor: 'rgb(244,246,248)', borderRadius: '0.5rem', mr: 1 , display:'flex', justifyContent:'center',alignItems:'center'}} width={40} height={40}>
                        <Image src={ever} alt="Evernote" width={24} height={24} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '150px' }}>
                        <Typography width={100} sx={{ fontWeight: '700', fontSize: '14px' }}>Evernote</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="14px" height="14px" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="m13.064 6.685l.745-.306c.605-.24 1.387-.485 2.31-.33c1.891.318 3.195 1.339 3.972 2.693c.3.522.058 1.21-.502 1.429a2.501 2.501 0 0 0 .133 4.706c.518.17.81.745.64 1.263c-.442 1.342-1.078 2.581-1.831 3.581c-.744.988-1.652 1.808-2.663 2.209c-.66.26-1.368.163-2.045-.005l-.402-.107l-.597-.173c-.271-.079-.55-.147-.824-.147c-.275 0-.553.068-.824.147l-.597.173l-.402.107c-.677.168-1.386.266-2.045.005c-1.273-.504-2.396-1.68-3.245-3.067a13.453 13.453 0 0 1-1.784-4.986c-.227-1.554-.104-3.299.615-4.775c.74-1.521 2.096-2.705 4.163-3.053c.84-.141 1.562.048 2.14.265l.331.13l.584.241c.4.157.715.249 1.064.249c.348 0 .664-.092 1.064-.249m-1.296-3.917c.976-.977 2.475-1.061 2.828-.707c.354.353.27 1.852-.707 2.828c-.976.976-2.475 1.06-2.828.707c-.354-.353-.27-1.852.707-2.828"></path></g></svg>
                            <Typography sx={{ fontSize: '12px', margin: '0 0.5rem' }}>Mac</Typography>
                            <Box sx={{ fontSize: '12px', fontWeight: 700, color: 'rgb(17,141,87)', bgcolor: 'rgba(34,197,94,0.16)', padding: '5px', borderRadius: '0.5rem' }}>Free</Box>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'end'}}>
                        <Rating readOnly defaultValue={3.5} precision={0.5} size='small'/>
                        <Typography align='right' fontSize='12px' color='rgb(99, 115, 129)'>6.98k reviews</Typography>
                    </Box>
                </ListItem>


                {/* Github */}

                <ListItem sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{ bgcolor: 'rgb(244,246,248)', borderRadius: '0.5rem', mr: 1 , display:'flex', justifyContent:'center',alignItems:'center'}} width={40} height={40}>
                        <Image src={git} alt="Github" width={24} height={24}/>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '150px' }}>
                        <Typography width={100} sx={{ fontWeight: '700', fontSize: '14px' }}>Github</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  width="14px" height="14px" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M21 13v7.434a1.5 1.5 0 0 1-1.553 1.499l-.133-.011L12 21.008V13zm-11 0v7.758l-5.248-.656A2 2 0 0 1 3 18.117V13zm9.314-10.922a1.5 1.5 0 0 1 1.68 1.355l.006.133V11h-9V2.992zM10 3.242V11H3V5.883a2 2 0 0 1 1.752-1.985z"></path></g></svg>

                            <Typography sx={{ fontSize: '12px', margin: '0 0.5rem' }}>Windows</Typography>
                            <Box sx={{ fontSize: '12px', fontWeight: 700, color: 'rgb(183,29,24)', bgcolor: 'rgba(255,86,48,0.16)', padding: '5px', borderRadius: '0.5rem' }}>$52.17</Box>
                        </Box>
                    </Box>
                    <Box>
                        <Rating readOnly defaultValue={0.5} precision={0.5} size='small'/>
                        <Typography align='right' fontSize='12px' color='rgb(99, 115, 129)'>8.49k reviews</Typography>
                    </Box>
                </ListItem>

            </List>
        </>
    )
}

export default Top