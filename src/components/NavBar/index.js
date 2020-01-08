import React from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import {
    Toolbar, Typography, AppBar, Button, Grid, withStyles
} from '@material-ui/core';

import { NavBarStyles } from '../../styles/navBarStyles';

const NavBar = ({ classes }) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (

        <AppBar>
            <Grid
                container
                justify="space-between"
            >
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        OAF Seed Packager
                </Typography>
                </Toolbar>

                <Grid item>
                    {!isAuthenticated && (
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            onClick={() => loginWithRedirect({})}>Log in</Button>
                    )}

                    {isAuthenticated && (
                        <Button
                            variant="contained"
                            color="secondarys"
                            className={classes.button}
                            onClick={() => logout()}>Log out</Button>)}
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default withStyles(NavBarStyles)(NavBar);
