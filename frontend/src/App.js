import Aboutus from "pages/Aboutus";
import Helpers from "pages/Helpers";
import Services from "pages/Services";
import Signupasahelper from "pages/Signupasahelper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./layouts/LandingPage";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signupasauser" element={<Signup />} />
          <Route path="/signupasahelper" element={<Signupasahelper />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/helpers" element={<Helpers />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
