import React from "react";
import UnitComponent from "../components/unit/UnitComponent";
import { Layout } from "antd";

const { Content } = Layout;

const Unit = () => {
  return (
    <Layout>
      <Content className="container">
        <UnitComponent />
      </Content>
    </Layout>
  );
};

export default Unit;
