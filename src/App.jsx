import "./App.css";

// IMPORT DE REACT ROUTER, ET JE RENOMME BROWSERROUTER EN ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT DE PAGES
import Home from "./pages/Home";
import Signup from "./pages/Signup";

// IMPORT DES COMPONENTS
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
