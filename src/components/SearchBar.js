import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions';

class SearchBar extends React.Component {
    handleSearch = e => {
        e.preventDefault();

        const upperCaseTerm = this.props.searchTerm.toUpperCase();
        
        this.props.onSearch(upperCaseTerm);
    }

    render() {
        return (
            <form onSubmit={this.handleSearch}>
                <div className='ui fluid icon input'>
                    <input
                        type='text'
                        placeholder='Search companies...'
                        onChange={e => this.props.setSearchTerm(e.target.value)}
                        value={this.props.searchTerm}
                    />
                    <i
                        className='circular search link icon'
                        onClick={this.handleSearch}
                    />
                </div>
            </form>
        );
    }
};

const mapStateToProps = state => {
    return { searchTerm: state.searchTerm }
}

export default connect(mapStateToProps, { setSearchTerm })(SearchBar);