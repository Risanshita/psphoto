import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <img
      id="logo"
      src="https://res.cloudinary.com/yoav-cloud/image/upload/v1587564735/rpldy/logo/react-uploady-text-logo-light.png"
    />
    <App />
    <p
      style={{
        marginTop: "100px",
        marginBottom: "50px",
        textAlign: "center",
        width: "100%",
        fontWeight: "bold",
      }}
    >
      Check out my recent youtube tutorial with more advanced concepts and
      examples:
      <br />
      <br />
      <a
        style={{ color: "#fff" }}
        href="https://youtu.be/a6FHlPhw6Vg:"
        target="_blank"
        rel="noopener nofollow"
      >
        How to crop images before uploading in ReactJS
      </a>
    </p>
  </React.StrictMode>,
  rootElement
);
