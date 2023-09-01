import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import { EmployerTab, Paper } from '../../styles/components'
import { Space } from 'antd'
import { DiteilLayout } from '../../component/layout'
import { Balance, ProgressBar, StatesTable } from '../../component'
import StudetnManager from '../../component/Manager/StudetnManager'

const employers = [
    {count: 8, desc: 'Xodimlar soni'},
    {count: 0, desc: 'Shatlar'},
    {count: 5, desc: 'Vakantlar'},
    {count: 5, desc: 'Vakantlar'},
    {count: 5, desc: 'Vakantlar'},
]

export default function Employeer() {

    const sideContent = (
        <>
        <Balance />
        <ProgressBar />
        </>
    )

  return (
    <div>
        <Space style={{flexWrap: 'wrap', marginBottom: '1rem'}}>
        {employers.map((item, index) => (
            <EmployerTab key={index}>
                <div className="user-icon">
                    <AiOutlineUser />
                </div>
                <div>
                    <div className="count">{item.count}</div>
                    <div className="desc">{item.desc}</div>
                </div>
            </EmployerTab>
        ))}
        </Space>
        <DiteilLayout sideContent={sideContent}>
            <Paper>Xodimla  soni shat boyicha</Paper>
            <StatesTable />
        </DiteilLayout>
        <StudetnManager config={{title: 'Xodimlar', entity: 'employeers'}} />
    </div>
  )
}
