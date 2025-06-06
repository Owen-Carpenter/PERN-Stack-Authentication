import { Login } from "./pages/Login";
import { Landing } from "./pages/Landing";
import { Register } from "./pages/Register";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './Styles/General.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Landing" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;