import React from 'react';
import { useParams } from 'react-router-dom';
import './tabpage.scss'
import Form from '../../components/Form/form'
import pasteldatas from '../../data/pastel.json'
import Footer from '../../components/Footer/footer'
import Carroussel from '../../components/carrousel/carousel'

const PastelPage = () => {
  const { id } = useParams();
  const pastel = pasteldatas.find(item => item.id.toString() === id);
 


  if (!pastel ) {
    return <div>Tableau non trouvé</div>;
  }


  const imgpastel = require(`../../assets/img/pastel/${pastel.img}`);

  

  return (

    <div>

    
    <Carroussel/>
    
    <section className='tabpage'>
        
        <div className='cartab'>
      <h1>{pastel.titre}</h1>
      <p>Taille:{pastel.taille}</p>
      <img className='imgtab' src={imgpastel} alt={pastel.title} />
    
      </div>
      
      

      
      <form  className='tabform' >
      <h3>COMMANDEZ VOTRE PASTEL</h3>
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder='adresse mail' />
                        <label>Message</label>
                        <textarea name="message" placeholder='Message' />
                        <input type="submit" value="Envoyer" id='input-submit' />
                    </form>
                    </section>
                    <Footer/>
    </div>


 
  );
};

export default PastelPage;