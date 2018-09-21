import React, { PureComponent } from 'react';
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import {getChartDate} from '../../actions'

class Chart extends PureComponent {
    state = {
        range: '',
        ticker: this.props.ticker,
        threeMonth:'',
        sixMonth:'',
        oneYear: '',
        fiveYear: ''
    }
    
    handleOnClick = range => {
        this.setState({
            range }, 
            () => this.props.getChartDate(this.state.range, this.state.ticker))
    }

    componentDidUpdate() {
            this.setState({
                ticker: this.props.ticker,
                threeMonth: this.props.chartData,
                sixMonth: '',
                oneYear: '',
                fiveYear: ''
            })
        }


    // checkDateSelected = range => {
    //     if (range === '1m' || range === '3m' || range === '6m' || range === '1y' || range === '5y'){
    //         return this.props.chartData.data && this.props.chartData.data.map(arr => arr.close)
    //     } else return this.props.chartData.data && this.props.chartData.data.map(arr => arr.average)
    // }

    // componentDidUpdate(){
    //    let range = this.state.range
    //     if (range === '1m' || range === '3m' || range === '6m' || range === '1y' || range === '5y') {
    //         return this.props.chartData && this.props.chartData.map(arr => arr.close)
    //     } return this.props.chartData && this.props.chartData.map(arr => arr.average)
    // }

    // componentDidUpdate(){
    //     this.props.getChartData()
    // }

    checkDateSelected = range => {
        if (range === '1m' || range === '3m' || range === '6m' || range === '1y' || range === '5y'){
            console.log(this.props.chartData && this.props.chartData.map(arr => arr.close))
        } console.log(this.props.chartData && this.props.chartData.map(arr => arr.average))
    }

    render() {
        let data = {
            // labels: this.checkDateSelected(this.state.range),
            labels: this.props.chartData && this.props.chartData.map(arr => arr.label),
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
                    data: this.props.chartData && this.props.chartData.map(arr => arr.average)
                },
            ]
        }
        return (
            <div>
                {this.props.chartData && <Line data={data} />}

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
    chartData: state.chart,
    ticker: state.ticker
})

const mapDispatchToProps = dispatch => ({
    getChartDate: (range,ticker) => dispatch(getChartDate(range,ticker))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chart)