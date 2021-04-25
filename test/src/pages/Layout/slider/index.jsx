import routerConfig from "../../../config/router.config"
import { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Menu } from 'antd';
import { Consumer }  from '../../../context/index'
import store  from '../../../redux/index'
import {
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

function Slider(props) {
  console.log(111, props)
    console.log(store.getState())
    setTimeout(() => {
      console.log(store.getState())
    }, 3000)
    // const [collapsed, setCollapsed] = store.getState() ? store.getState().collapsed
    useEffect(() => {
      console.log(3333)
    }, [store.getState().collapsed])
    // function clickMenuItem(e) {
    //   history.push('/activityManagement')
    // }
    return (
      <Consumer>
        {
          (collapsed) => {
            return (
              <div className="slider" style={{width: collapsed ? 80 : 200}}>
                <Menu
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={collapsed}
                >
                  {
                    routerConfig.menu.map(item => {
                      return (
                        item.route == 1 && !item.hidden ? !item.children ?
                        <Menu.Item onClick={() => clickMenuItem(item)} key={item.id} icon={<PieChartOutlined />}>
                          {item.meta.title}
                        </Menu.Item> :
                        <SubMenu key={item.id} icon={<MailOutlined />} title={item.meta.title}>
                            {item.children.map(options => {
                              return (
                                !options.hidden ? 
                                <Menu.Item onClick={() => clickMenuItem(options)} key={options.id}>{options.meta.title}</Menu.Item>
                                : null
                              )
                            })}
                        </SubMenu> : null
                      )
                    })
                  }
                </Menu>
              </div>
            )
          }
        }
      </Consumer>
    )
}
export default Slider