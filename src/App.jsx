import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Product from "./components/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
