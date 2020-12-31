import React, { FC } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

interface TabProps {
  onChange?: (key: string) => void;
}

const Tab: FC<TabProps> = ({ onChange }) => {
  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane tab="Tab 1" key="tab1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="tab2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="tab3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default Tab;
