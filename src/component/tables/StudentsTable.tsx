import { Button, Input, Space, Typography, Table, Tag } from 'antd'
import {AiOutlineFilter, AiOutlinePlus} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {studentsData} from '../../mock/data'
import { StudentType } from '../../types'
import { Paper } from '../../styles/components'

const {Title} = Typography

type Props = {
    toggleModal?: () => void,
    title: string,
}
export default function StudentsTable({toggleModal, title}: Props) {
  return (
    <Paper className='table student-tabel'>
        <Space className='table__header'>
            <div className="table__info">
                <Space size='large'>
                    <Title className='paper__title'>Active {title}</Title>
                    <Title className='paper__title' style={{borderLeft: '1px solid', paddingLeft: '12px'}}>242 Users</Title>
                    <Input
                        placeholder="Enter your username"
                        prefix={<BsSearch className="site-form-item-icon" />}
                    />
                </Space>
            </div>
            <div className="table__actions">
                <Space size='small'>
                    <Button icon={<AiOutlineFilter />}>Button</Button>
                    <Button onClick={toggleModal} type='primary' icon={<AiOutlinePlus />}>Button</Button>
                </Space>
            </div>
        </Space>
        <StudentTable />
    </Paper>
  )
}

const { Column } = Table;

function StudentTable() {

    return(
        <Table dataSource={studentsData}>
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags: string[]) => (
                <>
                {tags.map((tag) => (
                    <Tag color="blue" key={tag}>
                        {tag}
                    </Tag>
                ))}
                </>
            )}
            />
            <Column
            title="Action"
            key="action"
            render={(_: any, record: StudentType[]) => (
                <Space size="middle">
                <span>Invite</span>
                <span>Delete</span>
                </Space>
            )}
            />
        </Table>
    )
}
