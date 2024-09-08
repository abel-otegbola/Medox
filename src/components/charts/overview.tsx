'use client'
import { ChartData } from '@/helpers/chartData';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import { useState } from 'react';

Chart.register( CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend );

import { Line } from 'react-chartjs-2';

export default function OverviewChart() {
    const [scheduleData, ] = useState([0,3,2,5,4,2])
    const [patientsData, ] = useState([0,2,1,3,2,5])

    const data = {
        labels: ChartData(),
        datasets: [
            {
                data: scheduleData,
                borderColor: "rgba(200, 53, 53, 0.6)",
                fill: {
                    target: 'origin',
                    above: "rgba(200, 53, 53, 0.2)",
                    below: "rgba(0, 0, 0, 0.1)",
                }
            },
            {
                data: patientsData,
                borderColor: "rgba(40, 50, 200, 0.6)",
                fill: {
                    target: 'origin',
                    above: "rgba(40, 50, 200, 0.2)",
                    below: "rgba(0, 0, 0, 0.1)",
                }
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            line: {
                tension: 0.4,
                borderWidth: 2,
            },
            point: {
                radius: 2,
                hitRadius: 0
            }
        }
        
    }

    return (
        <Line data={data} options={options} />
    )
}