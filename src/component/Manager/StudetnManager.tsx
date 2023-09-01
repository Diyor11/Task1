import React from 'react'
import StudentsTable from '../tables/StudentsTable'
import StudentForm from '../forms/StudentForm'
import { Row, Col } from 'antd'
import { useModalContext } from '../../context'


type Props = {
  config: {
    entity: string,
    title: string
  }
}
export default function StudetnManager({config}: Props) {

    const {state, actions: {toggleForm, closeForm}} = useModalContext()

    const breakpoints = state.studentForm ? {table: 16, form: 8}: {table: 24, form:0}

    // request to server and take data then give away to Student table

  return (
    <Row gutter={16}>
        <Col span={breakpoints.table}>
            <StudentsTable title={config.title} toggleModal={toggleForm} />
        </Col>
        <Col span={breakpoints.form}>
            <StudentForm closeForm={closeForm} />
        </Col>
    </Row>
  )
}
