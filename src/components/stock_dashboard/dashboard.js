import React, { Component } from 'react';
import {connect} from 'react-redux'
import Chart from './chart'
import Profile from './profile'
import Quote from './quote'
import Loading from '../../images/loading.gif'

class Dashboard extends Component {
    render() {
        if(this.props.isLoading){
            return <img src={Loading} alt='A loading gif'/>
        } 
        return ( 
            <div className="container">
                <Profile />
                <Quote />
                <Chart />
            </div>
         );
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading
})


export default connect(mapStateToProps, null)(Dashboard)