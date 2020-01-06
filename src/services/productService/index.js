import { BASE_URL } from '../../utils';

export const getProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    return await response.json();
}

export const saveProduct = async product => {
    const response = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}
