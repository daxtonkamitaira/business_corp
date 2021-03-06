import { Card } from "./Card";

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { chartData } from "./Data";

const options = {
    chart: {
        height: '360px',
        type: 'column',
        style: {
            fontFamily: `'Blinker', sans-serif`,
        }
    },
    title: {
        text: 'Revenue by Product'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ]
    },
    yAxis: {
        min: 0,
        reversedStacks: false,
        title: {
            text: 'Billions of Dollars'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        series: {
            borderWidth: 0,
        },
        column: {
            stacking: 'normal'
        }
    },
    series: chartData
}

function Chart() {
    return <Card height={400}>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </Card>
}

export default Chart;
