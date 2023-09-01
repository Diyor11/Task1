import React from 'react'
import {DatePicker, Space, Typography, Table} from 'antd'
import dayjs from 'dayjs'
import {columns} from '../../mock/columns'
import {transitions as data} from '../../mock/data'

const dateFormat = 'YYYY-MM-DD';

export default function Transitions() {
  return (
    <div className='table'>
        <Space className="table__header">
          <Typography.Title className='table__title'>Transitions History</Typography.Title>
          <DatePicker defaultValue={dayjs('2023-09-01', dateFormat)} />
        </Space>
        <div className="tabel__content">
            <Table columns={columns} dataSource={data} />
        </div>
    </div>
  )
}
