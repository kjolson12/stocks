import React from 'react';
import { connect } from 'react-redux';
import {
    fetchStock,
    fetchStockQuote,
    fetchStockData1D,
    fetchStockData1W,
    fetchStockData1M,
    fetchStockData3M,
    fetchStockData1Y,
    fetchStockFinancials,
    fetchStockNews
} from '../actions';

import Banner from './Banner';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import StockView from './StockView';

const App = props => {
    const onSearch = ticker => {
        props.fetchStock(ticker);
        props.fetchStockQuote(ticker);
        props.fetchStockData1D(ticker);
        props.fetchStockData1W(ticker);
        props.fetchStockData1M(ticker);
        props.fetchStockData3M(ticker);
        props.fetchStockData1Y(ticker);
        props.fetchStockFinancials(ticker);
        props.fetchStockNews(ticker);
    }

    return (
        <div>
            <Banner />
            <div className='ui container'>
                <div className='ui grid'>
                    <div className='ui eleven wide column'>
                        <StockView />
                    </div>
                    <div className='ui five wide column'>
                        <SearchBar onSearch={onSearch} />
                        <SearchResults onSearch={onSearch} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null,
    {
        fetchStock,
        fetchStockQuote, 
        fetchStockData1D,
        fetchStockData1W,
        fetchStockData1M,
        fetchStockData3M,
        fetchStockData1Y,
        fetchStockFinancials,
        fetchStockNews
    }
)(App);