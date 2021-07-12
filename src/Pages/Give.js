//  import React from "react";
// //  import GiveForm2 from '../components/GiveForm2'
//  import GiveForm from '../components/GiveForm'
//  import SideBar from "../components/sidebar";

//  function Give() {
//    return (
//      <div>
//        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
//        <GiveForm></GiveForm>
//      </div>
//    );
//  }

//  export default Give;

import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Card,
  DatePicker,
  Radio,
  Layout,
} from "antd";
import SideBar from "../components/sidebar";
import "../css/mydiv.css";
import { Header, Body, Content } from "antd/lib/layout/layout";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const Give = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Layout>
      <Header className="background">
        <div className="menubar">
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        </div>
      </Header>

      <Content className="background">
        <br></br>
        <Card>
          <h1>ฟอร์ม</h1>
          <h5>*กรุณากรอกข้อมูลของผู้ป่วยตามจริง</h5>
          <h8>Serial Number: A101COVID</h8>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item label="วันที่ส่ง">
              <DatePicker />
            </Form.Item>
            <Form.Item
              name={["user", "name"]}
              label="ชื่อ-นามสกุล"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "age"]}
              label="อายุ"
              rules={[
                {
                  type: "number",
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={["user", "phone"]} label="เบอร์โทร">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "address"]} label="ที่อยู่">
              <Input.TextArea />
              <button>map</button>
            </Form.Item>

            <ColoredLine color="red" />

            <h3>สำหรับเจ้าหน้าที่</h3>

            <Form.Item label="วันที่รับคืน">
              <DatePicker />
            </Form.Item>

            <Form.Item
              name="radio-button"
              label="สถานะของผู้ป่วย"
              rules={[
                {
                  required: true,
                  message: "กรุณาระบุสถานะของผู้ป่วย",
                },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="a">แดง</Radio.Button>
                <Radio.Button value="b">เหลือง</Radio.Button>
                <Radio.Button value="c">เขียว</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};

export default Give;
