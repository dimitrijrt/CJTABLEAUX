import logo from './logo.svg';
import './App.css';
import Carroussel from './components/carrousel/carousel';
import Home from './components/home/home'
import ImagesList from './components/grid/grid';
import Footer from './components/Footer/footer';
import Fond from './components/fond/fond';
import Card from './components/Card/card';
import Form from './components/Form/form';
import { createBrowserRouter, RouterProvider,  HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Tabpage from './pages/Tabpage/tappage'
import Pastelpage from './pages/Tabpage/pastelpage'
import Portrait from './pages/portrait/portrait'



function App() {
  return (
    <HashRouter basename="/CJTABLEAUX">
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/card" element={<Main />} />
        <Route path="/oeuvre/:id" element={<Tabpage />} />
        <Route path="/pastel/:id" element={<Pastelpage />} />
        <Route path="/portrait" element={<Portrait />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
