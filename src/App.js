import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import About from "./Page/About";
import BecomeInstractor from "./Page/BecomeInstractor";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/" element={<BecomeInstractor />} />
      </Routes>
    </div>
  );
}

export default App;
