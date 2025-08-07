import logo from './logo.svg';
import './App.css';
import Carroussel from './components/carrousel/carousel';
import Home from './components/home/home'
import ImagesList from './components/grid/grid';
import Footer from './components/Footer/footer';
import Fond from './components/fond/fond';
import Card from './components/Card/card';
import Form from './components/Form/form';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/main';
import Tabpage from './pages/Tabpage/tappage'
import Pastelpage from './pages/Tabpage/pastelpage'
import Portrait from './pages/portrait/portrait'



const router = createBrowserRouter([
	{
    path: "/card",
		element: <Main />
  },
  {
    path: "/",
		element: <Card />
	
	},
  {
    path: "/oeuvre/:id",
		element: <Tabpage />
   

	
	},
  {
    path: "/pastel/:id",
		element: <Pastelpage />
   

	
	},
  {
    path: "/portrait",
		element: <Portrait />
   

	
	},
	
]);

function App() {
  return (
      <>
      <RouterProvider router={router}/>
    </>
    
  );
}

export default App;
