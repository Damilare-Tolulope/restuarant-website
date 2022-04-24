import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Home from './components/Home'
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Products from './components/Products';

const App = () => {

  return (
    
    <>
    
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
