import { Button, Space } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import StudetnManager from '../../component/Manager/StudetnManager'
import { Tab } from '../../types'
import { studentTabs } from '../../mock/data'

export default function Students() {

  return (
        <div className='students'>
            <div className="tabs" style={{marginBottom: '1rem'}}>
                <Tabs />
            </div>
            <StudetnManager config={{title: 'Students', entity: 'students'}} />
        </div>
  )
}


const TabItem = styled(Button)<{isActive: boolean}>`
    border: 1px solid;
    border-color: ${(props) => props.isActive ? '#0088e2': 'gray'};
    color: ${(props) => props.isActive ? '#0088e2': 'gray'};
`

function Tabs() {

    const [active, setActive] = useState(studentTabs[0].key)

    const handleClick = (tab: Tab) => {
        setActive(tab.key)
        // logic work
    }

    return(
        <Space wrap>
            {studentTabs.map((item) => {
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
