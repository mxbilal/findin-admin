import { LockOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Upload, DatePicker, Form, Input, Space } from 'antd';
import { Link } from 'react-router-dom';
const Register = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Space>
        <Form.Item
          name="firstname"
          rules={[
            {
              required: true,
              message: 'Please input your Firstname!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First name" />
        </Form.Item>
        <Form.Item
          name="lastname"
          rules={[
            {
              required: true,
              message: 'Please input your lastname!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last name" />
        </Form.Item>
      </Space>
      <Space><Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item></Space>
      <Space>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your Phone!',
            },
          ]}
        >
          <Space.Compact>
            <Input
              style={{
                width: '20%',
              }}
              defaultValue="0571"
            />
            <Input
              style={{
                width: '80%',
              }}
              defaultValue="26888888"
            />
          </Space.Compact>
        </Form.Item>
        <Form.Item
          name="dob"
          rules={[
            {
              required: true,
              message: 'Please input your DOB!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="country"
          rules={[
            {
              required: true,
              message: 'Please input your Country!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="text"
            placeholder="Country"
          />
        </Form.Item>
      </Space>

      <Form.Item>
        <Upload name='file' onChange={(info) => console.log(info)} maxCount={1} >
          <Button icon={<UploadOutlined />}>Upload Profile</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        <Link to={'/login'}>Already have account</Link>
      </Form.Item>
    </Form>
  );
};
export default Register;