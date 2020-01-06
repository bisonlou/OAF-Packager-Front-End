import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Toolbar, Typography, Paper, Grid, Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { formatDate } from '../../utils'

const OrdersTable = ({ orders, onAddClick }) => {

    return (
        <div>
            <Toolbar>
                <Typography variant="h6" id="tableTitle">
                    Orders
            </Typography>
                <Grid container justify="flex-end">
                    <Fab size="small" color="primary" aria-label="add">
                        <AddIcon onClick={onAddClick}/>
                    </Fab>
                </ Grid>
            </Toolbar>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Farmer</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map(order => (
                            <TableRow key={order.id}>
                                <TableCell component="th" scope="row">
                                    {order.farmer_name}
                                </TableCell>
                                <TableCell>{formatDate(order.order_date)}</TableCell>
                                <TableCell>{order.order_total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default OrdersTable;
