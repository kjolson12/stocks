import React from 'react';
import { connect } from 'react-redux';

const PriceChange = props => {
    const priceChange = Math.round((props.quote.c - props.quote.pc) * 100) / 100;
    const percentChange = Math.round(((Math.abs(props.quote.c - props.quote.pc) / props.quote.pc) *100) * 100) / 100;

    const renderPriceChange = () => {
        if (priceChange > 0) {
            return (
                <div>
                    <h4 className='ui green header'>
                        <i className='green arrow up icon'/>
                        ${priceChange} ({percentChange}%) Today
                    </h4>
                </div>
            );
        } else if (priceChange < 0) {
            return (
                <div>
                    <h4 className='ui red header'>
                        <i className='red arrow down icon'/>
                        ${Math.abs(priceChange)} ({percentChange}%) Today
                    </h4>
                </div>
            );
        } else return (
            <div className='ui placeholder'>
                <div className='very short line'></div>
            </div>
        );
    };

    return <div>{renderPriceChange()}</div>;
};

const mapStateToProps = state => {
    return { quote: state.quote }
}

export default connect(mapStateToProps)(PriceChange);