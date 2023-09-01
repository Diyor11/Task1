import React from 'react'
import { Space, Typography } from 'antd'
import {BsArrowDown, BsArrowUp} from 'react-icons/bs'
const {Title} = Typography

export default function Prices() {
  return (
    <div className='table pricing'>
        <div className='pricing-inner'>
            <div className="pricing-income pricing__item">
                <Space className="table__header">
                    <Title className='table__title'>Total Income</Title>
                    <button className='status status_send'>
                        <BsArrowDown className='send-icon' />
                    </button>
                </Space>
                <div className="price">
                    <div className="amount">$50,310.00</div>
                    <span className='currency'>(USD)</span>
                </div>
                <div className="dicount">
                    <strong className='status_incrise'>20%</strong>  increase compared to last week
                </div>
            </div>
            <div className="pricing-expense pricing__item">
                <Space className='table__header'>
                    <Title className='table__title'>Total Expense</Title>
                    <button className='status status_recive'>
                        <BsArrowUp className='recive-icon' />
                    </button>
                </Space>
                <div className="price">
                    <div className="amount">$25,980.00</div>
                    <span className='currency'>(USD)</span>
                </div>
                <div className="dicount">
                    <strong className='status_descrise'>10%</strong>  increase compared to last week
                </div>
            </div>
        </div>
    </div>
  )
}