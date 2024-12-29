import  './carrousel.scss';
import logo from '../../assets/pinceau.jpg';
import manga from '../../assets/manga.jpg';

export default function Header() {
	return (
		<header className="header">
            
            <div className='img'>
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div className='art' >
                
            </div>
            <div className='nav'>
                 <span className='bar'>Personnaliser</span>
                  <span className='bar'>Contact</span>
                   <span className='bar'>Tableaux</span>

            </div>

               
            
		</header>
	);
}
