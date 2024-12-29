import logo from '../../assets/pinceau.jpg';
import style from'./footer.scss';

export default function Footer() {
    return (

    <section className="footer">

    
    <footer className="foot-container" >
         <img className='logo' src={logo} alt="logo" />
         <div className='button'>
            <p>addressemailmailcontact ou telephone</p>
         </div>
         <p className="footext" >© 2024 ART. All rights reserved</p> </footer>
         </section>
    );
}