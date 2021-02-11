import React from "react";
import { Layout, Menu, Result, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Switch, Route, Link } from "react-router-dom";

import routers from "../../../router.js";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DefaultLayout extends React.Component {
  state = {
    collapsed: false,
    location: window.location.pathname,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          theme="dark"
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
        >
          {/* <div className="logo" /> */}
          <Menu
            theme="dark"
            defaultSelectedKeys={[this.state.location]}
            mode="inline"
          >
            {/* {this.menuElems()} */}
            {routers.map((router) => {
              return router.children ? (
                <SubMenu key="sub1" icon={<UserOutlined />} title={router.name}>
                  {router.children.map((submenu) => (
                    <Menu.Item key={submenu.path} icon={submenu.icon}>
                      <Link to={submenu.path}>{submenu.name}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={router.path} icon={router.icon}>
                  <Link to={router.path}>{router.name}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                {routers.map((router) => {
                  if (router.children) {
                    return router.children.map((submenu) => {
                      return (
                        <Route key={submenu.path} path={submenu.path}>
                          {submenu.component}
                        </Route>
                      );
                    });
                  } else {
                    return (
                      <Route key={router.path} path={router.path}>
                        {router.component}
                      </Route>
                    );
                  }
                })}
                <Route path="/">
                  <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary">Back Home</Button>}
                  />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by MrDat
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
