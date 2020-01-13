import { BASE_URL } from '../../utils';

export const getProducts = async token => {
    const response = await fetch(`${BASE_URL}/products`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return await response.json();
}

export const saveProduct = async (token, product) => {
    const response = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return await response.json();
}
