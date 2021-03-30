import React, { useState, useEffect } from "react";
import { Tabs } from 'antd';
import './index.css'
const { TabPane } = Tabs;
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const tabBarExtraContent = () => {
  // return (
    <div>
      22222
    </div>
  // )
}

export default function activityManagement() {
    let [collapsed, setCollapsed] = useState(true)
    let [tabList, setTabList] = useState(['今日', '本周', '本月', '累计'])
    useEffect(() => {
      setCollapsed(1)
    })
    function callback(key) {
      console.log(key);
    }
    
    
    return (
        <div className='box'>
          {/* {<{tabBarExtraContent} />} */}
          {tabBarExtraContent}
          <Tabs defaultActiveKey="0" onChange={callback}>
              {
                tabList.map((tab, index) => {
                  return (
                    <TabPane tab={tab} key={index}>
                      {tab}
                    </TabPane>
                  )
                })
              }
          </Tabs>
        </div>
    )
}