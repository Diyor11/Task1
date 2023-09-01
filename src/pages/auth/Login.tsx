import React from 'react';

import { Form, Input } from 'antd';
import { Typography, Button } from 'antd';
import SideContent from './SideContent';
import { login } from '../../redux/auth/actions';
import { useAppDispatch } from '../../hooks';
import { NavLink } from 'react-router-dom';
const { Title, Text } = Typography;
  
  const LoginPage = () => {

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
                onFinishFailed={handelSubmit}
                autoComplete='off'
              >
                <Form.Item<string>
                  name='login'
                  rules={[{ required: true, message: 'Please input your username!' }]}

                >
                  <Text className='label'>Login</Text>
                  <Input type='text' placeholder='Login' />
                </Form.Item>
                <Form.Item<string>
                  name='password'
                  rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                  <Text className='label'>Password</Text>
                  <Input type='password' placeholder='password' />
                </Form.Item>
                <Form.Item>

                  <Button className='auth-form__button' type="primary" style={{width: '100%'}} onClick={handelSubmit}>Kirish</Button>
                </Form.Item>
            </Form>
            <Typography.Text>Haven't got account yet please <NavLink to='/signup'>Register</NavLink></Typography.Text>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginPage;