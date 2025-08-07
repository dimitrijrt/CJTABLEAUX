

import Carroussel from '../components/carrousel/carousel';
import Home from '../components/home/home'
import ImagesList from '../components/grid/grid';
import Footer from '../components/Footer/footer';
import Fond from '../components/fond/fond';
import Card from '../components/Card/card';
import Form from '../components/Form/form';







export default function Main() {
	return (
		<div className='home'>
			 <Carroussel/>
            <Fond/>
            <Home/>
            <ImagesList/>
                <Form/>
            <Footer/>
		</div>
	)
}
