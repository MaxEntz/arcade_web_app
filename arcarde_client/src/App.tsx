import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./404Page"; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;