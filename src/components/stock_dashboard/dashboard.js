import React, { Component } from 'react';
import {connect} from 'react-redux'
import Chart from './chart'
import Profile from './profile'
import Quote from './quote'
import Loading from '../../images/loading.gif'

class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
            {
                this.props.isLoading && <img src={Loading}/>
            }
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