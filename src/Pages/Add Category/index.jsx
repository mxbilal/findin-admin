import React, { useState } from 'react'
import { Input, Space, Select, Button, Upload, Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const AddCategory = () => {
  const [category, setcategory] = useState([]),
    [selected, setSelected] = useState("select Category"),
    handleClick = (e) => console.log(e.key, e)
  return (
    <div>
      <Space direction='vertical' size={15}>
        <Form
          onFinish={(e) => console.log(e)}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input Category Name!',
              },
            ]}
          >
            <Input placeholder="category name" style={{ width: '300px' }} />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: 'Please input Description!',
              },
            ]}
          >
            <TextArea placeholder='description' showCount maxLength={100} />
          </Form.Item>
          <Form.Item
            name="parentId"
            rules={[
              {
                required: true,
                message: 'Please input Category Name!',
              },
            ]}
          >
            <Select
              // defaultValue="lucy"
              style={{ width: 200 }}
              onChange={e => console.log(e)}
              placeholder="Select Parent Category"
              options={[
                { value: 0, label: 'none' },
                { value: 0, label: 'Lucy' },
                { value: 0, label: 'yiminghe' },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="imageurl"
            rules={[
              {
                required: true,
                message: 'Please add Category image!',
              },
            ]}
          >
            <Upload name='file' onChange={(info) => console.log(info)} maxCount={1} >
              <Button icon={<UploadOutlined />}>Upload category Image</Button>
            </Upload>
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form>
      </Space>
    </div>
  )
}

export default AddCategory
