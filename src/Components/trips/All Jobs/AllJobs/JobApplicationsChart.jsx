import React from 'react';
import './alljobs.css'
import { ReactChart } from 'chartjs-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Title,
    Tooltip,
    Legend
);

const JobApplicationsChart = ({ chartData }) => {
    // Define a set of colors for each bar
    const colors = [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        'rgba(75, 192, 192, 0.3)',
        'rgba(153, 102, 255, 0.3)',
        'rgba(255, 159, 64, 0.3)',
    ];

    // Modify chartData to include unique colors for each bar
    const modifiedChartData = {
        ...chartData,
        datasets: chartData.datasets.map((dataset, index) => ({
            ...dataset,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
        }))
    };

    return (
        <div className="Chart-container">
            <h3>Job Applications Overview</h3>
            <div className="Chart-canvas">
                <ReactChart
                    type="bar"
                    data={modifiedChartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Number of Applications per Job',
                            },
                            legend: {
                                display: true,
                                position: 'bottom',
                            },
                        },
                        scales: {
                            x: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Jobs'
                                }
                            },
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Applications'
                                }
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default JobApplicationsChart;
