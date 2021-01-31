import React, { useState } from "react";
import { Space, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const ProfileMenu = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isDisplay, setDisplay] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
    setDisplay(!isDisplay);
  };

  return (
    <Button type="link" onClick={toggle}>
      <Space direction="horizontal" size="middle">
        <span style={{ fontSize: 32 }}>Trần Thiên Anh</span>
        <div className="drop-down-button">
          {React.createElement(collapsed ? DownOutlined : UpOutlined, {
            onClick: toggle,
          })}
        </div>
      </Space>
      <div className={isDisplay ? "drop-down" : "drop-down-inactive"}>
        <Space direction="vertical" size="large">
          <div className="drop-down-profile">Items 1</div>
          <div className="drop-down-profile">Items 1</div>
          <div className="drop-down-profile">Items 1</div>
        </Space>
      </div>
    </Button>
  );
};

export default ProfileMenu;
