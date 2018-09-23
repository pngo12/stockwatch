import React, { PureComponent } from 'react';
import {connect} from 'react-redux'

class Summary extends PureComponent {
    render() { 
        let quote = this.props.quote
        return (
            <table className="table is-hoverable is-fullwidth">
                <tbody>
                    <tr>
                        <th>Open</th>
                        <th>Previous Close</th>
                        <th>High</th>
                        <th>Low</th>
                    </tr>
                    <tr>
                        <td>${quote.open}</td>
                        <td>${quote.previousClose}</td>
                        <td>${quote.high}</td>
                        <td>${quote.low}</td>
                    </tr>
                    <tr>
                        <th>52 Week High</th>
                        <th>52 Week Low</th>
                        <th>Ask Price</th>
                        <th>Bid Price</th>
                    </tr>
                    <tr>
                        <td>${quote.week52High}</td>
                        <td>${quote.week52Low}%</td>
                        <td>{quote.iexAskPrice}</td>
                        <td>${quote.iexBidPrice}</td>
                    </tr>
                    <tr>
                        <th>Change</th>
                        <th>Change %</th>
                        <th>Year to Date Change %</th>
                        <th>Price/Earnings</th>
                    </tr>
                    <tr>
                        <td>${quote.change}</td>
                        <td>{quote.changePercent}%</td>
                        <td>{quote.ytdChange}</td>
                        <td>{quote.peRatio}</td>
                    </tr>
                    <tr>
                        <th>Volume</th>
                        <th>Average Volume</th>
                        <th>Market Cap</th>
                        <th>Market Cap %</th>
                    </tr>
                    <tr>
                        <td>{quote.iexVolume}</td>
                        <td>{quote.avgTotalVolume}</td>
                        {/* Probably isn't market cap below */}
                        <td>{quote.marketCap}</td>
                        <td>{quote.iexMarketPercent}</td>
                    </tr>
                </tbody>
            </table>
         );
    }
}
 
const mapStateToProps = state => ({
    quote: state.quote
})

export default connect(mapStateToProps, null)(Summary)
