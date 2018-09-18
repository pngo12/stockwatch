import React, { Component } from 'react';
import Button from '../buttons/button'
import SearchInput from '../search-input/search-input'

class HeroHome extends Component {
    state = { 
        showInput: false,
        hideButton: false
     }

     renderInput = () => {
         this.setState({
             showInput: true,
             hideButton: true
         })
     }

    render() { 
        return ( 
            <section className="hero is-light is-fullheight">
                <div className="hero-head">
                    <header className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                                </a>
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
                        {
                        !this.state.hideButton && <Button onClick={this.renderInput} text='Get Started' />
                        }
                        {
                        this.state.showInput && <SearchInput />
                        }
                    </div>
                </div>
            </section>
         );
    }
}
 
export default HeroHome;