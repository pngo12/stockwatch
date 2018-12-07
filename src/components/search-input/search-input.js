import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from '../../redux/actions/index';

class SearchInput extends Component {
    state = {
        ticker: '',
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value.toUpperCase() });

    handleSubmit = () => this.props.getData(this.state.ticker);

    keyDown = e => {
        e.stopPropagation();
        if (e.keyCode === 13) this.props.getData(this.state.ticker);
    }

    render() {
        return (
            <div className="field is-grouped" id="dashboardInput">
                <input name="ticker"
                    onChange={this.onChange}
                    value={this.state.name}
                    className="input is-hovered"
                    type="text"
                    placeholder="Example: AAPL"
                    onKeyDown={this.keyDown}
                />
                <Link to={`/dashboard/${this.state.ticker}`}
                    type="submit"
                    id="submitButton"
                    className="button is-link"
                    onKeyDown={this.keyDown}
                    onClick={this.handleSubmit}>
                    Get Data </Link>
                {
                    this.props.error
                        ? <p>Sorry we had trouble finding that ticker</p>
                        : <span></span>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.getData.error
})

const mapDispatchToProps = dispatch => ({
    getData: ticker => dispatch(getData(ticker))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)