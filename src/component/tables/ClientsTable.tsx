import { Table } from 'antd'
import {clientsData} from '../../mock/data'
import { Paper } from '../../styles/components'

const {Column} = Table

export default function ClientsTable() {
  return (
    <Paper className='table student-tabel'>
        <Table dataSource={clientsData}>
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Xizmat boshlangan kun" dataIndex="startDay" key="startday" />
            <Column title="1.1" dataIndex="first" key="first" />
            <Column title="1.2" dataIndex="first" key="second" />
            <Column title="1.3" dataIndex="first" key="thirt" />
            <Column title="1.4" dataIndex="first" key="fourth" />
        </Table>
    </Paper>
  )
}