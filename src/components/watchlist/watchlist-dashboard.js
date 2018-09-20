import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar'
import WatchlistCard from '../watchlist/watchlist-card'
import { connect } from 'react-redux'

class WatchListDashboard extends Component {
    state = {}
    render() {
        console.log(this.props.watchlist)
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
                                this.props.watchlist.map((property, i) => {
                                    return (
                                        <div className="column is-4" key={i}>
                                            <WatchlistCard
                                                title={this.props.watchlist.companyName}
                                                symbol={this.props.watchlist.symbol}
                                                latestPrice={this.props.watchlist.latestPrice}
                                            />
                                        </div>
                                    )
                                })
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
