import React from 'react';

import { Form, Input } from 'antd';
import { Typography, Button } from 'antd';
import SideContent from './SideContent';
import { login } from '../../redux/auth/actions';
import { useAppDispatch } from '../../hooks';
import { NavLink } from 'react-router-dom';

const { Title, Text } = Typography;
  
  const SinupPage = () => {
    const dispatch = useAppDispatch()

    const handelSubmit = () => {
      // take data validate and some logic
      const userData = {email: 'test email', password: 'password'}
      dispatch(login(userData))
    }

  
    return (
      <div className='auth'>
          <SideContent />
        <div className='auth__box'>
          <div className='box-inner'>
            <Title level={3} className='auth__title'>Tizimga kirish</Title>
            <div className='auth__form auth-form'>
              <Form
               onFinish={handelSubmit}
              >
                <Form.Item
                  name='ivv'
                >
                  <Text className='label'>IVV</Text>
                  <Input type='text' placeholder='IVV' />
                </Form.Item>
                <Form.Item
                  name='ivv_manager'
                >
                  <Text className='label'>IVV BOSHQARMASI</Text>
                  <Input type='text' placeholder='IVV BOSHQARMASI' />
                </Form.Item>
                <Form.Item
                  name='login'
                >
                  <Text className='label'>Login</Text>
                  <Input type='text' placeholder='Login' />
                </Form.Item>
                <Form.Item
                  name='password'
                >
                  <Text className='label'>Password</Text>
                  <Input type='password' placeholder='password' />
                </Form.Item>
                <Button className='auth-form__button' type="primary" style={{width: '100%'}} onClick={handelSubmit}>Kirish</Button>
              </Form>
              <Typography.Text>If you have already account plase <NavLink to='/login'>Login</NavLink></Typography.Text>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SinupPage;