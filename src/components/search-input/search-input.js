import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from '../../actions'

class SearchInput extends Component {
    state = {
        ticker: '',
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.getData(this.state.ticker)
    }

    render() {
        return this.props.redirect
            ? <Redirect to='/dashboard' />
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
                        <button className="button" type='submit'> Get Data </button>
                    </form>
                </div>
            );
    }
}

const mapStateToProps = state => ({
    redirect: state.redirect
})

const mapDispatchToProps = dispatch => ({
    getData: ticker => dispatch(getData(ticker))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)