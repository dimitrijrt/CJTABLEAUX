import  './carrousel.scss';
import logo from '../../assets/pinceau.jpg';
import manga from '../../assets/manga.jpg';
import clogo from '../../assets/img/C.png'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';



export default function Header() {
	return (
		<header className="header">
            
            
            <div className='img'>
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div className='mid'>
                <a href="/CJTABLEAUX">
            <img className='clogo' src={clogo} alt="logo" />
            </a>
            </div>
            <div className='art' >
                
            </div>
            <div className='nav'>
            <Link to="/portrait">
                 <span className='bar'>Portrait</span>
                 </Link>
                
                <Link to="/pastel" smooth={true} duration={500}>
                   <span className='bar'>Pastels</span>
                   </Link>
                   <ScrollLink to="contact" smooth={true} duration={500}>
                  <span className='bar'>Contact</span>
                  </ScrollLink>

            </div>

               
            
		</header>
	);
}
