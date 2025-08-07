import logo from '../../assets/pinceau.jpg';
import style from'./footer.scss';
import clogo from '../../assets/img/C.png'

export default function Footer() {
    return (

    <section className="footer" id="contact">

    
    <footer className="foot-container" >
         <img className='logofoot' src={logo} alt="logo" />
      
         <div className='button'>
         
            <p>chzz@laposte.net</p>
         </div>
         <p className="footext" >© 2024 ART. All rights reserved</p> </footer>
         </section>
    );
}