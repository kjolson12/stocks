import React from 'react';

const SearchResult = ({ stock, onSearch }) => {
    const handleClick = () => {
        onSearch(stock.symbol);
    };

    return (
        <div>
            <div className='ui grid'>
                <div className='twelve wide left floated column'>
                    <h5 className='ui header'>
                        {stock.description}
                        <div className='sub header'>
                            {stock.symbol}
                        </div>
                    </h5>
                </div>
                <div className='right floated column'>
                    <button
                        className='circular green ui right floated icon button'
                        onClick={handleClick}
                    >
                        <i className='icon chart line' />
                    </button>
                </div>
            </div>
            <div className='ui divider' />
        </div>
    );
};

export default (SearchResult);