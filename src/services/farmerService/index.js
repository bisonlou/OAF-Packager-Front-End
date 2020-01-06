import { BASE_URL } from '../../utils';

export const getFarmers = async () => {
    const response = await fetch(`${BASE_URL}/farmers`);
    return await response.json();
}

export const saveFarmer = async farmer => {
    console.log(farmer)
    const response = await fetch(`${BASE_URL}/farmers`, {
        method: 'POST',
        body: JSON.stringify(farmer),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return await response.json();
}
