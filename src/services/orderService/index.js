import { BASE_URL } from '../../utils';

export const getOrders = async token => {
    const response = await fetch(`${BASE_URL}/orders`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return await response.json();
}

export const saveOrder = async (token, order, orderDetais) => {
    order.order_details = orderDetais
    console.log(order)
    const response = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response.json())
    return await response.json();
}
