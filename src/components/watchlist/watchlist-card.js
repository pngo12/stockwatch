import React, { Component } from 'react';

const WatchlistCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <p className="title">{props.title}</p>
                <p className="subtitle">{props.symbol}</p>
                <p className="subtitle">{props.latestPrice}</p>
            </div>
        </div>
    );
}

export default WatchlistCard;