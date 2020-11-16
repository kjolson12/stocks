import finnhub from '../apis/finnhub';

const currentUNIX = Math.floor(Date.now() / 1000);

const oneDayAgoUNIX = (Math.floor(Date.now() / 1000)) - 86400;
const oneWeekAgoUNIX = (Math.floor(Date.now() / 1000)) - 604800;
const oneMonthAgoUNIX = (Math.floor(Date.now() / 1000)) - 2592000;
const threeMonthsAgoUNIX = (Math.floor(Date.now() / 1000)) - 7776000;
const oneYearAgoUNIX = (Math.floor(Date.now() / 1000)) - 31556952;

const currentDate = new Date(Date.now()).toLocaleDateString('en-US');
const formattedCurrentDate = new Date(currentDate).toISOString().split('T')[0];

const oneWeekAgo = new Date(Date.now() - 604800000).toLocaleDateString('en-US');
const formattedOneWeek = new Date(oneWeekAgo).toISOString().split('T')[0];

export const fetchStocks = () => async dispatch => {
    const response = await finnhub.get('/stock/symbol?exchange=US');

    dispatch({ type: 'FETCH_STOCKS', payload: response.data })
};

export const fetchStock = ticker => async dispatch => {
    const response = await finnhub.get(`/stock/profile2?symbol=${ticker}`);

    dispatch({ type: 'FETCH_STOCK', payload: response.data })
};

export const fetchStockQuote = ticker => async dispatch => {
    const response = await finnhub.get(`/quote?symbol=${ticker}`);

    dispatch({ type: 'FETCH_STOCK_QUOTE', payload: response.data })
};

// Actions for fetching data for graphs, 1 day to 1 year
export const fetchStockData1D = ticker => async dispatch => {
    const response = await finnhub.get(`/stock/candle?symbol=${ticker}&resolution=5&from=${oneDayAgoUNIX}&to=${currentUNIX}`);

    dispatch({ type: 'FETCH_STOCK_DATA_1D', payload: response.data })
};

export const fetchStockData1W = ticker => async dispatch => {
    const response = await finnhub.get(`/stock/candle?symbol=${ticker}&resolution=15&from=${oneWeekAgoUNIX}&to=${currentUNIX}`);

    dispatch({ type: 'FETCH_STOCK_DATA_1W', payload: response.data })
};

export const fetchStockData1M = ticker => async dispatch => {
    const response = await finnhub.get(`/stock/candle?symbol=${ticker}&resolution=D&from=${oneMonthAgoUNIX}&to=${currentUNIX}`);

    dispatch({ type: 'FETCH_STOCK_DATA_1M', payload: response.data })
};

export const fetchStockData3M = ticker => async dispatch => {
    const response = await finnhub.get(`/stock/candle?symbol=${ticker}&resolution=D&from=${threeMonthsAgoUNIX}&to=${currentUNIX}`);

    dispatch({ type: 'FETCH_STOCK_DATA_3M', payload: response.data })
};

export const fetchStockData1Y = ticker => async dispatch => {
    const response = await finnhub.get(`/stock/candle?symbol=${ticker}&resolution=D&from=${oneYearAgoUNIX}&to=${currentUNIX}`);

    dispatch({ type: 'FETCH_STOCK_DATA_1Y', payload: response.data })
};
// Not sure if this is the correct way to do this lol

export const fetchStockFinancials = ticker => async dispatch => {
    const response = await finnhub.get(`/stock/metric?symbol=${ticker}&metric=all`);

    dispatch({ type: 'FETCH_STOCK_FINANCIALS', payload: response.data.metric })
};

export const fetchStockNews = ticker => async dispatch => {
    const response = await finnhub.get(`/company-news?symbol=${ticker}&from=${formattedOneWeek}&to=${formattedCurrentDate}`);

    dispatch({ type: 'FETCH_STOCK_NEWS', payload: response.data })
};

export const setSearchTerm = term => {
    return ({ type: 'SEARCH_TERM', payload: term });
};