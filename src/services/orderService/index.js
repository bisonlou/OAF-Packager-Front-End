import { BASE_URL } from '../../utils';

export const getOrders = async token => {
    const response = await fetch(`${BASE_URL}/orders`);
    return await response.json();
}

export const saveOrder = async order => {
    const response = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}
