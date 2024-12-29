import Home from "./components/Home";
import Function from "./components/Function";
import Loc from "./components/Loc";
import Estimation from "./components/Estimation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/function" element={<Function />} />
        <Route path="/loc" element={<Loc />} />
        <Route path="/estimation" element={<Estimation />} />
      </Routes>
    </Router>
  );
}

export default App;
