import React, { Component } from 'react';
import Button from '../buttons/button'
import SearchInput from '../search-input/search-input'
import { connect } from 'react-redux'
import { flipBool } from '../../actions'

class HeroHome extends Component {
    state = {
        showInput: false,
        showButton: true
    }
    renderInput = () => {
        this.setState({
            showInput: true,
            showButton: false
        })
    }

    // componentDidMount() {
    //     this.props.flipBool()
    // }
    
    render() {
        return (
            <section className="hero is-light is-fullheight">
                <div className="hero-head">
                    <header className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                {/* <a className="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                                </a> */}
                            </div>
                            <div className="navbar-end">
                                <a className="navbar-item">Home</a>
                                <a className="navbar-item">About</a>
                                <a className="navbar-item">Sign Up</a>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Stock Watch</h1>
                        <h2 className="subtitle">Let's get yo data playa</h2>
                        <div className="field is-horizontal">
                            <div className="field-label">
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-4">
                                {
                                    this.state.showButton && <Button onClick={this.renderInput} text='Get Started' />
                                }
                                {
                                    this.state.showInput && <SearchInput />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

// const mapDispatchToProps = dispatch => ({
//     flipBool: () => dispatch(flipBool())
// })

// export default connect(null, mapDispatchToProps)(HeroHome)
export default HeroHome