import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/about/About";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Contact from "./components/contact/Contact";
import Products from "./components/products/Products";

const App = () => {
  return (
    
    <>
      <Router>
        <Header />
          <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
          </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
