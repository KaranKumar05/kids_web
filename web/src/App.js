import './App.css';

// Components 
import EnglishPoem from './Components/EnglishPoem/Epoem';
import Games from './Components/Games/games';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbar';
import UrduPoem from './Components/UrduPoem/Upoem';
import Footer from './Components/Footer/footer';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className='contentContainer'>
        <UrduPoem />
        <EnglishPoem />
        <Games />
      </div>
      <Footer />
    </div>
  );
}

export default App;
