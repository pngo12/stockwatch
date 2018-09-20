import React, { PureComponent } from 'react';
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import {getChartDate} from '../../actions'

class Chart extends PureComponent {
    state = {
        range: ''
    }
    
    handleOnClick = range => {
        this.setState({
            range
        }, () => this.props.getChartDate(range)
        )
    }

    // checkDateSelected = range => {
    //     switch(range){
    //         case '1m':
    //             return this.props.chartData.data && this.props.chartData.data.map(arr => arr.label)
    //         case '3m':
    //             return this.props.chartData.data && this.props.chartData.data.map(arr => arr.label)
    //         case '6m':
    //             return this.props.chartData.data && this.props.chartData.data.map(arr => arr.label)
    //         case '1y':
    //             return this.props.chartData.data && this.props.chartData.data.map(arr => arr.label)
    //         case '5y':
    //             return this.props.chartData.data && this.props.chartData.data.map(arr => arr.label)
    //         default:
    //             return this.props.chartData.data && this.props.chartData.data.map(arr => arr.minute)
    //     }
    // }
    // checkDateSelected = range => {
    //     if (range === '1m' || range === '3m' || range === '6m' || range === '1y' || range === '5y'){
    //         return this.props.chartData.data && this.props.chartData.data.map(arr => arr.close)
            
    //     } else return this.props.chartData.data && this.props.chartData.data.map(arr => arr.average)
    // }

    checkDateSelected = range => {
        if (range === '1m' || range === '3m' || range === '6m' || range === '1y' || range === '5y'){
            console.log(this.props.chartData.data && this.props.chartData.data.map(arr => arr.close))
        } console.log(this.props.chartData.data && this.props.chartData.data.map(arr => arr.average))
    }
    render() {
        let data = {
            labels: this.props.chartData.data && this.props.chartData.data.map(arr => arr.label),
            datasets: [
                {
                    label: 'Daily Prices',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    // data: this.checkDateSelected(this.state.range)
                    data: this.props.chartData.data && this.props.chartData.data.map(arr => arr.average)
                },
            ]
        }
        return (
            <div>
                {this.props.doneLoading && <Line data={data} />}
                    <div className="buttons has-addons is-pulled-right">
                    <span className="button" onClick={() => this.handleOnClick('1m')}>1m</span>
                    <span className="button" onClick={() => this.handleOnClick('3m')}>3m</span>
                    <span className="button" onClick={() => this.handleOnClick('6m')}>6m</span>
                    <span className="button" onClick={() => this.handleOnClick('1y')}>1y</span>
                    <span className="button" onClick={() => this.handleOnClick('5y')}>5y</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    doneLoading: state.doneLoading,
    chartData: state.chart
})

const mapDispatchToProps = dispatch => ({
    getChartDate: time => dispatch(getChartDate(time))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chart)