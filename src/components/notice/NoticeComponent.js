import React from "react";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

// import data
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '../notice/detail',
    title: `Thông báo ${i}`,
    description:
      'DD/MM/YY, 0:00',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const NoticeComponent = () => {
  return (
    <div className="page">
      <div className="page-contain">
        <div className="notice-component">
        <div className="notice-logo"></div>
        <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        footer={
          <div>
            
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
        </div>
    </div>
    </div>
  );
};

export default NoticeComponent;
