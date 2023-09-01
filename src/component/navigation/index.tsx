import React, { ReactNode } from 'react'
import {Menu} from 'antd'

import {AiFillPieChart} from 'react-icons/ai'
import {BsJournalBookmark} from 'react-icons/bs'
import {FaUserGraduate} from 'react-icons/fa'
import {BsPersonVcard} from 'react-icons/bs'
import {TbBrandCtemplar} from 'react-icons/tb'

import Logo from '../../assets/img/icons/dashboard.svg'
import { NavLink } from 'react-router-dom'

export type MenuItem = {
    key: string;
    icon?: ReactNode;
    label: string;
  };
  
export const menuItems: MenuItem[] = [
    { label: 'Dashboard', key: '/', icon: <AiFillPieChart /> },
    { label: 'Students', key: '/students', icon: <BsJournalBookmark />},
    { label: 'Clients', key: '/clients', icon: <FaUserGraduate /> },
    { label: 'Profile', key: '/profile', icon: <BsPersonVcard /> },
    { label: 'Employer', key: '/employeer', icon: <TbBrandCtemplar /> },
];

export default function Navigation() {

  return (
    <div className='navigation'>
        <div className='logo'>
            <img src={Logo} alt="logo" width='160px' />
        </div>
        <ul className='navs'>
          {menuItems.map(item => (
            <li key={item.key} className='navs__item'>
              <NavLink to={item.key} 
                className={({isActive}) => `nav__link ${isActive ? 'active':''}`}
              >
                <span className='navs__icon'>{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
    </div>
  )
}
