import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Loading from "../views/Loading";

const { Content } = Layout;

const Main: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Layout hasSider>
        <Sidebar />
        <Content className="pl-[200px] pt-[120px] min-h-screen pr-[80px] pb-[50px]">
          <Loading>
            <Outlet />
          </Loading>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
