import React from 'react';

const PriceCard = props => {
    return (
        <div>
            <p className="title">{props.companyName}</p>
            <br />
            <p className="subtitle has-text-grey">{props.symbol}</p>
            <p className="subtitle has-text-grey"> ${props.latestPrice}</p>
        </div>
    );
}

export default PriceCard;
