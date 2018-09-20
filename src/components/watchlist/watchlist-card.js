import React from 'react';
import {connect} from 'react-redux'
import { removeFromWatchlist } from '../../actions'

const WatchlistCard = props => {
    let index = props.index
    
        return (
        <div className="card">
            <div className="card-content">
                <p className="title">{props.title}</p>
                <p className="subtitle">{props.symbol}</p>
                <p className="subtitle">${props.latestPrice}</p>
                <p hidden>{props.id}</p>
            </div>
            <footer className="card-footer">
                <div className="buttons">
                    <span onClick={() => props.removeFromWatchlist(index)} className="button">Remove from watchlist</span>
                    <span className="button">Add to portfolio</span>
                </div>
            </footer>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    removeFromWatchlist: index => dispatch(removeFromWatchlist(index))
})

export default connect(null, mapDispatchToProps)(WatchlistCard)