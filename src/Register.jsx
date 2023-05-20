import { Button, Row, Col, Form, Input } from "antd";
import React from "react";
import axios from "axios";

const Register = () => {
  const onFinish = async (values) => {
    const response = await axios.post("http://localhost:3000/register", values);
    console.log("Success:", response);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col
        span={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 500,
          margin: 100,
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            width: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
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

          {/* <Form.Item
            label="Confirm Password"
            name="confirm"
            rules={[
              {
                required: true,
                message: "Please retype your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default Register;
