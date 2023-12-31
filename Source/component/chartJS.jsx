import { Doughnut } from 'react-chartjs-2'
import React, { useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'

function chartJS() {

    const [data, setData] = useState({
        labels: ['Mac', 'Windows', 'iOS', 'Android'],
        datasets: [{
            data: [12244, 53345, 44313, 78343],
            backgroundColor: ['#00E396','#FEB019','#03A9F4','#FA4443'],
            hoverOffset: 10,
            cutout: '90%',
        }],
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    textAlign: 'center',
                    pointStyle: 'circle'
                },
            }
        }
    })

    return (
        <Doughnut data={data} />
    )
}

export default chartJS