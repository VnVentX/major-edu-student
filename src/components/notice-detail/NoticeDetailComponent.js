import React from "react";
import { Space } from "antd";

const NoticeDetailComponent = () => {
  return (
    <div className="notice-bg">
      <div className="page">
        <div className="page-contain">
          <div className="notice-container">
            <div className="notice-detail-title" />
            <div className="notice-wrap">
              <div className="notice-outter-border">
                <div className="notice-inner-border">
                  <Space direction="vertical" size="middle">
                    <div className="announce-title">
                      <h1>This is test announcement</h1>
                    </div>
                    <div className="announce-date">
                      <span>01/01/2021, 10:00AM</span>
                    </div>
                    <div className="annouce-content">
                      <h2>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut
                        aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit, sed diam nonummy
                        nummy nibh euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation iam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex
                        ea commodo consequat. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut
                        aliquip ex ea commodo consequat.
                      </h2>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetailComponent;
