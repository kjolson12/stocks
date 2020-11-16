import { combineReducers } from 'redux';
import stockReducer from './stockReducer';
import stockQuoteReducer from './stockQuoteReducer';

import stockData1DReducer from './stockData1DReducer';
import stockData1WReducer from './stockData1WReducer';
import stockData1MReducer from './stockData1MReducer';
import stockData3MReducer from './stockData3MReducer';
import stockData1YReducer from './stockData1YReducer';

import stocksReducer from './stocksReducer';
import searchTermReducer from './searchTermReducer';
import stockFinancialsReducer from './stockFinancialsReducer';
import stockNewsReducer from './stockNewsReducer';

export default combineReducers({
    stock: stockReducer,
    stocks: stocksReducer,
    quote: stockQuoteReducer,
    data1D: stockData1DReducer,
    data1W: stockData1WReducer,
    data1M: stockData1MReducer,
    data3M: stockData3MReducer,
    data1Y: stockData1YReducer,
    searchTerm: searchTermReducer,
    financials: stockFinancialsReducer,
    news: stockNewsReducer
});