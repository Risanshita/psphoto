import {
  Row,
  Col,
  Input,
  Radio,
  Space,
  DatePicker,
  Button,
  Select,
} from "antd";
import { useState } from "react";
import moment from "moment";

import "../components/globarvar";
import "./style.css";
import HomePage from "../screens/HomePage/HomePage";

function EditOptions() {
  const data = HomePage.senddata();
  console.log(data);
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const dateChnage = (e) => {
    console.log(e._d);
  };
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const [sizevalue, setSize] = useState(1);
  const [namedate, setnamedate] = useState(0);
  const [cname, setname] = useState("Ni30 Kumar");
  const onnamechange = (str) => {
    console.log(str);
    setname(str);
    global.username("dsf");
  };
  const onSizechnage = (e) => {
    setSize(e.target.value);
    console.log("Image Size :", sizevalue);
  };

  return (
    <Col style={{ width: "100%", height: "100%" }}>
      <Row
        className="Heading"
        align="middle"
        justify="center"
        style={{ width: "100%" }}
      >
        Use other option
      </Row>
      <Row align="middle" className="Subheading">
        Photo size
      </Row>
      <Row align="middle" style={{ width: "100%", marginTop: "10px" }}>
        <Radio.Group onChange={onSizechnage} value={sizevalue}>
          <Space direction="vertical">
            <Radio value={1} className="options">
              Common used size 3.5x4.5cm
            </Radio>
            <Radio value={2} className="options">
              2x2 inches
            </Radio>
            <Radio value={3} className="options">
              Adhhar card photo 2x2 inches
            </Radio>
          </Space>
        </Radio.Group>
      </Row>
      <Row align="middle" className="Subheading">
        Name and Date
      </Row>
      <Row
        align="middle"
        className="options"
        style={{ marginTop: "10px", marginLeft: "25px" }}
      >
        <Input
          className="input-box"
          placeholder="Enter Name "
          onChange={onnamechange}
        />
      </Row>
      <Row
        align="middle"
        className="options"
        style={{ marginTop: "10px", marginLeft: "25px" }}
      >
        <DatePicker
          className="input-box"
          onChange={dateChnage}
          format={dateFormatList}
        />
      </Row>
      <Row
        align="middle"
        className="options"
        style={{ marginTop: "20px", marginLeft: "25px" }}
      >
        Name and Date Color <Button className="colorbtn black">B</Button>
        <Button className="colorbtn white">W</Button>
      </Row>
      <Row
        align="middle"
        className="options"
        style={{ marginTop: "20px", marginLeft: "25px" }}
      >
        Border Width :
        <Select
          className="selector"
          defaultValue="2"
          style={{
            width: 60,
          }}
          onChange={handleChange}
        >
          <Option value="1">2</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
          <Option value="10">10</Option>
        </Select>
      </Row>
    </Col>
  );
}
export default EditOptions;
