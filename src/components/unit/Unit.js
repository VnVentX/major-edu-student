import React from "react";
import { Layout, Space } from "antd";
import "../../resources/css/unit.css";

const { Content } = Layout;
const Unit = () => {
  return (
    <Layout>
      <Content className="container">
        <div className="unit-container">
          <div className="unit-title">
            <h1>Unit</h1>
          </div>
          <div className="unit-wrap">
            <div class="review-1">
              <div className="content">
                <div className="upper">
                  <Space size="large">
                    <div className="unit-btn unit-1"></div>
                    <div className="unit-btn unit-2"></div>
                    <div className="unit-btn unit-3"></div>
                  </Space>
                </div>
                <div className="lower">
                  <div className="review-btn"></div>
                </div>
              </div>
            </div>
            <div class="semester-1">
              <div className="content">
                <div className="upper">
                  <Space size="large">
                    <div className="unit-btn unit-4"></div>
                    <div className="unit-btn unit-5"></div>
                    <div className="unit-btn unit-6"></div>
                  </Space>
                </div>
                <div className="lower">
                  <div className="review-btn"></div>
                </div>
              </div>
            </div>
            <div class="review-2">
              <div className="content">
                <div className="upper">
                  <Space size="large">
                    <div className="unit-btn unit-7"></div>
                    <div className="unit-btn unit-8"></div>
                    <div className="unit-btn unit-9"></div>
                  </Space>
                </div>
                <div className="lower">
                  <div className="review-btn"></div>
                </div>
              </div>
            </div>
            <div class="semester-2">
              <div className="content">
                <div className="upper">
                  <Space size="large">
                    <div className="unit-btn unit-10"></div>
                    <div className="unit-btn unit-11"></div>
                    <div className="unit-btn unit-12"></div>
                  </Space>
                </div>
                <div className="lower">
                  <div className="review-btn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Unit;
