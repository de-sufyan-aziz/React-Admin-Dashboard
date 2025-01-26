import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
    LineElement,
    PointElement,
    Filler
} from 'chart.js';
import React from 'react';
import { Bar, Doughnut, Pie, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    LineElement,
    PointElement,
    Filler
);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export const BarChart = ({ horizontal = false, data_1, data_2, title_1, title_2, bgColor1, bgColor2, legends = true, labels = months }) => {

    const options = {
        indexAxis: horizontal ? 'y' : 'x',
        responsive: true,
        plugins: {
            legend: {
                display: legends,
            },
            title: {
                display: true,
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    }
                },
                x: {
                    grid: {
                        display: false,
                    }
                },
            }
        },
    };


    const data = {
        labels,
        datasets: [
            {
                label: title_1,
                data: data_1,
                backgroundColor: bgColor1,
                // barthickness: 'flex',
                // barPercentage: 1,
                categoryPercentage: 0.4
            },
            {
                label: title_2,
                data: data_2,
                backgroundColor: bgColor2,
                categoryPercentage: 0.4

            },
        ],
    };
    return <Bar width={horizontal ? "200%" : ""} options={options} data={data} />
}


export const DoughnutChart = ({ data, labels, backgroundColor, offset = 20, legends = true, cutout }) => {
    const doughnutData = {
        labels,
        datasets: [
            {
                data,
                backgroundColor,
                borderWidth: 0,
                cutout: cutout,
                offset,
            },
        ],
    };

    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: legends,
                position: 'bottom',
                labels: { padding: 40 },
            },
        },
    };

    return <Doughnut data={doughnutData} options={doughnutOptions} />;
};



export const PieChart = ({ data, labels, backgroundColor, offset }) => {
    const pieChartData = {
        labels,
        datasets: [
            {
                data,
                backgroundColor,
                borderWidth: 1,
                offset,
            },
        ],
    };

    const pieChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return <Pie data={pieChartData} options={pieChartOptions} />;
};


export const LineCharts = ({ horizontal = false, data, bgColor, borderColor, legends = true, label, labels = months }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: legends,
            },
            title: {
                display: false,
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    }
                },
                x: {
                    grid: {
                        display: false,
                    }
                },
            }
        },
    };

    const lineChartData = {
        labels,
        datasets: [
            {
                label,
                data,
                backgroundColor: bgColor,
                borderColor,
                fill: true
            },
        ],
    };
    return <Line options={options} data={lineChartData} />
}