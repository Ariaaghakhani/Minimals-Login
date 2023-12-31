import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'


function progressPie({color,percent}) {

    const [chart, setChart] = useState({
        series: [],
        options: {

        }

    })

    useEffect(() => {
        setChart({
            series: [percent],
            options: {
                chart: {
                    height: 100,
                    type: 'radialBar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    theme: {
                        mode: 'light',
                        palette: 'palette1',
                        monochrome: {
                            enabled: true,
                            color: '#00E396',
                            shadeTo: 'light',
                            shadeIntensity: 0.65
                        },
                    },
                    radialBar: {
                        startAngle: 0,
                        endAngle: 360,
                        hollow: {
                            margin: 0,
                            size: '80%',
                            background: 'transparent',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: false,
                                top: 0,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: 'rgba(0,0,0,0.2)',
                            //   strokeWidth: '67%',
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: 7,
                                show: true,
                                color: '#fff',
                                fontSize: '17px'
                            },
                            value: {
                                formatter: function (val) {
                                    return parseInt(val);
                                },
                                color: '#fff',
                                fontSize: '36px',
                                show: false,
                            }
                        }
                    }
                },
                fill: {
                    colors:[color],
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'vertical',
                        shadeIntensity: 0.3,
                        gradientToColors: [],
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: [`${percent}%`],
            },

        })
    }
    )

    return (
        <div>
            <ReactApexChart options={chart.options} series={chart.series} type='radialBar' height={130} />
        </div>
    )
}

export default progressPie