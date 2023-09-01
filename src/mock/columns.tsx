import {ColumnsType} from 'antd/es/table'
import {Tag} from 'antd'
import React from 'react';

interface DataType {
    key: string;
    title: string;
    amount: number;
    status: string;
    date: string
}

export const columns: ColumnsType<DataType> = [
    {
      title: 'Transition',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: String) => {
        let color = status === 'pending' ? 'volcano' : 'green';
        return (
            <>
                <Tag color={color}>{status.toUpperCase()}</Tag>
            </>
        )
      },
    },
  ];

export const StudentsCol = [
  {
    title: 'Uses'
  }
]