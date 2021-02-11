import React from "react";
import { Card } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import "./Login-style.scss";
import { loginAction } from "../../../action/auth.js";
import { connect } from "react-redux";
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18,
  },
};
function Login(props) {
  const onFinish = (values) => {
    // start action
    props.loginAction(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login_form">
      <Card title="Login Form" bordered={true} style={{ width: 450 }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <p style={{ textAlign: "center", color: "red" }}>
            {props.errMessage}
          </p>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" loading={props.isLoading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isLoading,
    errMessage: state.auth.errMessage,
    isLoggedIn: state.auth.isLoggedIn,
  };
}
let ConnectLoginPage = connect(mapStateToProps, { loginAction })(Login);
export default ConnectLoginPage;
