import dynamic from 'next/dynamic'
import React from 'react'
const Chart = dynamic(() => import('./progressPie'), { ssr: false })

function progress() {
    return (
        <Chart />
    )
}

export default progress