import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar'
import WatchlistCard from '../watchlist/watchlist-card'
import { connect } from 'react-redux'

class WatchListDashboard extends Component {
    render() {
        return (
            <section className="container is-fluid">
                <div>
                    <section className="section">
                        <p className="title">Your Watchlist</p>
                    </section>
                </div>
                <div className="columns">
                    <div className="column is-fullheight is-2 is-pulled-left">
                        <Sidebar />
                    </div>
                    <div className="column is-1"></div>
                    <div className="column is-8 is-fullheight inline-flex">
                        <div className="columns is-multiline">
                            {
                            this.props.watchlist.map((property,index) => {
                                return (
                                    <div className="column is-4" key={index}>
                                        <WatchlistCard
                                            title={property.companyName}
                                            symbol={property.symbol}
                                            latestPrice={property.latestPrice}
                                            index={index}
                                        />
                                    </div>
                                )})
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


const mapStateToProps = state => ({
    watchlist: state.watchlist
})


export default connect(mapStateToProps, null)(WatchListDashboard)
