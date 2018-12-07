import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import Profile from './profile';
import Summary from './summary';
import { getData } from '../../redux/actions/index';
import SearchInput from '../search-input/search-input';
import PriceCard from '../price-card/priceCard';
import Peers from '../Peers/Peers';
import './dashboard.css';

class Dashboard extends PureComponent {
    state = {
        sidebarVisibility: false
    }

    // If link is sent with stock appended to URL, data will fetch upon page load
    componentDidMount() {
        this.props.getData(this.props.match.params.id);
    }

    render() {
        return (
            <section className="section is-marginless is-paddingless">
                <div className="dashboard">
                    <div id="searchContainer">
                        <SearchInput />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-1"></div>
                    <div className="column is-10 is-fullheight">
                        <div className="tile is-ancestor">
                            <div className="level tile is-4 is-vertical is-parent">
                                <div className="level-item tile is-child box">
                                    <PriceCard
                                        companyName={this.props.quote.companyName}
                                        symbol={this.props.quote.symbol}
                                        latestPrice={this.props.quote.latestPrice}
                                        open={this.props.quote.open}
                                    /> <br />
                                </div>
                                <div className="tile is-child box">
                                    <p className="title">Profile</p>
                                    <Profile />
                                </div>
                                <div className="tile is-child box">
                                    <p className="title">Peers</p>

                                    {this.props.peers.map((peers, i) => {
                                        return (
                                            <span className="inline" key={i}>
                                                <Peers
                                                    peers={peers}
                                                />
                                            </span>
                                        )
                                    })}

                                </div>
                            </div>
                            <div className="tile is-parent is-vertical is-8">
                                <div className="tile is-child box">
                                    <p className="title">Price History</p>
                                    <div id="container">
                                        <Chart />
                                    </div>
                                </div>
                                <div className="tile is-child box">
                                    <p className="title">Summary</p>
                                    <Summary />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.loading.isLoading,
    quote: state.getData.quote,
    peers: state.getData.peers,
    // news: state.getDatanews,
})

const mapDispatchToProps = dispatch => ({
    getData: symbol => dispatch(getData(symbol)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);