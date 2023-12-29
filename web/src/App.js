import './App.css';
import EnglishPoem from './Components/EnglishPoem/Epoem';
import Games from './Components/Games/games';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbar';
import UrduPoem from './Components/UrduPoem/Upoem';


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
    </div>
  );
}

export default App;
