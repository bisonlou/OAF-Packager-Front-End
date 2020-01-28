import React, { useState, useEffect } from 'react';

import { Grid, withStyles } from '@material-ui/core';
import { useAuth0 } from "../../react-auth0-spa";

import FarmersTable from '../../components/Farmers';
import OrdersTable from '../../components/Orders';
import ProductsTable from '../../components/Products';
import NavBar from '../../components/NavBar';
import AddFarmerForm from '../../components/Farmers/AddFarmerForm'
import AddProductForm from '../../components/Products/AddProductForm'
import AddOrderForm from '../../components/Orders/AddOrderForm'

import { getFarmers, saveFarmer } from '../../services/farmerService';
import { getProducts, saveProduct } from '../../services/productService';
import { getOrders, saveOrder } from '../../services/orderService';
import { dateToString } from '../../utils'

import MainStyles from '../../styles/main';

const Main = ({ classes }) => {
    const [farmers, setFarmers] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    const [showProductPopper, setShowProductPopper] = useState(false);
    const [showFarmerPopper, setShowFarmerPopper] = useState(false);
    const [showOrderPopper, setShowOderPopper] = useState(false);

    const [addFarmerError, setAddFarmerError] = useState('');
    const [addProductError, setAddProductError] = useState('');
    const [addOrderError, setAddOrderError] = useState('');

    const [farmer, setFarmer] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        country: '',
        state: '',
        village: '',
    });

    const [product, setProduct] = useState({
        description: '',
        name: '',
        qty: 0,
        unit_price: 0,
        units: '',
    });

    const [order, setOrder] = useState({
        farmer_id: 1,
        order_date: Date.now()
    });

    const [orderDetails, setOrderDetails] = useState([
        {
            product_id: 1,
            line_no: 1,
            order_qty: 0,
            line_total: 0
        }
    ]);

    const [token, setToken] = useState('');

    const { getTokenSilently } = useAuth0();

    useEffect(async () => {
        const token = await getTokenSilently();
        setToken(token);

        console.log('token---->', token)

        getFarmers(token)
            .then(data => data['data'])
            .then(data => setFarmers(data))
            .catch(error => console.log(error));

        getProducts(token)
            .then(data => data['data'])
            .then(data => setProducts(data));

        getOrders(token)
            .then(data => data['data'])
            .then(data => setOrders(data));
    }, [getTokenSilently]);

    const handleAddProductClick = () => {
        setShowProductPopper(true);
    };

    const handleAddFarmerClick = () => {
        setShowFarmerPopper(true);
    };

    const handleAddOrderClick = () => {
        setShowOderPopper(true);
    };

    const handleFarmerChange = event => {
        const { name, value } = event.target;
        setFarmer({ ...farmer, [name]: value });
    };

    const handleProductChange = event => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const handleOrderChange = event => {
        const { name, value } = event.target;
        setOrder({ ...order, [name]: value });
    };

    const handleOrderDateChange = order_date => {
        const date_string = dateToString(order_date)

        setOrder({ ...order, order_date: date_string });
    };

    const handleSaveFarmerClick = () => {
        saveFarmer(token, farmer)
            .then(data => {
                if (data['success'] === true) {
                    setShowFarmerPopper(false);
                    setFarmers([...farmers, farmer])
                } else {
                    setAddFarmerError('error adding farmer. please try again!');
                }
            })
    };

    const handleSaveProductClick = () => {
        saveProduct(token, product)
            .then(data => {
                if (data['success'] === true) {
                    setShowProductPopper(false);
                    setProducts([...products, product]);
                } else {
                    setAddProductError('error adding product. please try again!');
                }
            })
    };

    const handleSaveOrderClick = () => {
        saveOrder(token, order, orderDetails)
            .then(data => {
                if (data['success'] === true) {
                    setShowOderPopper(false);
                    setOrders([...orders, order])
                } else {
                    setAddOrderError('error adding order. please try again!');
                }
            })
    };


    const handleCancelSaveFarmerClick = () => {
        setShowFarmerPopper(false);
    };

    const handleCancelSaveProductClick = () => {
        setShowProductPopper(showProductPopper);
    };

    const handleCancelSaveOrderClick = () => {
        setShowOderPopper(false);
    };

    const handleOrderDetailChange = event => {
        const { name, value } = event.target;
        const currentOrderDetails = orderDetails[0];

        setOrderDetails([{
            ...currentOrderDetails,
            [name]: parseInt(value)
        }])
    };

    const handleAddNewLineDetail = () => {
        setOrderDetails([...orderDetails, {
            product_id: null,
            line_no: 1,
            order_qty: 0,
            order_total: 0
        }])
    };

    return (
        <div>
            <NavBar />

            <Grid container spacing={1} justify="center">
                <Grid container item xs={12} spacing={3} className={classes.root}>
                    <Grid item xs={4}>
                        <FarmersTable
                            farmers={farmers}
                            onAddClick={handleAddFarmerClick} />
                    </Grid>

                    <Grid item xs={4}>
                        <ProductsTable
                            products={products}
                            onAddClick={handleAddProductClick}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <OrdersTable
                            orders={orders}
                            onAddClick={handleAddOrderClick}
                        />
                    </Grid>
                </Grid>
            </Grid>
            {
                showFarmerPopper && (
                    <AddFarmerForm
                        addFarmerError={addFarmerError}
                        onTextChange={handleFarmerChange}
                        onSaveClick={handleSaveFarmerClick}
                        onCancelClick={handleCancelSaveFarmerClick}
                    />
                )
            }

            {
                showProductPopper && (
                    <AddProductForm
                        addProductError={addProductError}
                        onTextChange={handleProductChange}
                        onSaveClick={handleSaveProductClick}
                        onCancelClick={handleCancelSaveProductClick}
                    />
                )
            }

            {
                showOrderPopper && (
                    <AddOrderForm
                        order={order}
                        farmers={farmers}
                        products={products}
                        orderDetails={orderDetails}
                        addOrderError={addOrderError}
                        onTextChange={handleOrderChange}
                        onSaveClick={handleSaveOrderClick}
                        onDateChange={handleOrderDateChange}
                        addNewLineClick={handleAddNewLineDetail}
                        onCancelClick={handleCancelSaveOrderClick}
                        onOrderDetailChange={handleOrderDetailChange}
                    />
                )
            }
        </div >
    );
}

export default withStyles(MainStyles)(Main)
