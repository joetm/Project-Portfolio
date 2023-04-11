/* @flow */

import React from 'react'

import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function NavBar({ toggleSubMenu }) {

    // shouldComponentUpdate() { // nextProps, nextState
    //     // This ain't the updates you are looking for.
    //     return false;
    // }

    const handleLeftIconButtonClick = () => {
        console.log('menu icon click');
        toggleSubMenu();
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" style={{color: 'white'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleLeftIconButtonClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Project Portfolio
          </Typography>
        </Toolbar>
        </AppBar>
      </Box>
    );
}


export default NavBar;
