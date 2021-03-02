import { Table, Avatar } from "antd";
// import { useTable } from "react-table";
import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import locale from "antd/lib/date-picker/locale/en_US";

const dataSource = [
  {
    key: '1',
    name: 'Uyen',
    class: '5A',
    school: 'Kim Dong Primary School',
  }
]

const columns = [
  {
    title: 'Class',
    dataIndex:'class',
    key:'class',
  },
  {
    title: 'School',
    dataIndex:'school',
    key:'school',
  }
]

const ProfileComponent = (props) => {
  return (
    <div className="page">
      <div className="page-contain">
        <div className="account-detail" >
          {/* <div className="account-logo"/> */}
            <Avatar size={100} icon={<UserOutlined />} />
            <div className="account-usename">Uyendlt</div>
            <div className="tbl-detail"/>
            <Table dataSource={dataSource} columns={columns}/>
              <Link
              to=""
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.href="/login";
              }}>
            <div className="logout-btn-profile"></div>
            </Link>
        </div>
      </div>
    </div>
    
  );
};

export default ProfileComponent;
