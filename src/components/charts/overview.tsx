'use client'
import { ChartData } from '@/helpers/chartData';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import { useEffect, useState } from 'react';

Chart.register( CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend );

import { Line } from 'react-chartjs-2';

export default function OverviewChart() {
    const [submissionData, setSubmissionData] = useState([0,3,2,5,4,3])

    const data = {
        labels: ChartData(),
        datasets: [
            {
                data: submissionData,
                borderColor: "rgba(227, 97, 200, 0.6)",
                fill: {
                    target: 'origin',
                    above: "rgba(227, 97, 108, 0.2)",
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