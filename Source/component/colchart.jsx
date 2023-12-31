'use client'
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


export default function BasicBars( {_color , _data}) {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['A','B','C','D','E','F','G','H','I','J'] }]}
      series={[{ data:_data||[5, 18, 12, 51, 68, 11, 39, 37, 27, 20] ,color:_color }]}
      width={150}
      height={160}
      bottomAxis={null}
      leftAxis={null}
      axisHighlight={{x:'none',}}
      tooltip={{trigger:'item'}}
    />
  );
}


// [5, 18, 12, 51, 68, 11, 39, 37, 27, 20]