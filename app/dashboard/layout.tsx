'use client'

import SideNav from '@/app/ui/dashboard/sidenav';
import React, { useState } from 'react'
import { Layout, Menu, theme, Button } from 'antd';
import 'antd/dist/reset.css'
import { UploadOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined, DashboardOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
import { useRouter } from 'next/navigation';

 
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const nav = useRouter()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
  return (
    // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    //   <div className="w-full flex-none md:w-64">
    //     <SideNav />
    //   </div>
    //   <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    // </div>
    // <Layout>
    //   <Sider width="25%">
    //     <SideNav />
    //   </Sider>
    //   <Layout>
    //     <Header>Header</Header>
    //     <Content>{children}</Content>
    //   </Layout>
    // </Layout>
    <Layout style={{ height: '100vh' }}>
      <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
              }}
              
          />
      </Header>
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="60" trigger={null} collapsible collapsed={collapsed} 
        onBreakpoint={(broken) => {
          console.log(broken);
          setCollapsed(broken)
        }}>
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['/dashboard']}
                onClick={({ key }) => {
                    nav.push(key)
                }}
                items={[
                    {
                        key: '/dashboard',
                        icon: <DashboardOutlined />,
                        label: 'Home',
                    },
                    {
                        key: '/dashboard/invoices',
                        icon: <UserOutlined />,
                        label: 'Invoices',
                    },
                    {
                        key: '/dashboard/customers',
                        icon: <UploadOutlined />,
                        label: 'Customers',
                    },
                ]}
            />
        </Sider>
        <Content
            style={{
                margin: '12px',
                padding: '8px',
                minHeight: 280,
                background: colorBgContainer,
                overflow: 'auto'
            }}
        >
            {children}
        </Content>
      </Layout>
    </Layout>
  );
}