import React from 'react';
import { connect } from 'react-redux';

import Stat from './Stat';

const Stats = props => {
    return (
        <div>
            <h2 className='ui header'>Stats</h2>
            <div className='ui grid'>
                <div className='row'>
                    <Stat statName='Open' statValue={props.quote.o} />
                    <Stat
                        statName='Avg Volume'
                        statValue={props.financials['10DayAverageTradingVolume']}
                        statUnit='M'
                    />
                </div>
                <div className='row'>
                    <Stat statName='High' statValue={props.quote.h} />
                    <Stat statName='52 Wk High' statValue={props.financials['52WeekHigh']} />
                </div>
                <div className='row'>
                    <Stat statName='Low' statValue={props.quote.l} />
                    <Stat statName='52 Wk Low' statValue={props.financials['52WeekLow']} />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { quote: state.quote, financials: state.financials }
}

export default connect(mapStateToProps)(Stats);