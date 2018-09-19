import React, { Component } from 'react';
import {connect} from 'react-redux'



class WatchlistCard extends Component {
    state = {  }
    render() { 
        return ( 
    <div class="card">
        <div class="card-content">
            <p class="title">Apple Inc.</p>
            <p class="subtitle">AAPL</p>
            <p class="content">216.45</p>
            {/* <p class="title">{this.props.watchList.companyName}</p>
            <p class="subtitle">{this.props.watchList.symbol}</p>
            <p class="content">{this.props.watchList.latestPrice}</p> */}
        </div>
    </div>
         );
    }
}

const mapStateToProps = state => ({
    watchList: state.watchList
}) 

export default connect(null,mapStateToProps)(WatchlistCard)