import React, { PureComponent } from 'react';
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { getChartDate } from '../../Redux/Actions'
import loading from '../../images/loading.gif'

class Chart extends PureComponent {
    state = {
        range: '',
    }

    // Takes in the data range for the chart and fetches data from API
    handleOnClick = range => {
        this.setState({
            range
        }, () => this.props.getChartDate(this.state.range, this.props.ticker))
    }

    render() {
        let data = {
            labels: this.props.chartData.filter(obj => obj.high > 0).map(arr => arr.label),
            datasets: [
                {
                    label: 'Price',
                    fill: false,
                    lineTension: .3,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#3273DC',
                    borderCapStyle: 'round',
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#fff',
                    pointBackgroundColor: '#7A7A7A',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#3273DC',
                    pointHoverBorderColor: '#7A7A7A',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.chartData.map(arr => arr.high).filter(val => val > 0)
                },
            ],
            options: {
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                reponsive: true,
            },
        }

        return (
            <div>
                {this.props.isLoading
                    ? <img src={loading} alt="a loading gif" />
                    : <Line
                        width={500}
                        height={500}
                        options={data.options}
                        data={data} />}

                <div className="buttons has-addons is-pulled-right">
                    <span className="button" value="1d" onClick={() => this.handleOnClick('1d')}>1d</span>
                    <span className="button" value="1m" onClick={() => this.handleOnClick('1m')}>1m</span>
                    <span className="button" value="3m" onClick={() => this.handleOnClick('3m')}>3m</span>
                    <span className="button" value="6m" onClick={() => this.handleOnClick('6m')}>6m</span>
                    <span className="button" value="1y" onClick={() => this.handleOnClick('1y')}>1y</span>
                    <span className="button" value="1d" onClick={() => this.handleOnClick('5y')}>5y</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.getData.isLoading,
    chartData: state.getData.chart,
    ticker: state.getData.ticker
})

const mapDispatchToProps = dispatch => ({
    getChartDate: (range, ticker) => dispatch(getChartDate(range, ticker))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chart)