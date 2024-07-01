
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Dash from './pages/dash/Dash';
import Card from './pages/card/card';
import Login from './pages/Login/Login';
import Sign from './pages/Login/Sign';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element = {<Login />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/dash' element={<Dash />} />
        <Route path='/card' element={<Card />} />
        <Route path='/auth' element={<Login />} />
        <Route path='/auth-login' element= {<Sign />} />


       </Routes>
      
    </div>
  );
}

export default App;
