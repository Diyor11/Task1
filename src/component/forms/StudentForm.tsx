import React from 'react'
import { Paper } from '../../styles/components'
import { Typography, Form, Input, Select, Space, Button } from 'antd'
const {Text} = Typography

type Props = {
    closeForm: () => void
}

export default function StudentForm({closeForm}: Props) {
  return (
    <Paper>
        <Typography.Text className='paper__title' style={{marginBottom: '1rem'}}>Active Student</Typography.Text>
        <Form className='form'>
            <Form.Item>
                <Text className='form__label'>First Name</Text>
                <Input placeholder='John Doe' />
            </Form.Item>
            <Form.Item>
                <Text className='form__label'>First Name</Text>
                <Select defaultValue={'Jons'}>
                    <Select.Option value='h'>Salom</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item >
                <Text className='form__label'>First Name</Text>
                <Input placeholder="Name placeholder" />
            </Form.Item>
            <Space>
                <Form.Item >
                    <Text className='form__label'>First Name</Text>
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item >
                    <Text className='form__label'>First Name</Text>
                    <Input placeholder="input placeholder" />
                </Form.Item>
            </Space>
            <Space style={{justifyContent: 'space-between', display: 'flex'}}>
                <Button size='large' onClick={closeForm}>Clear Filtiring</Button>
                <Button size='large' type='primary' onClick={closeForm}>Filtiring</Button>
            </Space>
        </Form>
    </Paper>
  )
}
