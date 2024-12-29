import logo from './logo.svg';
import './App.css';
import Carroussel from './components/carrousel/carousel';
import Home from './components/home/home'
import ImagesList from './components/grid/grid';
import Footer from './components/Footer/footer';
import Fond from './components/fond/fond';
import Form from './components/Form/form';

function App() {
  return (
    <div className="App">
      
      <Carroussel/>
      <Fond/>
     
      <Home/>
     
      <ImagesList/>
        <Form/>
      
      <Footer/>
      
      
    </div>
  );
}

export default App;
