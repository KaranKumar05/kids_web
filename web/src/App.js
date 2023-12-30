import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Components 
import EnglishPoem from './Components/EnglishPoem/Epoem';
import Games from './Components/Games/games';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbar';
import UrduPoem from './Components/UrduPoem/Upoem';
import Footer from './Components/Footer/footer';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/urduPoem" element={<UrduPoem />} />
          <Route path="/englishPoem" element={<EnglishPoem />} />
          <Route path="/games" element={<Games />} />
        </Routes>
        <UrduPoem />
        <EnglishPoem />
        <Games />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
