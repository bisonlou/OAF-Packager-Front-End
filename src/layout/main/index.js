import React, { Component } from 'react';

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

import MainStyles from '../../styles/main';

class Main extends Component {
    state = {
        farmers: [],
        products: [],
        orders: [],
        showProductPopper: false,
        showFarmerPopper: false,
        showOderPopper: false,
        addFarmerError: '',
        addProductError: '',
        addOrderError: '',
        orderDetailLines: 1,
        farmer: {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            country: '',
            state: '',
            village: '',
        },
        product: {
            description: '',
            name: '',
            qty: 0,
            unit_price: 0,
            units: '',
        },
        order: {
            farmer_id: null,
            order_date: Date.now(),
            order_details: [{
                product_id: null,
                line_no: 1,
                order_qty: 0,
                order_total: 0
            }]
        }
    };

    async componentDidMount() {
        const { getTokenSilently } = useAuth0();
        const token = await getTokenSilently();

        getFarmers(token)
            .then(data => data['data'])
            .then(data => this.setState({ farmers: data }));

        getProducts(token)
            .then(data => data['data'])
            .then(data => this.setState({ products: data }));

        getOrders(token)
            .then(data => data['data'])
            .then(data => this.setState({ orders: data }));
    };

    handleAddProductClick = () => {
        this.setState({ showProductPopper: true });
    };

    handleAddFarmerClick = () => {
        this.setState({ showFarmerPopper: true });
    };

    handleAddOrderClick = () => {
        this.setState({ showOrderPopper: true });
    };

    handleFarmerChange = event => {
        const { name, value } = event.target;
        this.setState(({ farmer }) => ({ farmer: { ...farmer, [name]: value } }));
    };

    handleProductChange = event => {
        const { name, value } = event.target;
        this.setState(({ product }) => ({ product: { ...product, [name]: value } }));
    };

    handleOrderChange = event => {
        const { name, value } = event.target;
        this.setState(({ order }) => ({ order: { ...order, [name]: value } }));
    };

    handleOrderDateChange = order_date => {
        this.setState(({ order }) => ({ order: { ...order, order_date: order_date } }));
    };

    handleLineProductChange = (event, orderDetailLineNo) => {
        const { name, value } = event.target;

        const { order } = this.state;
        // const order_detail = order.order_details.filter(detail => detail.line_no === orderDetailLineNo);

    };

    handleSaveFarmerClick = () => {
        const { farmer } = this.state;

        saveFarmer(farmer)
            .then(data => {
                if (data['success'] === true) {
                    this.setState(({ farmers }) => ({
                        showFarmerPopper: false,
                        farmers: [...farmers, farmer]
                    }));
                } else {
                    this.setState({ addFarmerError: 'error adding farmer. please try again!' })
                }
            })
    };

    handleSaveProductClick = () => {
        const { product } = this.state;

        saveProduct(product)
            .then(data => {
                if (data['success'] === true) {
                    this.setState(({ products }) => ({
                        showProductPopper: false,
                        products: [...products, product]
                    }));
                } else {
                    this.setState({ addProductError: 'error adding product. please try again!' })
                }
            })
    };

    handleSaveOrderClick = () => {
        const { order } = this.state;

        saveProduct(order)
            .then(data => {
                if (data['success'] === true) {
                    this.setState(({ orders }) => ({
                        showOrderPopper: false,
                        orders: [...orders, order]
                    }));
                } else {
                    this.setState({ addOrderError: 'error adding order. please try again!' })
                }
            })
    };


    handleCancelSaveFarmerClick = () => {
        this.setState({ showFarmerPopper: false });
    };

    handleCancelSaveProductClick = () => {
        this.setState({ showProductPopper: false });
    };

    handleCancelSaveOrderClick = () => {
        this.setState({ showorderPopper: false });
    };


    render() {
        const { classes } = this.props;
        const { farmers, products, orders, order,
            showFarmerPopper, showOrderPopper, addOrderError,
            showProductPopper, addFarmerError, addProductError,
        } = this.state;

        return (
            <div>
                <NavBar />

                <Grid container spacing={1} justify="center">
                    <Grid container item xs={12} spacing={3} className={classes.root}>
                        <Grid item xs={4}>
                            <FarmersTable
                                farmers={farmers}
                                onAddClick={this.handleAddFarmerClick} />
                        </Grid>

                        <Grid item xs={4}>
                            <ProductsTable
                                products={products}
                                onAddClick={this.handleAddProductClick}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <OrdersTable
                                orders={orders}
                                onAddClick={this.handleAddOrderClick}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {
                    showFarmerPopper && (
                        <AddFarmerForm
                            addFarmerError={addFarmerError}
                            onTextChange={this.handleFarmerChange}
                            onSaveClick={this.handleSaveFarmerClick}
                            onCancelClick={this.handleCancelSaveFarmerClick}
                        />
                    )
                }

                {
                    showProductPopper && (
                        <AddProductForm
                            addProductError={addProductError}
                            onTextChange={this.handleProductChange}
                            onSaveClick={this.handleSaveProductClick}
                            onCancelClick={this.handleCancelSaveProductClick}
                        />
                    )
                }

                {
                    showOrderPopper && (
                        <AddOrderForm
                            order={order}
                            farmers={farmers}
                            products={products}
                            addOrderError={addOrderError}
                            onTextChange={this.handleOrderChange}
                            onSaveClick={this.handleSaveOrderClick}
                            onDateChange={this.handleOrderDateChange}
                            onCancelClick={this.handleCancelSaveOrderClick}
                            onFarmerChange={this.handleSelectedFarmerChange}
                            onLineProductChange={this.handleLineProductChange}
                        />
                    )
                }
            </div >
        );
    }
}

export default withStyles(MainStyles)(Main)
