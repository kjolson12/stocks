import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const StockChart = props => {
    const data = [];
    const [dataState, setDataState] = useState([]);

    useEffect(() => {
        setDataState(props.data1D);
    }, [props.data1D]);

    let priceChange = 1;

    if (dataState.c) {
        for (let i = 0; i < dataState.c.length; i++) {
            let time = '';

            if (dataState === props.data1D) {
                time = new Date(dataState.t[i] * 1000).toLocaleTimeString('en-US', { timeStyle: 'short' });
            } else if (dataState === props.data1W) {
                time = new Date(dataState.t[i] * 1000).toLocaleString('en-US', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
            } else {
                time = new Date(dataState.t[i] * 1000).toLocaleDateString('en-US', { dateStyle: 'medium' });
            }

            data.push({
                c: dataState.c[i],
                t: time
            });
        }

        priceChange = Math.round((data[data.length - 1].c - data[0].c) * 100) / 100;
    }

    const renderStrokeColor = () => {
        if (priceChange > 0) {
            return '#32cd32';
        } else return '#FF0000';
    }

    return (
        <div>
            <ResponsiveContainer width='95%' height={400}>
                <LineChart data={data} margin={{ top: 50, right: 5, bottom: 10, left: 0 }} >
                    <Line type='monotone' dataKey='c' dot={false} stroke={renderStrokeColor()} strokeWidth={2} />
                    <XAxis dataKey='t' />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
            <div className='five green ui buttons'>
                <button className='ui button' onClick={() => setDataState(props.data1D)}>1D</button>
                <button className='ui button' onClick={() => setDataState(props.data1W)}>1W</button>
                <button className='ui button' onClick={() => setDataState(props.data1M)}>1M</button>
                <button className='ui button' onClick={() => setDataState(props.data3M)}>3M</button>
                <button className='ui button' onClick={() => setDataState(props.data1Y)}>1Y</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data1D: state.data1D,
        data1W: state.data1W,
        data1M: state.data1M,
        data3M: state.data3M,
        data1Y: state.data1Y,
        quote: state.quote
    }
}

export default connect(mapStateToProps)(StockChart);