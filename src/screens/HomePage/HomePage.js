import { Row, Col, Image, Button, Upload, Input, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./style.css";
import uploadpic from "../../assets/icons/uploadImage.png";
import cross from "../../assets/icons/cross.png";
import info from "../../assets/icons/info.png";
import img from "../../assets/image/img.png";
import img1 from "../../assets/image/img1.png";
import img2 from "../../assets/image/img2.png";
import img3 from "../../assets/image/img3.png";
import img4 from "../../assets/image/img4.png";
import { useState } from "react";
function HomePage() {
  const [img, setimg] = useState("src of image");
  function OnImageUpload(info) {
    console.log("File uploaded");

    console.log(info.fileList[0]);
  }
  function senddata() {
    return img;
  }

  return (
    <Row className="homebody">
      <Col style={{ width: "100%", height: "100%" }}>
        <Row
          className="heading"
          align="middle"
          justify="center"
          style={{ width: "100%", marginTop: "30px" }}
        >
          Make Passport Size Photo In 5 minutes
        </Row>
        <Row
          justify="center"
          style={{ width: "100%", height: "80%", marginTop: "30px" }}
        >
          <Col xs={24} sm={24} md={20} lg={10} xl={10}>
            <Col className="left-box">
              <Row align="middle" justify="center" style={{ width: "100%" }}>
                <Image src={info} preview={false} width={"90%"}></Image>
              </Row>
            </Col>
          </Col>
          <Col xs={24} sm={24} md={20} lg={10} xl={10} className="right-box">
            <Row
              align="middle"
              justify="center"
              style={{
                width: "100%",
                height: "500px",
              }}
            >
              <Col className="img-upload">
                <Row
                  justify="center"
                  style={{
                    width: "100%",
                    marginTop: "70px",
                  }}
                >
                  <Image src={uploadpic} width={150} preview={false}></Image>
                </Row>
                <Row
                  justify="center"
                  style={{
                    width: "100%",
                    marginTop: "50px",
                  }}
                >
                  {/* <Button
                    className="upload-btn"
                    icon={<UploadOutlined />}
                    style={{
                      width: "80%",
                      height: "60px",
                      borderRadius: "10px",
                    }}
                  >
                    Upload
                  </Button> */}
                  <Upload onChange={OnImageUpload}>
                    <Button
                      //   to="/photoedit"
                      to="/photoedit"
                      style={{
                        width: "300px",
                        height: "60px",
                        borderRadius: "10px",
                      }}
                      className="upload-btn"
                      icon={<UploadOutlined />}
                    >
                      Upload
                    </Button>
                  </Upload>
                </Row>
                <Row
                  justify="center"
                  style={{
                    width: "100%",
                    marginTop: "10px",
                  }}
                >
                  {/* or drag a image */}
                  <Link to="/photoedit">
                    Next Page
                  </Link>
                </Row>
                <Row
                  className="uploadlow"
                  justify="center"
                  align="middle"
                  style={{
                    width: "100%",
                    // marginTop: "10px",
                  }}
                >
                  Ctrl+V paste
                </Row>
              </Col>
            </Row>
            <Row
              align="middle"
              justify="center"
              style={{
                width: "100%",
                height: "70px",
                // backgroundColor: "gray",
              }}
            >
              <Col style={{ width: "60px" }}>
                <Row
                  justify="center"
                  style={{
                    width: "100%",
                  }}
                >
                  <Image src={cross} preview={false}></Image>
                </Row>
                <Row
                  justify="center"
                  style={{
                    width: "100%",
                  }}
                >
                  don't try
                </Row>
              </Col>
              <Col
                style={{ width: "50px", height: "50px", marginLeft: "20px" }}
              >
                <Image src={img2} preview={false} width={40}></Image>
              </Col>
              <Col style={{ width: "50px", height: "50px", marginLeft: "5px" }}>
                <Image src={img1} preview={false} width={40}></Image>
              </Col>
              <Col style={{ width: "50px", height: "50px", marginLeft: "5px" }}>
                <Image src={img2} preview={false} width={40}></Image>
              </Col>
              <Col style={{ width: "50px", height: "50px", marginLeft: "5px" }}>
                <Image src={img3} preview={false} width={40}></Image>
              </Col>
              <Col style={{ width: "50px", height: "50px", marginLeft: "5px" }}>
                <Image src={img2} preview={false} width={40}></Image>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default HomePage;
