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
                    </tr>
                    <tr>
                        <td>${quote.open}</td>
                        <td>${quote.change}</td>
                        
                    </tr>
                    <tr>
                        <th>High</th>
                        <th>Change Percentage</th>
                    </tr>
                    <tr>
                        <td>${quote.high}</td>
                        <td>{quote.changePercent}%</td>
                    </tr>
                    <tr>
                        <th>Low</th>
                        <th>Volume</th>
                    </tr>
                    <tr>
                        <td>${quote.low}</td>
                        <td>{quote.iexVolume}</td>
                    </tr>
                    <tr>
                        <th>52 Week High</th>
                        <th>Market Cap</th>
                    </tr>
                    <tr>
                        <td>${quote.week52High}</td>
                        <td>{quote.marketCap}</td>
                    </tr>
                    <tr>
                        <th>52 Week High</th>
                        <th>Price/Earnings Ratio</th>
                    </tr>
                    <tr>
                        <td>${quote.week52High}</td>
                        <td>{quote.peRatio}</td>
                    </tr>
                    <tr>
                        <th>52 Week High</th>
                        <th>Market Cap</th>
                    </tr>
                    <tr>
                        <td>${quote.week52High}</td>
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
