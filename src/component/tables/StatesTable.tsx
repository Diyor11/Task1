import React from 'react'
import ReactApexChart from 'react-apexcharts'
import {statesChart} from '../../mock/chartData'
import {Typography, Space} from 'antd'

export default function StatesTable() {
  return (
    <div className='table'>
        <Space className='table__header'>
          <Typography.Title className='table__title'>Spending Statics</Typography.Title>
        </Space>
        <ReactApexChart options={statesChart.options} series={statesChart.series} type="bar" height={350} style={{maxWidth: '100', overflowX: 'hidden'}} />  
    </div>
  )
}
