import {
  Row,
  Col,
  Button,
  Image,
  Steps,
  Input,
  Space,
  Radio,
  DatePicker,
  Select,
} from "antd";
import { useState } from "react";
// import CropImage from "../../components/CropImage";
import previewimage from "../../assets/image/preview.png";
import moment from "moment";

import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import "./pstyle.css";

const { Step } = Steps;

function PhotoEdit() {
  const [border, setborder] = useState(3);
  const [ndcolor, setndcolor] = useState("black");
  const [bgcolor, setBgcolor] = useState("#2da8fb");
  const [current, setCurrent] = useState(0);
  const [stepvalue, setstepvalue] = useState(1);
  const [nfontsize, setnamesize] = useState(40);
  const [dsize, setdsize] = useState(40);
  const [sizevalue, setSize] = useState(1);
  const [dob, setdob] = useState("");
  const [cname, setname] = useState("");

  function NextClick() {
    setstepvalue(stepvalue + 1);
    if (stepvalue == 5) {
      setstepvalue(0);
    }
  }
  const { Option } = Select;

  return (
    <Row
      className="bodyy"
      align="middle"
      justify="center"
      style={{ width: "100%", height: "90%", padding: "0px 10px" }}
    >
      <Row style={{ width: "100%", height: "100%" }}>
        <Col style={{ width: "100%", height: "100%" }}>
          <Row
            justify="center"
            className="pro"
            style={{ width: "100%", height: "12%" }}
          >
            <Row
              className="prograss"
              align="middle"
              justify="center"
              style={{
                width: "90%",
                height: "100%",
                padding: "0px 20px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <Steps
                type="navigation"
                current={stepvalue}
                onChange={(e) => {
                  setCurrent(e);
                }}
                className="site-navigation-steps"
              >
                <Step status="finish" title="Select Photo" />
                <Step status="process" title="Edit Photo" />
                <Step status="wait" title="Select Page size" />
                <Step status="wait" title="Choose Quantity" />
                <Step status="wait" title="Download" />
              </Steps>
            </Row>
          </Row>
          {/* sdjfhjsdksk */}
          <Row justify="center" style={{ width: "100%", marginTop: "20px" }}>
            <Col xs={24} sm={24} md={20} lg={7} xl={7} className="box left">
              <iframe
                title="Code sikhe"
                src="https://codesikhe.com"
                style={{
                  width: "100%",
                  height: "90%",
                }}
              />
              <Row
                justify="space-between"
                align="middle"
                className="bgcolor"
                style={{ width: "100%", height: "10%", padding: "0px 20px" }}
              >
                Backgound color :{" "}
                <div
                  className="color blue"
                  onClick={() => {
                    setBgcolor("#44a1da");
                  }}
                ></div>
                <div
                  className="color blue3"
                  onClick={() => {
                    setBgcolor("#45b3fe");
                  }}
                ></div>
                <div
                  className="color blue2"
                  onClick={() => {
                    setBgcolor("#2da8fb");
                  }}
                ></div>
                <div
                  className="color white"
                  onClick={() => {
                    setBgcolor("white");
                  }}
                ></div>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={20} lg={7} xl={7} className="box middle">
              {/* <EditOptions /> */}
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
                <Row
                  align="middle"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  <Radio.Group
                    onChange={(e) => {
                      setSize(e);
                    }}
                    value={sizevalue}
                  >
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
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                  <Select
                    className="selector"
                    defaultValue="40"
                    style={{
                      width: 60,
                    }}
                    onChange={(e) => {
                      setnamesize(e);
                    }}
                  >
                    <Option value="20">20</Option>
                    <Option value="25">25</Option>
                    <Option value="26">26</Option>
                    <Option value="27">27</Option>
                    <Option value="28">28</Option>
                    <Option value="29">29</Option>
                    <Option value="35">35</Option>
                    <Option value="37">37</Option>
                    <Option value="39">39</Option>
                    <Option value="40">40</Option>
                    <Option value="45">45</Option>
                    <Option value="47">47</Option>
                    <Option value="50">50</Option>
                    <Option value="55">55</Option>
                    <Option value="57">57</Option>
                    <Option value="60">60</Option>
                  </Select>
                </Row>
                <Row
                  align="middle"
                  className="options"
                  style={{ marginTop: "10px", marginLeft: "25px" }}
                >
                  <Input
                    className="input-box"
                    placeholder="Date of Birth "
                    onChange={(e) => {
                      setdob(e.target.value);
                    }}
                  />
                  <Select
                    className="selector"
                    defaultValue="40"
                    style={{
                      width: 60,
                    }}
                    onChange={(e) => {
                      setdsize(e);
                    }}
                  >
                    <Option value="20">20</Option>
                    <Option value="25">25</Option>
                    <Option value="26">26</Option>
                    <Option value="27">27</Option>
                    <Option value="28">28</Option>
                    <Option value="29">29</Option>
                    <Option value="35">35</Option>
                    <Option value="37">37</Option>
                    <Option value="39">39</Option>
                    <Option value="40">40</Option>
                    <Option value="45">45</Option>
                    <Option value="47">47</Option>
                    <Option value="50">50</Option>
                    <Option value="55">55</Option>
                    <Option value="57">57</Option>
                    <Option value="60">60</Option>
                  </Select>
                </Row>
                <Row
                  align="middle"
                  justify="space-between"
                  className="options"
                  style={{ marginTop: "20px", marginLeft: "25px" }}
                >
                  Name and Date Color{" "}
                  <div
                    className="color black"
                    onClick={() => {
                      setndcolor("black");
                    }}
                  ></div>
                  <div
                    className="color white"
                    onClick={() => {
                      setndcolor("white");
                    }}
                  ></div>
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
                    onChange={(e) => {
                      setborder(e);
                    }}
                  >
                    <Option value="1">1</Option>
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
            </Col>
            <Col xs={24} sm={24} md={20} lg={7} xl={7} className="box right">
              <Row
                justify="center"
                style={{
                  width: "100%",
                }}
              >
                Preview
              </Row>
              <Row
                justify="center"
                align="middle"
                style={{
                  width: "100%",
                  height: "90%",
                  // backgroundColor: "gray",
                }}
              >
                <Image
                  preview={false}
                  src={previewimage}
                  width={"350px"}
                  style={{
                    border: `${border}px solid black`,
                    backgroundColor: `${bgcolor}`,
                  }}
                />
                <div
                  className="name"
                  style={{ color: `${ndcolor}`, fontSize: `${nfontsize}px` }}
                >
                  {cname}
                </div>
                <div
                  className="date"
                  style={{ color: `${ndcolor}`, fontSize: `${dsize}px` }}
                >
                  {dob}
                </div>
              </Row>
            </Col>
          </Row>
          <Row
            justify="center"
            style={{ width: "100%", height: "12%", marginTop: "20px" }}
          >
            <Row
              align="middle"
              justify="space-between"
              style={{
                width: "90%",
                height: "100%",
                // backgroundColor: "white",
                borderRadius: "10px",
                padding: "0px 20px",
              }}
            >
              <Link to="/">
                <Button className="btn">BACK</Button>
              </Link>

              <Button className="btn" onClick={NextClick}>
                NEXT
              </Button>
            </Row>
          </Row>
        </Col>
      </Row>
    </Row>
  );
}
export default PhotoEdit;
