import React from 'react'
import { Paper } from '../../styles/components'
import {List, Typography} from 'antd'
import styled from 'styled-components'
const data = [
    {title: '1.2', value: 'Патруллик йўналиши хизмат олиб борилган вақтда жиноят содир этилмаган кунлар'},
    {title: '1.2', value: 'Патруллик йўналиши хизмат олиб борилган вақтда жиноят содир этилмаган кунлар'},
    {title: '1.2', value: 'Патруллик йўналиши хизмат олиб борилган вақтда жиноят содир этилмаган кунлар'},
    {title: '1.2', value: 'Патруллик йўналиши хизмат олиб борилган вақтда жиноят содир этилмаган кунлар'},
    {title: '1.2', value: 'Патруллик йўналиши хизмат олиб борилган вақтда жиноят содир этилмаган кунлар'},
    {title: '1.2', value: 'Патруллик йўналиши хизмат олиб борилган вақтда жиноят содир этилмаган кунлар'},

]

const ListItem = styled(List.Item)`
    background-color: #fff;
    margin-bottom: 1rem;
    border-radius: 6px;
    padding: 6px 12px !important;
    border: none !important;
    justify-content: flex-start;

    .list__item--title{
        font-weight: 700;
        flex-basis: 50%;
    }

    &:nth-child(even){
        background-color: #F9FAFB;
    }
`
export default function StudentTask() {
  return (
    <Paper>
        <Typography.Text className='paper__title'>Active Students</Typography.Text>
        <List style={{flexGrow: '1'}}>
            {data.map((item, index) => (
                <ListItem className='list__item' key={index}>
                    <span className='list__item--title'>{item.title}:</span>
                    <span className='list__item--value'>{item.value}</span>
                </ListItem>
            ))}
        </List>
    </Paper>
  )
}
