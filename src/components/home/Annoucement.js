import React from "react";
import { Layout, Space } from "antd";
import { StarFilled } from "@ant-design/icons";

const { Content } = Layout;
const Annoucement = () => {
  return (
    <Content className="site-layout">
      <div className="announcement">
        <div className="announcement-title">
          <h1>Annoucement</h1>
        </div>
        <div className="announcement-content">
          <ul className="announcement-list">
            <Space direction="vertical" size="large">
              <li>
                <StarFilled />
                <span style={{ marginLeft: 20 }}>Annoucement 1</span>
              </li>
              <li>
                <StarFilled />
                <span style={{ marginLeft: 20 }}>Annoucement 2</span>
              </li>
              <li>
                <StarFilled />
                <span style={{ marginLeft: 20 }}>Annoucement 3</span>
              </li>
              <li>
                <StarFilled />
                <span style={{ marginLeft: 20 }}>Annoucement 4</span>
              </li>
            </Space>
          </ul>
          <a style={{ padding: "0 0 30px 80px" }} href="#blank">
            See more...
          </a>
        </div>
      </div>
    </Content>
  );
};

export default Annoucement;
