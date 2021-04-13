import React from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions';
import SearchResult from './SearchResult';

class SearchResults extends React.Component {
    componentDidMount() {
        this.props.fetchStocks();
    }

    renderResults() {
        const term = this.props.searchTerm.toString().toUpperCase();

        if (term.length > 0) {
            return this.props.stocks.filter(stock => 
                stock.description.includes(term) || stock.symbol.includes(term)
            ).slice(0, 10).map(stock => 
                <SearchResult
                    stock={stock}
                    onSearch={this.props.onSearch}
                    key={stock.symbol}
                />
            );
        }
    }
    
    render() {
        return (
            <div className='ui raised segment'>
                {this.renderResults()}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return { stocks: state.stocks, searchTerm: state.searchTerm }
}

export default connect(mapStateToProps, { fetchStocks })(SearchResults);