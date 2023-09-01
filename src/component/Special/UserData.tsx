import React from 'react'
import { Paper } from '../../styles/components'
import { List } from 'antd'
import UserImg from '../../assets/img/user.png'
import styled from 'styled-components'
const data = [
    {title: 'Xudud', value: 'Andijon'},
    {title: 'Tuman', value: 'Andijon shaxar'},
    {title: 'Maxalla', value: 'Tinchlik'},
    {title: 'Unvoni', value: 'Kapitan'},
    {title: 'Maxalla', value: 'Tinchlik'},
    {title: 'Maxalla', value: 'Tinchlik'},
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

const BoxWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    column-gap: 16px;
`

export default function UserData() {
  return (
    <Paper className='user-data'>
        <BoxWrapper>
            <img src={UserImg} className='user-data__img' alt="user" />
            <List style={{flexGrow: '1'}}>
                {data.map((item, index) => (
                    <ListItem className='list__item' key={index}>
                        <span className='list__item--title'>{item.title}:</span>
                        <span className='list__item--value'>{item.value}</span>
                    </ListItem>
                ))}
            </List>
        </BoxWrapper>
    </Paper>
  )
}
