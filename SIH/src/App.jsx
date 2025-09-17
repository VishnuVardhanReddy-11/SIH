import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import MapPage from "./pages/MapPage";
import Events from "./pages/Events";
import Community from "./pages/Community";
import VirtualTour from "./pages/VirtualTour";
import Archive from "./pages/ArchiveItem";
import Wallet from "./pages/Wallet";
import TourDetail from "./pages/TourDetail"; 
import RumtekMonastery from "./pages/RumtekMonestery";
function AppWrapper() {
  const location = useLocation();
  const hideFooter = location.pathname === "/"; // hide footer on Home page

  return (
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
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/tour/:id" element={<TourDetail />} />
          <Route path="/archive/:id" element={<Archive />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path='/RumtekMonastery' element={<RumtekMonastery/>} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
