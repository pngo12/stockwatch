import React, { Component } from 'react';
import {connect} from 'react-redux'
import Chart from './chart'
import Profile from './profile'
import Quote from './quote'
import Sidebar from '../sidebar/sidebar'
import Loading from '../../images/loading.gif'

class Dashboard extends Component {
    render() {
        if(this.props.isLoading){
            return <img src={Loading} alt='A loading gif'/>
        } 
        return ( 
            <section className="container is-fluid">
            <div className="columns">
                <div className="column is-10 is-offset-2">
                        <span>
                            <p className="title">{this.props.quote.companyName}</p>
                            <p className="is-size-5">{this.props.quote.symbol}</p>
                        </span>
                    <p className="subtitle">${this.props.quote.latestPrice}</p>
                </div>
            </div>
            <div className="columns">
                <div className="column is-fullheight is-2 is-pulled-left">
                    <Sidebar />
                </div>
                <div className="column is-7 is-fullheight is-pulled-left">
                    <Chart />
                    <Profile />
                </div>
                <div className="column is-2 is-fullheight is-pulled-right">
                    <Quote />
                </div>
            </div>
            </section>
         );
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    quote: state.quote
})


export default connect(mapStateToProps, null)(Dashboard)