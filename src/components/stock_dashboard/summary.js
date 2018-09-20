import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Chart from './chart'
import Profile from './profile'
import Quote from './quote'
import Sidebar from '../sidebar/sidebar'
import Button from '../buttons/button'
import { addToWatchlist, getData } from '../../actions'


class Summary extends PureComponent {
    handleOnClick = () => {
        this.props.addToWatchlist(this.props.quote.symbol)
    }

    componentDidMount() {
        this.props.getData(this.props.match.params.id)
    }

    render() {
        return (
            <section className="container is-fluid">
                <div className="columns is-marginless">
                    <div className="column is-10 is-offset-2">
                        <section className="section">
                            <p className="title">{this.props.quote.companyName} ({this.props.quote.symbol})</p>
                            <span className="is inline-flex">
                                <p className="subtitle">${this.props.quote.latestPrice}</p>
                                <div className="columns">
                                    <div className="column is-2">
                                        <Button onClick={this.handleOnClick} text="Add to watchlist" />
                                    </div>
                                    <div className="column is-2 is-pulled-left">
                                        <Button text="Add to portfolio" />
                                    </div>
                                </div>
                            </span>
                        </section>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-fullheight is-2 is-pulled-left">
                        <Sidebar />
                    </div>
                    <div className="column is-7 is-fullheight is-pulled-left">
                        <Chart />
                        <Profile />
                    </div>
                    <div className="column is-3 is-fullheight is-pulled-right">
                        <Quote />
                    </div>
                </div>
                <section className="section"></section>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    quote: state.quote
})

const mapDispatchToProps = dispatch => ({
    addToWatchlist: ticker => dispatch(addToWatchlist(ticker)),
    getData: symbol => dispatch(getData(symbol))
})


export default connect(mapStateToProps, mapDispatchToProps)(Summary)