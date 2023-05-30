import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Subscri from "./page/Subscri";

function App() {
  return (
    <Router>
      <main className="grid h-screen place-items-center bg-Charcoal-Grey font-sans">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Subscriber" Component={Subscri} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
