import React from 'react';
import { connect } from 'react-redux';

import PriceChange from './PriceChange';
import StockChart from './StockChart';
import Stats from './Stats';
import News from './News';

const StockView = props => {
    const renderInfo = info => {
        if (!info) {
            return (
                <div className='ui placeholder'>
                    <div className='line'></div>
                </div>
            );
        }

        return info;
    }

    return (
        <div className='ui raised segment'>
            <h1 className='ui header'>
                <div className='sub header'>
                    {renderInfo(props.stock.ticker)}
                </div>
                {renderInfo(props.stock.name)}
            </h1>
            <h1 className='ui header'>${renderInfo(props.quote.c)}</h1>
            <PriceChange />
            <StockChart />
            <div className='ui hidden divider' />
            <Stats />
            <div className='ui hidden divider' />
            <News />
        </div>
    );
};

const mapStateToProps = state => {
    return { stock: state.stock, quote: state.quote }
}

export default connect(mapStateToProps)(StockView);