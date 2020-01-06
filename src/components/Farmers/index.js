import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Toolbar, Typography, Paper, Fab, Grid
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const FamersTable = ({ farmers, onAddClick }) => {

    return (
        <div>
            <Toolbar>
                <Typography variant="h6" id="tableTitle">
                    Farmers
                </Typography>
                <Grid container justify="flex-end">
                    <Fab size="small" color="primary" aria-label="add">
                        <AddIcon
                            onClick={onAddClick}
                        />
                    </Fab>
                </ Grid>
            </Toolbar>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>email</TableCell>
                            <TableCell>phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {farmers.map(farmer => (
                            <TableRow key={farmer.id}>
                                <TableCell component="th" scope="row">
                                    {`${farmer.firstname} ${farmer.lastname}`}
                                </TableCell>
                                <TableCell>{farmer.email}</TableCell>
                                <TableCell>{farmer.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default FamersTable;
