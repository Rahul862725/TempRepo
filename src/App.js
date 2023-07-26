 
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import History from './Components/History';
import TopTeams from './Components/TopTeams';
import About from './Components/About';
 
import { Route, Routes } from 'react-router-dom'
 

function App() {
  return (
    <  > 
      <Navbar />
      <Routes>
      <Route exact path="/" element={<About/>} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/topteams" element={<TopTeams />} />
         
      </Routes>
      <Footer email="#" github="#" linkedin="#"/>
    </>
  );
}

export default App;
