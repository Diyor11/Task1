import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import { EmployerTab, Paper } from '../../styles/components'
import styled from 'styled-components'
import { Col, Row, Space } from 'antd'
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

const listData = {
    firstCol: [{title: 'Xodimlar soni shat', value: 8},{title: 'Ishsizlar', value: 8},{title: 'Tatildagilar', value: 8},],
    secondCol: [{title: 'Shtatlar', value: 1},{title: 'Xodimlar soni shat', value: 0},]
}

const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 0 16px;
    margin-bottom: 8px;

    .label{
        font-weight: 600;
        color: #111;
    }
    .value{
        color: #afafaf
    }
`

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
            <Paper>
                <Row>
                    <Col span={12}>
                        <ul style={{borderRight: '1px solid #333'}}>
                            {listData.firstCol.map((item, index) => (
                                <ListItem key={index}>
                                    <span className="label">{item.title}</span>
                                    <span className="value">{item.value}</span>

                                </ListItem>
                            ))}
                        </ul>
                    </Col>
                    <Col span={12}>
                        <ul>
                            {listData.secondCol.map((item, index) => (
                                <ListItem key={index}>
                                    <span className="label">{item.title}</span>
                                    <span className="value">{item.value}</span>

                                </ListItem>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Paper>
            <StatesTable />
        </DiteilLayout>
        <StudetnManager config={{title: 'Xodimlar', entity: 'employeers'}} />
    </div>
  )
}
