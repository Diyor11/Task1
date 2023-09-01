import { Button, Col, Row, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { StudentTask, StudentsTable } from '../../component'
import styled from 'styled-components'
import { SectionHeader } from '../../styles/components'
import ClientsTable from '../../component/tables/ClientsTable'
import { useModalContext } from '../../context'

export default function Clients() {

    const {state, actions} = useModalContext()

    const breakpoints = state.taskList ? {table: 16, list: 8}:{table: 24, list: 0}

  return (
        <div className='students'>
            <SectionHeader>
                <Typography.Title className='section__title'>Mijoz Saxifasi</Typography.Title>
                <Button type='primary' onClick={actions.toggleTasks}>Vazifalar</Button>
            </SectionHeader>
            <div className="tabs" style={{marginBottom: '1rem'}}>
                <Tabs />
            </div>
            <Row gutter={16}>
                <Col span={breakpoints.table}>
                    <ClientsTable />
                </Col>
                <Col span={breakpoints.list}>
                    <StudentTask />
                </Col>
            </Row>
        </div>
  )
}

type Tab = {text: string, count: number, key: string}
const tabs: Tab[] = [
    {text: 'All', count: 20, key: 'all'},
    {text: 'Lorem Ipsum', count: 11, key: 'lorem1'},
    {text: 'Lorem', count: 14, key: 'lorem'},
    {text: 'News', count: 3, key: 'news'},
]

const TabItem = styled(Button)<{isActive: boolean}>`
    border: 1px solid;
    border-color: ${(props) => props.isActive ? '#0088e2': 'gray'};
    color: ${(props) => props.isActive ? '#0088e2': 'gray'};
`

function Tabs() {

    const [active, setActive] = useState(tabs[0].key)

    const handleClick = (tab: Tab) => {
        setActive(tab.key)
        // logig work
    }

    return(
        <Space wrap>
            {tabs.map((item) => {
                let isActive = active === item.key
                return(
                    <TabItem 
                        isActive={isActive}
                        key={item.key}
                        className={`tabs__item ${isActive ? 'active':''}`} 
                        onClick={() => handleClick(item)}
                    >
                        {item.text} <span className='count'>{item.count}</span>
                    </TabItem>
                )
            })}
        </Space>
    )
}
