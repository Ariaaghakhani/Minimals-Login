'use client'

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts'
// const Chart = dynamic(()=>import('react-apexcharts'),{ssr:false})


export default function Donut() {

    const [chart, setChart] = useState({
        series: [],
        chartoptions: {},
        options: {

        }
    }
    )

    useEffect(() => {
        setChart({
            series: [12244, 53345, 44313, 78343],
            chartoptions: { labels: ['Mac', 'Windows', 'iOS', 'Android'] },
            options: {
                legend: {
                    show: true,
                    position: 'bottom',
                    margin: 10,
                },
                plotOptions: {
                    pie: {

                        donut: {
                            size: '90%',
                            labels: {
                                show: true,

                                name: {
                                    show: true,
                                    fontWeight: 700
                                },
                                value: {
                                    show: true,
                                    fontWeight: 700,
                                    fontSize: '24px'
                                },
                                total: {
                                    show: true,
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    color: 'black'
                                }

                            }
                        }
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                labels: ['Mac', 'Windows', 'iOS', 'Android'],
                chart: {
                    id: 'donut',
                    animations: {
                        enabled: true,
                        easing: 'easeinout',
                        speed: 800,
                        animateGradually: {
                            enabled: true,
                            delay: 150
                        },
                        dynamicAnimation: {
                            enabled: true,
                            speed: 350
                        }
                    },
                    padding: 0,
                    height: 'auto',
                    width: '100%',
                    type: 'donut',
                    dataLabels: {
                        enabled: false,
                    },

                },

            }
        })
    }, [])


    return (
        <div>
            <Chart options={chart.options} series={chart.series} chartOptions={chart.chartoptions} type="donut" width={'100%'} />
        </div>

    )
}

