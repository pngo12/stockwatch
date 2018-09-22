import React, { PureComponent } from 'react';
import {connect} from 'react-redux'

class Quote extends PureComponent {
    render() { 
        let quote = this.props.quote
        return (
            <table className="table is-hoverable">
                <tbody>
                    <tr>
                        <th>Open</th>
                        <th>Change</th>
                        <th>Volume</th>
                    </tr>
                    <tr>
                        <td>${quote.open}</td>
                        <td>${quote.change}</td>
                        <td>{quote.latestVolume}</td>
                    </tr>
                    <tr>
                        <th>Prev Close</th>
                        <th>Change %</th>
                        <th>Avg Volume</th>
                    </tr>
                    <tr>
                        <td>${quote.previousClose}</td>
                        <td>{quote.changePercent}%</td>
                        <td>{quote.avgTotalVolume}</td>
                    </tr>
                    <tr>
                        <th>High</th>
                        <th>Price/Earnings</th>
                        <th>Mkt Cap</th>
                    </tr>
                    <tr>
                        <td>${quote.High}</td>
                        <td>{quote.peRatio}</td>
                        <td>{quote.marketCap}</td>
                    </tr>
                    <tr>
                        <th>Low</th>
                        <th>Bid Price</th>
                        <th>Mkt Cap %</th>
                    </tr>
                    <tr>
                        <td>${quote.low}</td>
                        <td>{quote.iexBidPrice}</td>
                        {/* Probably isn't market cap below */}
                        <td>{quote.iexMarketPercent}</td>
                    </tr>
                    <tr>
                        <th>Ask Price</th>
                        <th>YTD Change</th>
                    </tr>
                    <tr>
                        <td>${quote.iexAskPrice}</td>
                        <td>{quote.ytdChange}</td>
                    </tr>
                    <tr>
                        <th>52 Week Low</th>
                        <th>Market Cap</th>
                    </tr>
                    <tr>
                        <td>${quote.week52Low}</td>
                        <td>{quote.marketCap}</td>
                    </tr>
                </tbody>
            </table>
         );
    }
}
 
const mapStateToProps = state => ({
    quote: state.quote
})

export default connect(mapStateToProps, null)(Quote)
