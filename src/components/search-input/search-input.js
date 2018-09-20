import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from '../../actions'

class SearchInput extends Component {
    state = {
        ticker: '',
        click: false
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value.toUpperCase()
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.getData(this.state.ticker)
        this.setState({click: !this.state.click})
    }

    render() {
        // return (
        return this.state.click && this.props.redirect
            ? <Redirect to={`/summary/${this.state.ticker}`} />
            : (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input name="ticker"
                            onChange={this.onChange}
                            value={this.state.name}
                            className="input is-hovered"
                            type="text"
                            placeholder="Example: AAPL"
                        />
                        <div className="field is-horizontal">
                            <div className="field-label">
                            </div>
                        </div>
                        <button className="button" type='submit'>Get Data</button>
                        {
                            this.props.error 
                            ? <p>Sorry we had trouble finding that ticker</p> 
                            : <span></span>
                        }
                    </form>
                </div>
            );
    }
}

const mapStateToProps = state => ({
    redirect: state.redirect,
    error: state.error
})

const mapDispatchToProps = dispatch => ({
    getData: ticker => dispatch(getData(ticker))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)