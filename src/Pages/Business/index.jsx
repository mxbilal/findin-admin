import React, { useEffect, useState } from 'react'
import AuthService from '../../services/AuthService'
import { Space, Table, Tag } from 'antd';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Category Name',
    dataIndex: 'categoryName',
    key: 'categoryName',
  },
  {
    title: 'Business Name',
    dataIndex: 'businessName',
    key: 'businessName',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Update</a>
        <a>Delete</a>
      </Space>
    ),
  }
]
const Business = () => {
  const [businessData, setBusinessData] = useState([])

  useEffect(() => {
    AuthService.get('/Business/GetAllBusinesses')
      .then(res => {
        if (res.status === 200) {
          toast.success('Business Data Recieved')
          setBusinessData(res?.data?.result ?? [])
        }
      })
  }, [])
  return (
    <div>
      <Table columns={columns} dataSource={businessData} />
    </div>
  )
}

export default Business
