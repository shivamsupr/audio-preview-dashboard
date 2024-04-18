import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import British from "./pages/British.jsx";
import Australian from "./pages/Australian.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/british" element={<British />} />
        <Route exact path="/australian" element={<Australian />} />
      </Routes>
    </Router>
  );
}

export default App;
