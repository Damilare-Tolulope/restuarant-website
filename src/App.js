import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Home from './components/Home'
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

const App = () => {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
