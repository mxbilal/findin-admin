import { DashboardOutlined, AccountBookOutlined, MessageOutlined, ProfileOutlined, HomeOutlined, ScheduleOutlined, StarOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrums from '../../Component/BreadCrums';
const { Header, Content, Sider } = Layout;

const getItem = (label, key, icon, path, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
    path
  };
}
const items = [
  getItem('Dashboard', '1', <DashboardOutlined />, '/'),
  getItem('Messages', '2', <MessageOutlined />, '/messages'),
  getItem('Bookings', '3', <AccountBookOutlined />, '/bookings'),
  getItem('Add City', '4', <HomeOutlined />, '/city'),
  getItem('Business', 'sub1', <ScheduleOutlined />, undefined, [
    getItem('Add Business', '5', undefined, '/add-business'),
    getItem('Listing', '6', undefined, '/business'),
  ]),
  getItem('Category', 'sub2', <ProfileOutlined />, undefined, [
    getItem('Add Category', '7', undefined, '/add-category'),
    getItem('Listing', '8', undefined, '/category'),
  ]),
  getItem('Reviews', '9', <StarOutlined />, '/reviews')
];
const LayoutPage = ({ children }) => {
  const navigateTo = useNavigate(),
    [crumbs, setCrumbs] = useState([{ title: "Dashboard" }]),
    keyPath = window.location.pathname.split('/')[1] !== '' ? [localStorage.getItem('keypath') ?? '1'] : '1',
    openKeys = [['5', '6'].includes(keyPath[0]) ? 'sub1' : '', ['7', '8'].includes(keyPath[0]) ? 'sub2' : ''],
    {
      token: { colorBgContainer },
    } = theme.useToken();
  useEffect(() => {
    let url = window.location.pathname.split('/')
    let crumb = [{ title: 'Dashboard' }, { title: url[1] === "" ? "My Dashboard" : url[1] ?? "" }]
    setCrumbs(crumb)
  }, [window.location.pathname])
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: '0',
          zIndex: '999'
        }}
      >
        <div className="demo-logo" style={{ color: 'white' }}>Admin Logo</div>
        <Button>Logout</Button>
      </Header>
      <Layout hasSider>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
            overflow: 'auto',
            height: '88vh',
            position: 'sticky',
            left: 0,
            top: '65px',
            bottom: 0,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={keyPath}
            defaultOpenKeys={openKeys}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            onSelect={(it) => {
              localStorage.setItem("keypath", it.key)
              navigateTo(it.item.props.path)
            }}
            items={items}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
            // marginTop: '65px'
          }}
        >
          <BreadCrums items={crumbs} />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 300,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout >
  );
};
export default LayoutPage;