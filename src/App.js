import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './pages/layout/NavBar';
import Footer from './pages/layout/Footer';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/empresa' element={<Empresa/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
