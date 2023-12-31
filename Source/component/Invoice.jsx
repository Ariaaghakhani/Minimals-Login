'use client'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { CloudDownload, Download } from '@mui/icons-material';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



function createData(invId, category, price, status, color, bg) {
  return { invId, category, price, status, color, bg };
}

const rows = [
  createData('INV-1990', 'Android', '$83.74', 'Paid', 'rgb(17, 141, 87);', 'rgba(34, 197, 94, 0.16);'),
  createData('INV-1991', 'Mac', '$97.14', 'Out Of Date', 'rgb(183,29,24)', 'rgba(255,86,48,0.16)'),
  createData('INV-1992', 'Windows', '$68.71', 'Progress', 'rgb(183, 110, 0);', 'rgba(255, 171, 0, 0.16);'),
  createData('INV-1993', 'Android', '$85.21', 'Paid', 'rgb(17, 141, 87);', 'rgba(34, 197, 94, 0.16);'),
  createData('INV-1994', 'Mac', '$52.17', 'Paid', 'rgb(17, 141, 87);', 'rgba(34, 197, 94, 0.16);')
]




export default function BasicTable() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'rgb(244,246,248)', color: 'rgb(99,115,129)' }}>
              <TableCell sx={{ fontWeight: 700, color: 'rgb(99,115,129)' }}>Invoice ID</TableCell>
              <TableCell sx={{ fontWeight: 700, color: 'rgb(99,115,129)' }} align="left">Category</TableCell>
              <TableCell sx={{ fontWeight: 700, color: 'rgb(99,115,129)' }} align="left">Price</TableCell>
              <TableCell sx={{ fontWeight: 700, color: 'rgb(99,115,129)', width: 'fit-content' }} align="left">Status</TableCell>
              <TableCell sx={{ fontWeight: 700, color: 'rgb(99,115,129)', width: 'fit-content' }} align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.invId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
              >

                <TableCell sx={{ border: 'none' }} component="th" scope="row">{row.invId}</TableCell>
                <TableCell sx={{ border: 'none' }} align="left">{row.category}</TableCell>
                <TableCell sx={{ border: 'none' }} align="left">{row.price}</TableCell>
                <TableCell sx={{ border: 'none', width: 'fit-content' }} align="left">
                  <Box sx={{ display: 'flex', borderRadius: '0.5rem', color: `${row.color}`, bgcolor: `${row.bg}`, padding: '5px', fontSize: '12px', fontWeight: 700, width: 'fit-content' }}>
                    {row.status}
                  </Box>
                </TableCell>
                <TableCell sx={{ border: 'none' }} align='right'>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" opacity={0.5} width="20px" height="20px" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" fill="rgb(99,115,129);"></circle><circle cx="12" cy="5" r="2" fill="rgb(99,115,129);"></circle><circle cx="12" cy="19" r="2" fill="rgb(99,115,129);"></circle></svg>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                    className='shadow-none'

                  >
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon  >
                        <CloudDownload fontSize='small' sx={{ color: 'black' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ fontSize: '14px' }} disableTypography>
                        Download
                      </ListItemText>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <ListItemIcon sx={{ fontSize: '14px' }} disableTypography>
                        <PrintIcon fontSize='small' sx={{ color: 'black' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ fontSize: '14px' }} disableTypography>
                        Print
                      </ListItemText>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <ListItemIcon sx={{ fontSize: '14px' }} disableTypography>
                        <ShareIcon fontSize='small' sx={{ color: 'black' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ fontSize: '14px' }} disableTypography>
                        Share
                      </ListItemText>
                    </MenuItem>

                    <Divider light />

                    <MenuItem onClick={handleClose}>
                      <ListItemIcon sx={{ fontSize: '14px' }} disableTypography>
                        <DeleteForeverIcon color='error' fontSize='small' />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'error', fontSize: '14px' }} disableTypography>
                        Delete
                      </ListItemText>
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}


