import "./App.css";
import { Row } from "antd";
import NavBar from "./components/NavBar";
import HomePage from "./screens/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PhotoEdit from "./screens/PhotoEdit/PhotoEdit";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/photoedit" element={<PhotoEdit />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
