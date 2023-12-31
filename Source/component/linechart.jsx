'use client'

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";


export default function Line() {
    const [chart, setChart] = useState({
        series: [{
            name: "Asia",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49]
        },
        {
            name: "America",
            data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 75]
        }],
        options: {
            chart: {
                height: '200px',
                type: 'line',
                zoom: {
                    enabled: false
                },
            },
            colors:
                ['#00E396', '#FEB019']
            ,
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],
                title:{
                    style:{
                        opacity:0.5
                    }
                },
                
            },
            legend:{
                position:'top',
                textAlign:'right'
            },
            grid:{
                show:true,
                row: {
                    colors: undefined,
                    opacity: 0.5
                },
            },
            toolbar:{
                show:false,
                tools:{
                    download:false
                }
            }
        },
    })

    useEffect(() => {
        setChart({
            series: [{
                name: "Asia",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49]
            },
            {
                name: "America",
                data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 75]
            }],
            options: {
                chart: {
                    height: '200px',
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],
                },
                toolbar:{
                    show:false,
                    tools:{
                        download:false,
                    }
                }
            },
        })
    }, [])

    return (
        <div>
            <ReactApexChart options={chart.options} series={chart.series} type="line" />
        </div>
    )
}


