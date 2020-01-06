import React, { useState } from 'react';
import {
    Popover, TextField, Grid,
    withStyles, Button, Typography,
    FormControl, Select, MenuItem, InputLabel,
    InputAdornment 
} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import AddFarmerFormStyles from '../../styles/addFarmerForm'

const AddProductForm = ({
    classes, onSaveClick, onCancelClick, onTextChange,
    addOrderError, farmers, order, onDateChange, products,
    onLineProductChange,
}) => {

    return (
        <Popover
            open={true}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 100, left: 500 }}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            className={classes.root}
        >
            <Grid>
                <Typography className={classes.error}>
                    {addOrderError}
                </Typography>
            </Grid>

            <Grid container justify="flex-start" style={{ marginBottom: 30 }}>
                <Grid item xs={6}>
                    <InputLabel className={classes.selectLabel}>Select farmer</InputLabel>
                    <FormControl className={classes.formControl}>
                        <Select
                            name="farmer_id"
                            displayEmpty
                            onChange={onTextChange}
                            className={classes.selectField}
                        >
                            {
                                farmers.map(farmer => (
                                    <MenuItem
                                        key={farmer.id}
                                        value={farmer.id}
                                    >
                                        {
                                            `${farmer.firstname} ${farmer.lastname}`
                                        }
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <InputLabel className={classes.dateLabel}>Select order date</InputLabel>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            format="MM/dd/yyyy"
                            name="order_date"
                            value={order.order_date}
                            onChange={onDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
            </Grid>
            {
                order.order_details.map(order_detail => (

                    <Grid>
                        <FormControl className={classes.formControl}>
                            <Select
                                name="product_id"
                                displayEmpty
                                onChange={event => onLineProductChange(event, order_detail.line_no)}
                                className={classes.detaiTextField}
                            >
                                <MenuItem disabled>Select Product</MenuItem>
                                {
                                    products.map(product => (
                                        <MenuItem
                                            key={products.id}
                                            value={product.id}
                                            // onClick={() => storeCurrentLineProduct(product.id)}
                                        >
                                            {product.name}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>

                        <TextField
                            label="Quantity"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            name="qty"
                            type="number"
                            endAdornment={
                            <InputAdornment position="end">
                                {'kgs'}
                            </InputAdornment>}
                            onChange={onTextChange}
                            className={classes.detaiTextField}
                        />

                        <TextField
                            label="Unit Price"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            name="unit_price"
                            type="number"
                            onChange={onTextChange}
                            className={classes.detaiTextField}
                        />

                        <TextField
                            label="Total"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            name="line_total"
                            type="number"
                            onChange={onTextChange}
                            className={classes.detaiTextField}
                        />

                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.button}
                            onClick={onCancelClick}
                        >
                            Add
                        </Button>
                    </Grid>



                ))
            }
            <Grid>
                <Grid container justify="flex-end">
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                            className={classes.button}
                            onClick={onCancelClick}
                        >
                            Cancel
                    </Button>
                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className={classes.button}
                            onClick={onSaveClick}
                        >
                            Save
                    </Button>
                    </Grid>
                </Grid>
            </Grid>

        </Popover>
    )
};

export default withStyles(AddFarmerFormStyles)(AddProductForm);
