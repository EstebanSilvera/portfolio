import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './component/Home';
import Repositories from './component/Repositories';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>

      <Header />

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} /> 

          <Route path='repositories' element={<Repositories />} />

        </Routes>

      </BrowserRouter>


      <Footer />

    </div>
  );
}

export default App;
