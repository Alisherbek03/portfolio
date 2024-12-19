import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import HomeSection from "./components/homesection/HomeSection";
import Work from "./components/works/Work";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <HomeSection />
            </>
          }
        />
        <Route path="/works" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
