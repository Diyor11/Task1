import React from 'react'
import { Button, Space, Typography } from 'antd'
import {TfiLayoutMenuSeparated} from 'react-icons/tfi' 
import {BsSearch} from 'react-icons/bs'
import {GrCurrency} from 'react-icons/gr'
import { BalanceBox, Paper } from '../../styles/components'

export default function Balance() {
  return (
    <Paper>
      <BalanceBox>
        <Space className='paper__header' style={{alignItems: 'baseline'}}>
            <Typography.Title className='paper__title'>Your balance</Typography.Title>
            <TfiLayoutMenuSeparated />
        </Space>
        <div className="price">
            <div className="amount">$120,435.00</div>
            <div className="curency">(USD)</div>
        </div>
        <span>From Jan 01, 2022 to Jan 31, 2022</span>
        <div className="pricing__actions">
            <Button type="primary"  icon={<BsSearch />}>Income</Button>
            <Button type="default" icon={<GrCurrency />}>Outcome</Button>
        </div>  
        </BalanceBox>
    </Paper>
  )
}
