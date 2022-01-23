import React from 'react';
import Chart from "react-apexcharts";
import useNoData from '../../customHooks/useNoData';
import './Stats.scss';

const setChart = (data) => {
    const labels = [];
    const stats = [];

    data.forEach(item => {
        labels.push(...Object.keys(item));
        stats.push(...Object.values(item));
    })

    const chartOptions = {
        options: {
            labels,
            noData: {
                text: "Loading..."
            },
            plotOptions: {
                bar: {horizontal: true}
            },
        },
        series: [{
            name: "stat",
            data: stats
        }]
    }

    return <Chart type="bar" width="100%" options={chartOptions.options} series={chartOptions.series}/>
}

const Stats = ({ data = [] }) => (
    <div className="stats">
        <h3 className="stats__headline pokemon__details-headline">Estadísticas</h3>
        {useNoData(data, setChart(data))}
    </div>
)

export default Stats;
