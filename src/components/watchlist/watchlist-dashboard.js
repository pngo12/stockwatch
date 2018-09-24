import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar'
import WatchlistCard from '../watchlist/watchlist-card'
import { connect } from 'react-redux'
import SearchInput from '../search-input/search-input'

class WatchListDashboard extends Component {
    state = {
        sidebarVisibility: false
    }

    toggleSidebar = () => {
        this.setState({ sidebarVisibility: !this.state.sidebarVisibility })
    }

    handleMouseDown = e => {
        this.toggleSidebar()
        e.stopPropagation()
    }
    render() {
        return (

        <body id="watchlist">
            <section className="container is-fluid">
                <div>
                    <section className="section">
                        <p className="title">Your Watchlist</p>
                    </section>
                </div>
                <div className="columns">
                    <div className="column is-fullheight is-2 is-pulled-left">
                        <Sidebar
                            handleMouseDown={this.handleMouseDown}
                            sidebarVisibility={this.state.sidebarVisibility}
                            />
                        <div id="arrowContainer">
                            <a onMouseUp={this.handleMouseDown}>
                                <i id="rightArrow" className="fas fa-arrow-right fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <div className="column is-8 inline-flex">
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
        </body>
        );
    }
}


const mapStateToProps = state => ({
    watchlist: state.watchlist
})


export default connect(mapStateToProps, null)(WatchListDashboard)
