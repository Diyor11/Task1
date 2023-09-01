import React, { useEffect, useState } from 'react'

import {Button, Input, Typography} from 'antd'
import {AiFillHome, AiOutlineRight} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {IoMdNotifications} from 'react-icons/io'
import { NavLink, useLocation } from 'react-router-dom'

import avatar from '../../assets/img/avatar.png'
import { MenuItem as MenuItemType, menuItems } from '../navigation'
import styled from 'styled-components'

const BreadcrumbItem = styled(NavLink)`
    color: #424242;
    font-weight: 700;
`

export default function Header() {    

    const [activePath, setActivePath] = useState<MenuItemType | null>(menuItems[0])
    const location = useLocation()
        
    useEffect(() => {

        const matchIndex = menuItems.findIndex(item => item.key === location.pathname)

        if(matchIndex >= 0) {
            const matchItem = menuItems[matchIndex]
            setActivePath(matchItem)
        }
    }, [location])

  return (
    <header className='header'>
        <div className="breadcrumb">
            <BreadcrumbItem to='/'>
                <AiFillHome className='breadcrumb__icon' />
            </BreadcrumbItem>
            <AiOutlineRight className='right-icon' />
            {
                activePath ? <BreadcrumbItem to={activePath.key}>{activePath.label}</BreadcrumbItem>:null
            }
        </div>
        <div className="header__info">
            <Input
                placeholder="Enter your username"
                prefix={<BsSearch className="site-form-item-icon" />}
            />
            <Button type="default" shape="circle" icon={<IoMdNotifications />} size={'small'} />
            <Typography.Text className='header__username'>Kruluz Utsman</Typography.Text>
            <div className="header__avatar">
                <img src={avatar} alt="avatar" className='header__avatar-img' />
            </div>
        </div>
    </header>
  )
}
