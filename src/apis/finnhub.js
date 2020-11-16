import axios from 'axios';

export default axios.create({
    baseURL: 'https://finnhub.io/api/v1',
    params: {
        token: 'bu5nnbf48v6qku348d6g'
    }
});