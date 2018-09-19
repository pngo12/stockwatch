import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar'
import WatchlistCard from '../watchlist/watchlist-card'

class WatchListDashboard extends Component {
    state = {  }
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
                            <div className="column is-8 is-fullheight">
                                <div className="columns">
                                    <div className="column is-4"><WatchlistCard /></div>
                                    <div className="column is-4"><WatchlistCard /></div>
                                    <div className="column is-4"><WatchlistCard /></div>
                            </div>
                        </div>
                    </div>
                </section>
         );
    }
}
 
export default WatchListDashboard;