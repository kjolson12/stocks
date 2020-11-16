import React from 'react'

const Stat = props => {
    return (
        <div className='eight wide column'>
            <h4 className='ui left floated disabled header'>{props.statName}</h4>
            <h3 className='ui right floated header'>{props.statValue}{props.statUnit}</h3>
            <div className='ui section divider' />
        </div>
    );
};

export default Stat;