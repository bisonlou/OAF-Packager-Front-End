import React from 'react';
import {
    Popover, TextField, Grid,
    withStyles, Button, Typography,
} from '@material-ui/core';
import AddFarmerFormStyles from '../../styles/addFarmerForm'

const AddFarmerForm = ({
    classes, onSaveClick, onCancelClick, onTextChange,
    addFarmerError
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
                    {addFarmerError}
                </Typography>
            </Grid>

            <Grid>
                <TextField
                    label="First Name"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="firstname"
                    onChange={onTextChange}
                    className={classes.textField}
                />
            </Grid>
            <Grid>
                <TextField
                    label="Last Name"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="lastname"
                    onChange={onTextChange}
                    className={classes.textField}
                />
            </Grid>
            <Grid>
                <TextField
                    label="Phone"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="phone"
                    onChange={onTextChange}
                    className={classes.textField}
                />
            </Grid>
            <Grid>
                <TextField
                    label="Email"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="email"
                    onChange={onTextChange}
                    className={classes.textField}
                />
            </Grid>
            <Grid>
                <TextField
                    label="Country"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="country"
                    onChange={onTextChange}
                    className={classes.textField}
                />
            </Grid>
            <Grid>
                <TextField
                    label="State"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="state"
                    onChange={onTextChange}
                    className={classes.textField}
                />
            </Grid>
            <Grid>
                <TextField
                    label="Village"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    name="village"
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

export default withStyles(AddFarmerFormStyles)(AddFarmerForm);
