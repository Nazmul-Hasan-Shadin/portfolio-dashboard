"use client";
import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { ReactNode, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import {
  ProjectOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { FaGraduationCap } from "react-icons/fa";

import { Content, Header } from "antd/es/layout/layout";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    key: "Projects",
    label: <Link href={"/projects"}>Projects</Link>,
    icon: <FaTerminal />,
  },
  {
    key: "Skills",
    label: <Link href={"/skills"}>Skills</Link>,
    icon: <FaGraduationCap />,
  },
  {
    key: "create-project",
    label: <Link href={"/add-project"}> Add-Project</Link>,
    icon: <ProjectOutlined />,
  },
  {
    key: "Add skills",
    label: <Link href={"/add-skill"}>Add Skills</Link>,
    icon: <FaFolderPlus />,
  },
];

const Dashboard = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout style={{ height: "100vh", background: "white" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          breakpoint="lg"
          collapsedWidth={0}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
        >
          <div className="text-center " style={{ background: "white" }}>
            <Image
              width={120}
              height={100}
              className="rounded-full"
              alt="Nazmul Hasan Shadin image"
              src={"https://avatars.githubusercontent.com/u/111014373?v=4"}
            />
          </div>

          <Menu
            style={{ height: "100%" }}
            mode="inline"
            theme="light"
            items={items}
          />
        </Sider>

        <Layout>
          <Header className="p-0 " style={{ background: "white" }}>
            <Button
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              title="hi"
            />
          </Header>
          <Content style={{ margin: 24 }}>
            <div> {children} </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
