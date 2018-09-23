import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Chart from './chart'
import Profile from './profile'
import Quote from './quote'
import Sidebar from '../sidebar/sidebar'
import { addToWatchlist, getData } from '../../actions'
import News from '../news/news'
import SearchInput from '../search-input/search-input'
import PriceCard from '../price-card/priceCard'
import Peers from '../peers/peers'

class Summary extends PureComponent {
    state = {
        clicked: false,
        sidebarVisibility: false
    }
    
    handleOnClick = () => {
        this.props.addToWatchlist(this.props.quote.symbol)
        this.setState({
            clicked: true
        })
    }
    
    componentDidMount() {
        this.props.getData(this.props.match.params.id)
    }

    toggleSidebar = () => {
        this.setState({
            sidebarVisibility: !this.state.sidebarVisibility
        })
    }

    handleMouseDown = e => {
        this.toggleSidebar()
        e.stopPropagation()

    }

    render() {
        return (
            // <section className="container is-fluid">
            //     <div className="columns is-marginless">
            //         <div className="column is-10 is-offset-2">
            //             <section className="section">
            //                 <p className="title">{this.props.quote.companyName} ({this.props.quote.symbol})</p>
            //                 <span className="is inline-flex">
            //                     <p className="subtitle">${this.props.quote.latestPrice}</p>
            //                     <div className="buttons">
            //                     {
            //                     this.state.clicked 
            //                     ? <span className="button" disabled>Added to watchlist</span>
            //                     : <span className="button" onClick={this.handleOnClick}>Add to watchlist</span>
            //                     }
            //                         <span className="button">Add to portfolio</span>
            //                     </div>
            //                 </span>
            //             </section>
            //         </div>
            //     </div>
            //     <div className="columns">
            //         <div className="column is-fullheight is-2 is-pulled-left">
            //             <Sidebar />
            //         </div>
            //         <div className="column is-7 is-fullheight is-pulled-left">
            //             <Chart />
            //             <div className="columns is-multiline"></div>
            //             <Profile />
                        
            //             {
            //                 this.props.news.map((x, index) => {
            //                     return (
            //                         <div classname="column is-1" key={index}>
            //                             <News
            //                                 headline={x.headline}
            //                                 summary={x.summary}
            //                                 url={x.url}
            //                             />
            //                         </div>
            //                     )})
            //              }   
            //         </div>
            //         <div className="column is-3 is-fullheight is-pulled-right">
            //             <Quote />
            //         </div>
            //     </div>
            //     <section className="section"></section>
            // </section>

            <div className="columns">
                <div className="column is-fullheight container is-fluid">
                <Sidebar 
                handleMouseDown={this.handleMouseDown}
                sidebarVisibility={this.state.sidebarVisibility}
                />
                    <a onMouseDown={this.handleMouseDown}><i className="fas fa-arrow-right fa-2x"></i></a>
                </div>
                    <section className="is-large">
                        <div className="column is-11 is-fullheight">
                            <div className="tile is-ancestor">
                                <div className="tile is-4 is-vertical is-parent">
                                    <div className="tile is-child box">
                                        <p className="title">One</p>
                                        <PriceCard 
                                        companyName={this.props.quote.companyName} 
                                        symbol={this.props.quote.symbol} 
                                        latestPrice={this.props.quote.latestPrice} 
                                        /> <br />
                                            {
                                            this.state.clicked 
                                            ? <span className="button" disabled>Added to watchlist</span>
                                            : <span className="button" onClick={this.handleOnClick}>Add to watchlist</span>
                                            }
                                </div>
                            <div className="tile is-child box">
                                <p className="title">Two</p>
                                    <Profile />
                                </div>
                            <div className="tile is-child box">
                                <p className="title">Three</p>
                                <p className="title">Peers</p>

                                {this.props.peers.map((peers,i) => {
                                    return (
                                        <span className="inline" key={i}>
                                        <Peers 
                                        peers={peers}
                                        />
                                        </span>
                                    )
                                })}

                            </div>
                            <div className="tile is-child box">
                                <p className="title">Four</p>
                                    <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                            </div>
                        </div>
                        <div className="tile is-parent is-vertical is-8">
                            <div className="tile is-child box">
                                <p className="title">Five</p>
                                <Chart />
                            </div>
                            <div className="tile is-child box">
                                <p className="title">Six</p>
                                    <Quote />
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </div>




        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    quote: state.quote,
    news: state.news,
    peers: state.peers
})

const mapDispatchToProps = dispatch => ({
    addToWatchlist: ticker => dispatch(addToWatchlist(ticker)),
    getData: symbol => dispatch(getData(symbol)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Summary)