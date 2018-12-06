import React from 'react';

const PriceCard = props => {
    return (
        <div>
            <p className="title">{props.companyName}</p>
            <br />
            <p className="subtitle has-text-grey">{props.symbol}</p>
            <br />
            <p className="title" style={{ color: props.latestPrice > props.open ? '#093' : '#ff333a'}}> ${props.latestPrice}</p>
        </div>
    );
}

export default PriceCard;
