import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from '../../actions'

class SearchInput extends Component {
    state = {
        ticker: '',
        click: false,
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value.toUpperCase()
        })
    }

    handleSubmit = () => {
        this.props.getData(this.state.ticker)

    }

    render() {
        return (
            <div>
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
                <Link to={`/summary/${this.state.ticker}`} type="submit" className="button" onClick={this.handleSubmit} >Get Data</Link>
                {
                    this.props.error
                        ? <p>Sorry we had trouble finding that ticker</p>
                        : <span></span>
                }
            </div>
            // );
        )
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