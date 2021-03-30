import React, { useState, useEffect } from "react";
import { Button } from 'antd';
import "./index.css"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Menu,Dropdown } from 'antd';
const menu = (
  <Menu>
    <Menu.Item>
      <span>版本：基础试用版</span>
    </Menu.Item>
    <Menu.Item>
      <span>到期时间：2020-12-02</span>
    </Menu.Item>
  </Menu>
);
export default function Header(props) {
    const { toggleCollapsed } = props
    let [collapsed, setCollapsed] = useState(false)
    function clickButton() {
      setCollapsed(!collapsed)
      toggleCollapsed(collapsed)
    }
    return (
      <div className="header">
        <Button type="primary" onClick={() => clickButton(!collapsed)} style={{ marginTop: 14 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <div className="user-box">
          <div className="name">
            <p>客户经理：刘卫国</p>
            <p>电话：139-2867-7965</p>
          </div>
          <Dropdown overlay={menu}>
            <Avatar size={42} icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </div>
    )
}