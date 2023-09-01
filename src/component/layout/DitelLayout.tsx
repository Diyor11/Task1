import { Col, Row } from "antd";
import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    sideContent?: ReactNode,
}

export default function DitelLayout({children, sideContent}: Props) {
  return (
    <Row gutter={12}>
            <Col span={16}>
                {children}
            </Col>
            <Col span={8}>
                {sideContent}
            </Col>
          </Row>
  )
}
