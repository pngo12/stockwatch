import React, { PureComponent } from 'react';
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

class Chart extends PureComponent {
    render() {
        let data = {
            labels: this.props.chartData.data && this.props.chartData.data.map(arr => arr.minute),
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
                    data: this.props.chartData.data && this.props.chartData.data.map(arr => arr.high)
                },
            ]
        }

        return (
            <div>
                {this.props.doneLoading && <Line data={data} />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    doneLoading: state.doneLoading,
    chartData: state.chart
})

export default connect(mapStateToProps, null)(Chart)