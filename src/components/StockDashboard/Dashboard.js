import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import Profile from './Profile';
import Summary from './Summary';
import Sidebar from '../Sidebar/Sidebar';
import { addToWatchlist, getData, flipClicked } from '../../Redux/Actions';
import SearchInput from '../SearchInput/SearchInput';
import PriceCard from '../PriceCard/PriceCard';
import Peers from '../Peers/Peers';
import './Dashboard.css';

class Dashboard extends PureComponent {
    state = {
        sidebarVisibility: false
    }

    //Handles fetching data from API
    handleOnClick = () => {
        this.props.addToWatchlist(this.props.quote.symbol);
        this.props.flipClicked();
    }

    // If link is sent with stock appended to URL, data will fetch upon page load
    componentDidMount() {
        this.props.getData(this.props.match.params.id);
    }

    toggleSidebar = () => this.setState({ sidebarVisibility: !this.state.sidebarVisibility });

    handleMouseDown = e => {
        this.toggleSidebar();
        e.stopPropagation();
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
                    <div className="column is-narrow is-fullheight" id="sidebarColumn">
                        <Sidebar
                            handleMouseDown={this.handleMouseDown}
                            sidebarVisibility={this.state.sidebarVisibility}
                        />
                        <a onMouseUp={this.handleMouseDown}><i id="rightArrow" className="fas fa-arrow-right fa-2x"></i></a>
                    </div>
                    <section id="bigSection">
                        <div className="column is-11 is-fullheight">
                            <div className="tile is-ancestor">
                                <div className="level tile is-4 is-vertical is-parent">
                                    <div className="level-item tile is-child box">
                                        <PriceCard
                                            companyName={this.props.quote.companyName}
                                            symbol={this.props.quote.symbol}
                                            latestPrice={this.props.quote.latestPrice}
                                        /> <br />
                                        {
                                            this.props.clicked
                                                ? <span className="button" disabled>Added to watchlist</span>
                                                : <span className="button is-link" onClick={this.handleOnClick}>Add to watchlist</span>
                                        }
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
                                            );
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
                    </section>
                </div>
            </section>

        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.chartData.isLoading,
    quote: state.chartData.quote,
    peers: state.chartData.peers,
    // news: state.getDatanews,
});

const mapDispatchToProps = dispatch => ({
    addToWatchlist: ticker => dispatch(addToWatchlist(ticker)),
    getData: symbol => dispatch(getData(symbol)),
    flipClicked: () => dispatch(flipClicked())
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);