import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Chart from './chart'
import Profile from './profile'
import Quote from './quote'
import Sidebar from '../sidebar/sidebar'
import { addToWatchlist, getData } from '../../actions'
import News from '../news/news'


class Summary extends PureComponent {
    state = {
        clicked: false
    }
    
    handleOnClick = () => {
        this.props.addToWatchlist(this.props.quote.symbol)
        this.setState({
            clicked: !this.state.clicked
        })
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
                                <div className="buttons">
                                {
                                this.state.clicked 
                                ? <span className="button" disabled>Added to watchlist</span>
                                : <span className="button" onClick={this.handleOnClick}>Add to watchlist</span>
                                }
                                    <span className="button">Add to portfolio</span>
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
                        <div className="columns is-multiline"></div>
                        <Profile />
                        
                        {
                            this.props.news.map((x, index) => {
                                return (
                                    <div classname="column is-1" key={index}>
                                        <News
                                            headline={x.headline}
                                            summary={x.summary}
                                            url={x.url}
                                        />
                                    </div>
                                )
                            })
                         }   


                        <News 
                        imageUrl={this.props.image}
                        headline={this.props.headline}
                        summary={this.props.summary}
                        url={this.props.url}
                        />
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
    quote: state.quote,
    news: state.news
})

const mapDispatchToProps = dispatch => ({
    addToWatchlist: ticker => dispatch(addToWatchlist(ticker)),
    getData: symbol => dispatch(getData(symbol)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Summary)