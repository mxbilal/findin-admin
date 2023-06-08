import React from 'react'
import { Card, Col, Row } from 'antd';
const Dashboard = () => {
  return (
    <Row gutter={26}>
      <Col span={8}>
        <Card title="Messages" bordered={false} style={{ background: 'lightblue' }}>
          11 new Messages
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Reviews" bordered={false} style={{ background: 'lightblue' }}>
          26 new reviews
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Bookings" bordered={false} style={{ background: 'lightblue' }}>
          10 new bookings
        </Card>
      </Col>
    </Row>
  )
}

export default Dashboard
