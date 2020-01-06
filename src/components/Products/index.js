import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Toolbar, Typography, Paper, Grid, Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const ProductsTable = ({ products, onAddClick }) => {

    return (
        <div>
            <Toolbar>
                <Typography variant="h6" id="tableTitle">
                    Products
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
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(product => (
                            <TableRow key={product.id}>
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        );
    }
    
    export default ProductsTable;
