import axios from 'axios';

export const baseAPI = axios.create({
    baseURL: "https://62ba7bf7573ca8f832856dda.mockapi.io/api/IST/", 
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
});