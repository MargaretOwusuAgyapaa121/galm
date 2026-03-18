import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Nav";
import Home from "./Home";
import About from "./About";
import ServicePage from "./Service";
import EventsSection from "./Event";
import JoinUs from "./Join";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Registration from "./Disciple";
import Footer from "../components/Footer";
import FlyerPopup from "../components/Flyer";
import ErrorBoundary from "../components/Error";

function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <FlyerPopup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/events" element={<EventsSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/disciple" element={<Registration />} />
      </Routes>

      <Footer />
    </ErrorBoundary>
  );
}

export default App;
