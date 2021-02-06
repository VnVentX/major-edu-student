import React from "react";
import { Layout } from "antd";
import "../resources/css/map.css";
import MapComponent from "../components/map/MapComponent";

const { Content } = Layout;
const Map = () => {
  return (
    <Layout>
      <Content className="container">
        <MapComponent />
      </Content>
    </Layout>
  );
};

export default Map;
