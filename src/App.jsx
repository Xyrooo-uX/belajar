import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Protectedroutes from "./Protected/Protectedroutes";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/about" element={<About />} />

        <Route element={<Protectedroutes />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;