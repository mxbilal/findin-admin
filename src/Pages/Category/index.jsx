import React, { useEffect, useState } from 'react'
import AuthService from '../../services/AuthService'
import { Space, Table, Switch, Skeleton, Modal } from 'antd';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Category = () => {
  const [businessData, setBusinessData] = useState([]),
    [loader, setLoader] = useState(true),
    [isModalOpen, setIsModalOpen] = useState(false),
    [data, setData] = useState({}),

    showModal = () => {
      setIsModalOpen(true);
    },

    handleOk = () => {
      setIsModalOpen(false);
    },
    handleCancel = () => {
      setIsModalOpen(false);
    };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'categoryId',
      key: 'categoryId',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Active/InActive',
      key: 'activeInActive',
      render: (data) =>
        <Switch checked={data.activeInActive} />

    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => {
            setData(record)
            setIsModalOpen(true)
          }}>Update</a>
          <a>Delete</a>
        </Space>
      ),
    }
  ]
  useEffect(() => {
    AuthService.get('/Business/GetAllCategories')
      .then(res => {
        if (res.status === 200) {
          toast.success('Category Data Recieved')
          setBusinessData(res?.data?.result ?? [])
          setLoader(false)
        }
        else {
          setLoader(false)
        }
      })
  }, [])
  return (
    <div>
      {
        loader ? <Skeleton active /> :
          <Table rowKey='categoryId' columns={columns} dataSource={businessData} />}
      <Modal title="Update Data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h3>{data.name ?? ""}</h3>
        <p>{data.description ?? ""}</p>
      </Modal>
    </div>
  )
}

export default Category
