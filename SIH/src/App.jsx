import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import MapPage from "./pages/MapPage";
import Events from "./pages/Events";
import Community from "./pages/Community";
import VirtualTour from "./pages/VirtualTour";
import Archive from "./pages/ArchiveItem";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/events" element={<Events />} />
            <Route path="/community" element={<Community />} />
            <Route path="/tour/:id" element={<VirtualTour />} />
            <Route path="/archive/:id" element={<Archive />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
