import React, { PureComponent } from 'react';
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { getChartDate } from '../../actions'
import loading from '../../images/loading.gif'

class Chart extends PureComponent {
    state = {
        range: '',
    }
    
    // Takes in the data range for the chart and fetches data from API
    handleOnClick = range => {
        this.setState({
            range }, 
            () => this.props.getChartDate(this.state.range, this.props.ticker))
    }

    render() {
        let data = {
            labels: this.props.chartData.map(arr => arr.label),
            datasets: [
                {
                    label: 'Price',
                    fill: false,
                    lineTension: .3,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'round',
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
                    data: this.props.chartData.map(arr => arr.high)
                },
            ],
            options: {
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                reponsive: true,
            }
        }

        return (
            <div>
                {this.props.isLoading 
                ? <img src={loading} /> 
                : <Line 
                width={500}
                height={500}
                options={data.options}
                
                data={data} />}

                    <div className="buttons has-addons is-pulled-right">
                    <span className="button" onClick={() => this.handleOnClick('1d')}>1d</span>
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
    isLoading: state.isLoading,
    chartData: state.chart,
    ticker: state.ticker,
})

const mapDispatchToProps = dispatch => ({
    getChartDate: (range,ticker) => dispatch(getChartDate(range,ticker))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chart)