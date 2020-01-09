import { BASE_URL } from '../../utils';


export const getFarmers = async token => {
    const response = await fetch(`${BASE_URL}/farmers`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return await response.json();
}

export const saveFarmer = async (farmer) => {
    const response = await fetch(`${BASE_URL}/farmers`, {
        method: 'POST',
        body: JSON.stringify(farmer),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}
