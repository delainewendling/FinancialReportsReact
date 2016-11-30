import axios from 'axios';

export function loadTimelyReport(days) {
    return axios.get(`/timelyreports/${days}`)
        .then(products => {
            return products.data;
        })
        .catch(error => {
            throw (error);
        })
}