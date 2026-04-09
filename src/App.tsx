import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";
import Signup from "./signup";
import HomePage from "./Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/Login" />} />
    </Routes>
  );
}

export default App;