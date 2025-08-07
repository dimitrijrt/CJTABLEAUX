import  './carrousel.scss';
import logo from '../../assets/pinceau.jpg';
import manga from '../../assets/manga.jpg';
import clogo from '../../assets/img/C.png'

export default function Header() {
	return (
		<header className="header">
            
            <div className='img'>
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div>
                <a href="/">
            <img className='clogo' src={clogo} alt="logo" />
            </a>
            </div>
            <div className='art' >
                
            </div>
            <div className='nav'>
            <a href="/portrait">
                 <span href="/portrait" className='bar'>Portrait</span>
                 </a>
                  <a href="#pastel">
                   <span className='bar'>Pastels</span>
                   </a>
                   <a href="#contact">
                  <span className='bar'>Contact</span>
                  </a>

            </div>

               
            
		</header>
	);
}
