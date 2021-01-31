import React from "react";
import { Layout, Space } from "antd";
import footer from "../../resources/img/home/footer-demo.png";
const { Footer } = Layout;

const FooterContainer = () => {
  return (
    <Footer className="footer-bg">
      <div className="footer-content">
        {/* <Space size="large">
          <div className="left-content">
            <h1>Liên hệ tư vấn về chương trình</h1>
            <h3>
              Bạn quan tâm tới chương trình Toán Khoa? Đội ngũ chuyên viên giáo
              dục tại Major Education luôn sẵn sàng hỗ trợ
            </h3>
            <li>
              269A Nguyen Trong Tuyen Street, Ward 10, District Phu Nhuan,HCM
              City, Viet Nam
            </li>
            <li>hungtien@truongvietanh.com</li>
            <li> Tel: (028) 3997 2266</li>
          </div>
          <div className="right-content">Map</div>
        </Space> */}
        <img src={footer} alt={footer} height="350" />
      </div>
    </Footer>
  );
};

export default FooterContainer;
