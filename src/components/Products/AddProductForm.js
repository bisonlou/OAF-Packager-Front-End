import React from 'react';
import {
    Popover, TextField, Grid,
    withStyles, Button, Typography,
} from '@material-ui/core';
import AddFarmerFormStyles from '../../styles/addFarmerForm'

const AddProductForm = ({
    classes, onSaveClick, onCancelClick, onTextChange,
    addProductError
}) => (
        <Popover
            open={true}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 100, left: 600 }}
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
                    {addProductError}
                </Typography>
            </Grid>

            <Grid>
                <TextField
                    label="Product Name"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="name"
                    onChange={onTextChange}
                    className={classes.textField}
                />
            </Grid>
            <Grid>
                <TextField
                    label="Description"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="description"
                    onChange={onTextChange}
                    className={classes.textField}
                />
            </Grid>
            <Grid>
                <TextField
                    label="Quantity"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="qty"
                    onChange={onTextChange}
                    className={classes.textField}
                />
            </Grid>
            <Grid>
                <TextField
                    label="Units"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="units"
                    onChange={onTextChange}
                    className={classes.textField}
                />
            </Grid>
            <Grid>
                <TextField
                    label="Unit Price"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="unit_price"
                    onChange={onTextChange}
                    className={classes.textField}
                />
            </Grid>

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
                </Grid>
                <Grid item xs={4}>
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


        </Popover>
    );

export default withStyles(AddFarmerFormStyles)(AddProductForm);
