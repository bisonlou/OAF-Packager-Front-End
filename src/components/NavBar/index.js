import React from 'react';
import {
    Toolbar, Typography, AppBar
} from '@material-ui/core';

const NavBar = () => {

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    OAF Seed Packager
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
