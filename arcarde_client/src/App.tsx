import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./404Page"; 
import Blackjack from "./games/blackjack/blackjack";
import Snake from "./games/snake/snake";
import Roulette from "./games/roulette/roulette";
import Slots from "./games/slots/slots";
import Login from "./loginPage";
import TestDev from "./assets/testdev/TestDev";




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blackjack" element={<Blackjack />} />
          <Route path="/snake" element={<Snake />} />
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/slots" element={<Slots />} />
          <Route path="/login" element={<Login />} />
          <Route path="/testdev" element={<TestDev />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;