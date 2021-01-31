import React from "react";
import { Layout } from "antd";
import banner_science from "../../resources/img/banner_science.jpg";

const { Content } = Layout;

const SlideShow = () => {
  return (
    <Content className="content-slide-show">
      <div>
        <img src={banner_science} alt="banner_science" />
      </div>
    </Content>
  );
};

export default SlideShow;
