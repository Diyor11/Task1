import React from 'react'
import UserData from '../../component/Special/UserData'
import DitelLayout from '../../component/layout/DitelLayout'
import { ProgressBar, StatesTable, StudentsTable } from '../../component'
import { BalanceBox, Paper, StatusBadge } from '../../styles/components'
import { Typography } from 'antd'
import { BsArrowUp} from 'react-icons/bs'

export default function Client() {

  const sideContent = (
    <>
    <Paper>
      <BalanceBox>
      <div className="paper__header">
        <Typography.Title level={5}>KPI ko'rsatkichi</Typography.Title>
        <StatusBadge send>
          <BsArrowUp className='status-icon' />
        </StatusBadge>
      </div>
      <div className="price">
          <div className="amount">$120,435.00</div>
          <div className="curency">(USD)</div>
      </div>
      <span>From Jan 01, 2022 to Jan 31, 2022</span>
      </BalanceBox>
    </Paper>
    <ProgressBar />
    </>
  )

  return (
    <div className='client'>
        <DitelLayout sideContent={sideContent} >
            <UserData />
            <StatesTable />
            <StatesTable />
        </DitelLayout>
    </div>
  )
}
