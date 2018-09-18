import React, { Component } from 'react';
import Button from '../buttons/button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../actions'

class SearchInput extends Component {
    state = { 
        ticker: ''
     }

    onChange = e => { 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        let props = this.props
        let state = this.state
        console.log('did this fire')
        e.preventDefault();
        props.getQuote(state.ticker)
        props.getCompany(state.ticker)
        props.getEarnings(state.ticker)
        props.getPeers(state.ticker)
        props.getChart(state.ticker)
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                <input name="ticker" 
                onChange={this.onChange}
                value={this.state.name}
                className="input is-hovered"
                type="text"
                placeholder="Example: AAPL"
                />
                <button className="button"><Link to='/dashboard'>Get Data</Link></button>
                </form>
            </div>
         );
    }
}

const mapDispatchToProps = dispatch => ({
    getQuote: ticker => dispatch(actions.getQuote(ticker)),
    getCompany: ticker => dispatch(actions.getCompany(ticker)),
    getEarnings: ticker => dispatch(actions.getEarnings(ticker)),
    getPeers: ticker => dispatch(actions.getPeers(ticker)),
    getChart: ticker => dispatch(actions.getChart(ticker))
})
 
export default connect(null,mapDispatchToProps)(SearchInput)