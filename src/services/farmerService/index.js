import { BASE_URL } from '../../utils';
import { useAuth0 } from "../../react-auth0-spa";


const { getTokenSilently } = useAuth0();


export const getFarmers = async () => {
    const response = await fetch(`${BASE_URL}/farmers`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return await response.json();
}

export const saveFarmer = async farmer => {
    const token = await getTokenSilently();

    const response = await fetch(`${BASE_URL}/farmers`, {
        method: 'POST',
        body: JSON.stringify(farmer),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return await response.json();
}
